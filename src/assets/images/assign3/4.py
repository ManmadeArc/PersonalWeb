import boto3



#Creamos un cliente de dynamodb, el cual utilizara el perfil jaquezAws
client = boto3.Session(profile_name="JaquezAws").client('dynamodb')

#Definimos la llave primaria, esta nos servira como una condicion con la cual
# Buscaremos el resgitro item que queramos eliminar
key = {"id":{"S":"000000"}}

# Utilizamos el metodo delete item el cual le dira a la base de datos en dynamosb
# Que queremos borrar el elemetno de la table Students definido en el metodo, 
# El cual contiene la llave que definimos anteriormente
response = client.delete_item(
    TableName="Students",
    Key=key,
)
#Imprimimos la respuesta
print("Response", response)

