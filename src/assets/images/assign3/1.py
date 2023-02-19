import boto3
import json

#Creamos un cliente de dynamodb, el cual utilizara el perfil jaquezAws
client = boto3.Session(profile_name="JaquezAws").client('dynamodb')

# Creamos un objeto el cual sera el objeto el cual buscamos insertar
item ={}
#Abrimos el archivo por defecto con la funcion que nos provee python para leer archivos
with open('2.json') as file:
    #Utilizamos la lbreria json para interpretar el archivo que hemos leido, y para que se parsee 
    # y se interprete como un diccionario de python
    # y lo asignamos a la variable 
    item = json.load(file)


# Utilizamos el cliente de dynamo db que cresmoa anteriormente , y utilizamos su metodo put item el
# cual requiere d introducir la TableName sobre la cual haremos la insercion en este caso Students
# y agregamos el item correspondiente al que cargamos en la variable item. Guardamos el objeto en 
# La variable respuesta
response = client.put_item(
    TableName="Students",
    Item=item
)

#Imprimimos el resultado de la operacion
print("Response", response)

