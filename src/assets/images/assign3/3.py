import boto3



#Creamos un cliente de dynamodb, el cual utilizara el perfil jaquezAws
client = boto3.Session(profile_name="JaquezAws").client('dynamodb')

#Definimos la llave primaria, esta nos servira como una condicion con la cual
# Buscaremos el resgitro item definidos
key = {"id":{"S":"030934"}}

# Utilizamos el metodo get item el cual nos devovlera los elmentos que 
# consigan hacer match con la llave o identificador con el cual realizamos la busqueda
response = client.get_item(
    TableName="Students",
    Key=key,
)

#Obtenemos el resultado de la query que queremos realizar
print("Response", response)

