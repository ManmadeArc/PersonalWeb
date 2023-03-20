import random
import math
import boto3
import json
from datetime import datetime
import traceback

sqs = boto3.client('sqs')
queue_url = "https://sqs.us-east-1.amazonaws.com/292274580527/loveconquersall"

def lambda_handler(event, payload):
    
  
  try:
    # Generamos los datos
    data = generateLocation()
    # Los convertismos a una string
    data_f = json.dumps(data)
    # Los guardamos en el QUEUE
    response = sqs.send_message(
      QueueUrl=queue_url,
      MessageBody=data_f 
    )
    # devolvemos un mensaje que dice que se generaron chido el punto en cuestión
    return {"statusCode": 200, "body": json.dumps({
      'action':"Point Generated",
      'date_gen':data
    })}
  except Exception as e:
    return {"statusCode": 500, "body": json.dumps({
      'action':"Point NOT Generated",
      'error': traceback.format_exc()
    })}
    

def deg2rad(degrees):
  pi = math.pi
  return degrees * (pi/180)


def generateLocation():
    #Coordenadas de tijuana
    latitude = 32.522499
    longitude = -116.94193373232736
    
    #Generar puntos a lo largo de 10 puntos a la redonda
    max_ =10
    min_ =0
  
    #Radio de la tierra
    EARTH_RADIUS = 6371
  
    #Grados
    DEGREE = EARTH_RADIUS * 2 * math.pi / 360 * 1000
  
    #Kilometros de radio alrededor de un punto en especifico
    maxKm = max_ * 1000
    minKm = min_ * 1000
    # CValculo del rango minimo
    r = ((maxKm - minKm + 1) * random.random() ** 0.5) + minKm
    # Angulos aleatorios para generar los puntos  
    theta = random.random() * 2 *  math.pi
    theta2 = random.random() * 2 * math.pi
    # Posiciones aleaotrias
    dy = r * math.sin(theta);
    dx = r * math.cos(theta2);
    # Latitud y longitud
    newLatitude = latitude + dy / DEGREE;
    newLongitude = longitude + dx / (DEGREE * math.cos(deg2rad(latitude)));
    # Verificacion para que no se vayan los puntos a sandiego
    newLatitude = min(newLatitude,32.53697134107376- random.random()/100) 
  
    # Mensaje que se agregara al queue
    return {
      'matricula':"030934",
      'datetime':  datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
      'x':newLongitude,
      'y':newLatitude,
    }


if(__name__=="__main__"):
    for i in range(100):
      print(lambda_handler({},{}))