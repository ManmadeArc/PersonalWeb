import boto3
import json

# Creamos el cliente de sqs
sqs = boto3.client("sqs")

# Url de el sqs sobre el que escribiremos. # Esta url la podemos obtener desde la consola de aws, en la seccion de sqs
# Yo utilize como referencia la de la postuma practica 8 (Profe si la hice, se la mande por correo, no se si la reviso o no)
queue_url = "https://sqs.us-east-1.amazonaws.com/292274580527/loveconquersall"

    
    # Recibimos mensajes de 10 en 10
    #  Y establecemos que los usuarios que consuman de este sqs tendran que esperar 30 segundos antes de poder volver a acceder 
    # A dichos elmentos del sqs
response = sqs.receive_message(
        QueueUrl=queue_url,
        MaxNumberOfMessages=10,  # Numero maximo de mensajes que queremos recibir al solicitarlos al sqs
        VisibilityTimeout=30 # Tiempo que los usuarios deben esperar antes de volver a consumir el mensaje, 
        #Es decir, si un usuario hace una solicitud al sqs, como nosotros ya hemos consumido el mensaje, el usuario no podra volver a consumirlo hasta que hayan pasado 30 segundos
        # Ya que al consumirlo nosotros lo hemos bloqueado para que nadie mas pueda consumirlo
    )

while 'Messages' in response.keys() :
    elements = response['Messages']
        # Iteramos sobre los mensajes recibidos
    for entry in elements:
        # Obtenemos el handler y el mensaje
        # EL handler es el identificador del mensaje y es necesario para borrarlo del sqs
        # Es un tipo de identificador unico.
            
        handler = entry['ReceiptHandle']
        #Normalmente el mensaje viene en formato string, por lo que lo convertimos a json
        message = json.loads(entry['Body'])
        # Una vez tenemos el mensaje, lo procesamos
        
        # Una ez que hemos procesado dicho mensaje es necesario borrarlo del sqs
        # Para ello usamos el handler que obtuvimos anteriormente
        # Si no lo borramos, el mensaje se volvera a consumir en 30 segundos
        # Porque es el tiempo que hemos establecido que los usuarios deben esperar antes de volver a consumir el mensaje
        
        sqs.delete_message(
                    QueueUrl=queue_url,
                    ReceiptHandle=handler
                    )