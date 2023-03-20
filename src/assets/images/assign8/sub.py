import boto3
import json
import traceback
from datetime import datetime, timedelta



sqs = boto3.client("sqs")

# Url de el sqs sobre el que escribiremos.
queue_url = "https://sqs.us-east-1.amazonaws.com/292274580527/loveconquersall"



def lambda_handler(event, payload):
    
    
  
    try: 
        # Headers, ya que consumimos nuestra pagina desde angular y el mismo es estricto con cors, hay que incluir algunos headers para poder hacer request seguros.
        # La congiguracion entonces es la siguiente.
        head = {
                            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                            "Access-Control-Allow-Credentials": "true",
                }
        http_method = event["httpMethod"]
        # Cuando Hay cors habilitado un APi el protocolo basico que se sigue es el de hascer un HTTP Otions que nos da informacion acerca de si la api 
        #  Puede ser accedida desde otro dominio, ademas de explicar que metodos son accedidos.
        if http_method == "OPTIONS":
             return {
                    'statusCode': 200,
                        'headers':head ,
                    'body': json.dumps('Hello from Lambda!')
                    }
        # Si es el metodo get simplememente obtenemos la respuesta y mensajes del get.
        else :
            return handle_get(head)
    # Por si algo se muere.
    except Exception as e:
        return {"statusCode": 500, "body": json.dumps({"error":traceback.format_exc(), "received":event})}


def handle_get(headers):
    # Lista con los puntos del sqs que uutilizaremos.
    messages = []
    # Obtenemos el tiempo actual
    current_timestamp = datetime.now()
    
    
    # Recibimos mensajes de 10 en 10
    #  Y establecemos que los usuarios que consuman de este sqs tendran que esperar 30 segundos antes de poder volver a acceder 
    # A dichos elmentos del sqs
    response = sqs.receive_message(
        QueueUrl=queue_url,
        MaxNumberOfMessages=10, 
        VisibilityTimeout=30
        
    )
    
    # Mientras exiotan mensajes y no hayamos pasado mas de 10 segundos procesando mensajes
    while 'Messages' in response.keys() and (datetime.now()-current_timestamp) < timedelta(seconds=10):
        #Obtenemos los mensajes 
        elements = response['Messages']
        # Por cada mensaje
        for entry in elements:
            handler = entry['ReceiptHandle']
            message = json.loads(entry['Body'])
            # Si es de nosotros la procesamos
            if 'matricula' in message.keys() and message['matricula'] =="030934":
                
                timestamp = datetime.strptime(message['datetime'], '%Y-%m-%d %H:%M:%S')
                # Si el mensaje tiene es de maximo hace 24 horas lo agregamos a los mensajes que enviaremos
                if(current_timestamp - timestamp) < timedelta(hours=24):
                    messages.append(message)
                # Borramos los mensajes que procesamos.
                sqs.delete_message(
                    QueueUrl=queue_url,
                    ReceiptHandle=handler
                    )
        # Obtenemos un mensaje como al inicio
        response = sqs.receive_message(
        QueueUrl=queue_url,
        MaxNumberOfMessages=10, 
        VisibilityTimeout=30
        )       
    # Devolvemos el recurso con los headers.
    return {'statusCode':200, 'body':json.dumps({'points':messages}), 'headers':headers}

if __name__=="__main__":
   print(lambda_handler({},{}))