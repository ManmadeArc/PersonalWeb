import boto3
import json
import traceback

DyanamoDb = boto3.client("dynamodb")
Table = "Students"

#Basicamente los mismos comentarios que en la funcion anterior pero ahora mas 
# organizado
def lambda_handler(event, payload):
    
    try:    
        #Handling del metodo
        http_method = event["httpMethod"]
        # Cada metodo se encarga de enviar su estado correspondiente
        if http_method == "POST":
            return create_user(json.loads(event['body']))
        elif http_method == "GET":
            return get_request(handle_parameters(event,payload))
        elif http_method == "PUT":
            return update_user(json.loads(event['body']))
        elif http_method == "DELETE":
            return delete_request(handle_parameters(event,payload))
        else:
            return {"statusCode": 405, "body": "Method Not Allowed"}
    # EN caso de error no handleado en la ejecucion
    except Exception as e:
        #Como podemos ver el standar de le respuesta tenemos el 'statusCode' como el codigo de estado que la
        # api devolvera y body, como el objeto que devolvera nuestra api. Asi para cada uno de los metodos.
        return {"statusCode": 500, "body": json.dumps({"error":traceback.format_exc(), "received":event})}

# Funcion axulizar
def handle_parameters(event, payload):
    return str(event["pathParameters"]["id"])

# Handling metodo get
def get_request(id,optional="DEBUG"):
    if not id or type(id) != type(""):
        return {"statusCode": 400, "body": "Not parameter passed"}

    key = {"id": {"S": id}}

    response = DyanamoDb.get_item(TableName=Table, Key=key)

    if "Item" in response.keys():
        return {
            "statusCode": 200,
            "body": json.dumps(parseRawResponse(response["Item"]), indent=4),
        }
    else:
        return {"statusCode": 404, "body": "No User Found"}
    
#Handling del delete
def delete_request(id):
    if not id or type(id) != type(""):
        return {"statusCode": 400, "body": "Not parameter passed"}
    
    
    exists = get_request(id)['statusCode'] == 200
    
    if not exists:
        return {"statusCode": 404, "body": "User Doesn't Exists"}
    
    
    
    key = {"id": {"S": id}}
    
    response  = DyanamoDb.delete_item(TableName=Table, Key=key)
    
    if(response['ResponseMetadata']['HTTPStatusCode']==200):
        return {"statusCode": 204, "body": "User Deleted"}
    return  {"statusCode": 500, "body": "Something Went Wrong"}
    
    
    
#Funcion que me deja eliminar los diccionarios que devuelve por defecto el
# servicio de dyanamodb, es util pero se ve feito NGL
def parseRawResponse(item: dict):
    obj = {}
    for key, val in item.items():
        obj[key] = val[list(val.keys())[0]]
    return obj

#Creamos usuario
def create_user(payload: dict):
    #Validamos las caracteristicas del usuario
    user = validate_data(payload)
    
    exists = False
    #Verificamos que el usuario exista  y que el payload se correcto
    if user:
        exists = get_request(user["id"]["S"])['statusCode'] == 200
    else:
        return {"statusCode": 400, "body": "Incorrect Format of Payload"}
    if exists:
        return {"statusCode": 403, "body": "User Already Exists"}
    
    response = DyanamoDb.put_item(
    TableName="Students",
    Item=user
    )
    #respondemos
    if(response['ResponseMetadata']['HTTPStatusCode']==200):
        return {"statusCode": 201, "body": "User Created"}
    return  {"statusCode": 500, "body": "Something Went Wrong"}
    

    
#handling del update, lo mismo que el create pero con pasos extra
def update_user(payload: dict):
    user = validate_data(payload,"UPDATE")
    exists = False
    if user:
        exists = get_request(user["id"]["S"])['statusCode'] == 200
    else:
        return {"statusCode": 400, "body": "Incorrect Format of Payload"}
    if not exists:
        return {"statusCode": 404, "body": "User Doesn't Exists"}
    
    key = {"id": user["id"]}
    
    #Creamos la expresion que hace el update y define sus valores
    update_expression, update_dict = create_update_expression(user)
    
    #Al menos una de las propiedades es actualizada
    if not len(list(update_dict.keys())) >0:
         return {"statusCode": 400, "body": json.dumps({"error":"At Leat One property mut be updated","size":len(update_dict.keys()), "updates":list(update_dict.keys())})}
    
    response = DyanamoDb.update_item(
    TableName=Table,
    Key=key,
    UpdateExpression=update_expression,
    ExpressionAttributeValues=update_dict
    )
    #Verificamos que dynamodb respondio
    if(response['ResponseMetadata']['HTTPStatusCode']==200):
        return {"statusCode": 201, "body": "User Updated"}
    return  {"statusCode": 500, "body": "Something Went Wrong"}
    

#Funcion axuliiar para crear los statements de update de dynamo db
# y que crea los diccionarios de vairables correspondientes
def create_update_expression(user:dict):
    expression = "SET "
    dict_values = {}
    for k, v in user.items():
        if("id"==k): continue
        if(expression == "SET "):
            expression+= k + f" = :{k}" 
        else:
            expression+= ", " + k + f" = :{k}" 
        dict_values[f":{k}"] = v
    
    return expression , dict_values

#Validacion de los datos y la configuaracion de los mismos , ademas de
#encargarse de convertirlos en su diccionario requerido de DynamoDB
def validate_data(payload: dict, kind="CREATE"):
    item_configs = {
        "CREATE": {
            "id": (True, "S", "S"),
            "full_name": (True, "S", "S"),
            "personal_website": (True, "S", "S"),
        },
        "UPDATE": {
            "id": (True, "S", "S"),
            "full_name": (False, "S", "S"),
            "personal_website": (False, "S", "S"),
        }  
    }
    newObj = {}
    for key, (required, types, sval) in item_configs[kind].items():
        if   required and key in payload.keys() and type(payload[key]) == type(types):
            newObj[key] = {sval: payload[key]}
        elif (not required and not key in payload.keys()):
            continue
        elif ( not required and key in payload.keys()  and type(payload[key]) == type(types)):
            newObj[key] = {sval: payload[key]}
        else:
            return False
    return newObj


    