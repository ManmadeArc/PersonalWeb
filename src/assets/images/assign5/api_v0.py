import boto3
import json
import traceback

DyanamoDb = boto3.client("dynamodb")
Table = "Students"

#Metodo principal utilizado para manejar los evetnos y llamadas de
# la lambda
def lambda_handler(event, payload):
    
    try:    
        #Obtenemos el metodo y dejamos que cada funcion haga el handling de sus 
        # correspondientes datos
        http_method = event["httpMethod"]
        response = ""
        if http_method == "POST":
            response = create_user(json.loads(event['body']))
        elif http_method == "GET":
            response = get_request(handle_parameters(event,payload))
        elif http_method == "PUT":
            response = update_user(json.loads(event['body']))
        elif http_method == "DELETE":
            response = delete_request(handle_parameters(event,payload))
           
        #Devolvemos la respuesta como un codigo. 
        return {"statusCode":200, "body":response}
    #En caso de error dumpeamos el error  es mala pratica en ambientes de prod, pero para dev jala finisimo
    except Exception as e:
        return {"statusCode": 500, "body": json.dumps({"error":traceback.format_exc(), "received":event})}

#FUncion auxiliar que cree para obtener los parametros del path
def handle_parameters(event, payload):
    return str(event["pathParameters"]["id"])

#Hacemos handling de del metodo get
def get_request(id,optional="DEBUG"):
    if not id or type(id) != type(""):
        return json.dumps({"Not parameter passed"})

    key = {"id": {"S": id}}

    
    response = DyanamoDb.get_item(TableName=Table, Key=key)
    #si tenemos respuesta
    if "Item" in response.keys():
        return  json.dumps(parseRawResponse(response["Item"]), indent=4)
    #Si no  
    else:
        return json.dumps({"No User Found"})
  
  #handling del metodo de delete  
def delete_request(id):
    if not id or type(id) != type(""):
        return json.dumps( {"Not parameter passed"})
    
    
    exists = get_request(id) == json.dumps({"No User Found"})
    
    if not exists:
        return json.dumps({ "User Doesn't Exists"})
    
    
    
    key = {"id": {"S": id}}
    
    response  = DyanamoDb.delete_item(TableName=Table, Key=key)
    #Si obtenemos output de dynamo db
    if(response['ResponseMetadata']['HTTPStatusCode']==200):
        return json.dumps( {"User Deleted"})
    return  json.dumps({ "Something Went Wrong"})
    
    
    
    

#Funcion para  convertir un objeto de dynamo db con sus propiedades de String y eso a 
# y eleminar esos parametros
def parseRawResponse(item: dict):
    obj = {}
    for key, val in item.items():
        obj[key] = val[list(val.keys())[0]]
    return obj

#Handling de la funcion de crear usuario
def create_user(payload: dict):
    user = validate_data(payload)
    
    exists = False
    if user:
        exists = json.dumps({"No User Found"})
    else:
        return json.dumps({"Incorrect Format of Payload"})
    if exists:
        return json.dumps({ "User Already Exists"})
    
    response = DyanamoDb.put_item(
    TableName="Students",
    Item=user
    )
    if(response['ResponseMetadata']['HTTPStatusCode']==200):
        return json.dumps({ "User Created"})
    return  json.dumps({ "Something Went Wrong"})
    

    
#Handling de la funcion de crear usuario
def update_user(payload: dict):
    user = validate_data(payload,"UPDATE")
    exists = False
    if user:
        exists = json.dumps({"No User Found"})
    else:
        return json.dumps({"Incorrect Format of Payload"})
    if not exists:
        return json.dumps( {"User Doesn't Exists"})
    
    key = {"id": user["id"]}
    
    update_expression, update_dict = create_update_expression(user)
    
    if not len(list(update_dict.keys())) >0:
         return json.dumps({"error":"At Leat One property mut be updated","size":len(update_dict.keys()), "updates":list(update_dict.keys())})
    
    response = DyanamoDb.update_item(
    TableName=Table,
    Key=key,
    UpdateExpression=update_expression,
    ExpressionAttributeValues=update_dict
    )
    if(response['ResponseMetadata']['HTTPStatusCode']==200):
        return json.dumps({ "User Updated"})
    return json.dumps( {"Something Went Wrong"})
    

#  Funcion axuliar para la creacion de la expresion de actualización
# Simplemente lo hace ver mas bonnito y me deja separarlo en metodos
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

# Funcion de validacion, esta checa que el elemento que fue creado cumpla con los requisistmos 
# minimos para la insercion de un elmento, en este caso para la configuracion de creacion y 
# de actualizacion
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
        print(required,types,sval,key, key in payload.keys())
        if   required and key in payload.keys() and type(payload[key]) == type(types):
            newObj[key] = {sval: payload[key]}
        elif (not required and not key in payload.keys()):
            continue
        elif ( not required and key in payload.keys()  and type(payload[key]) == type(types)):
            newObj[key] = {sval: payload[key]}
        else:
            return False
    return newObj


    