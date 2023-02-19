import boto3
import json


#Creamos un cliente de dynamodb, el cual utilizara el perfil jaquezAws
client = boto3.Session(profile_name="JaquezAws").client('dynamodb')

#Definimos la llave primaria, esta nos servira como una condicion con la cual
# Buscaremos el resgitro item que queramos modificar
# Esta servira como un identificador del registro a modificar
key = {"id":{"S":"000000"}}
# Creamos una expresion que le dira a dynamodb que queremos cmbiar
# ENe ste caso HAcemos una accion SET la cual cambia el valor
# De una propiedad, en este caso full name a el valor que especifiquemos
update_expression = "SET full_name = :val1"

# Acto seguido creamos un diccionario de python con llave el nombre de el valor que 
# decidimos utilizar como variable, y creamos un diccionario con la informacion relevante
# en este caso debido a que dynamodb nos exige el especificar el tipo de dato, la llave es
# S incluye el tipo de dato
update = {
    ":val1":{"S":"Panchito Chocolate"}
}

#Llamamos al metodo del cliente el cual nos permite actualizar un item basandonos en
# La table a la que vamos a acceder
# La key o llave primaria que identifica al recurso que queremos buscar
# LA expresion de modificacion al dcumento
# Y finalmente el diccionario con los valores a utilizar y cambair definidos el la 
# expresion de update
response = client.update_item(
    TableName="Students",
    Key=key,
    UpdateExpression=update_expression,
    ExpressionAttributeValues=update
)

#Imprimimos la respuesta
print("Response", response)

