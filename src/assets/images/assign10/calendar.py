
from datetime import datetime
import traceback
import random
import json


def lambda_handler(event,context):
    try:
        # Obtenemos el parametro fechas enviado en la URL
        dates = event['pathParameters']['dates']
        #Obtenemos las fechas parseadas como objetos datetime
        start,end = parseDates(dates)
        #Calculamos las diferencia entre las fechas
        diff = getTimeDifference(start,end)
   
        
        return {
            'statusCode': 200,
            'body':  json.dumps({'result':stringifyTimeDiffs(diff)}),
        }
    except Exception as e:
        return {
            'statusCode': 400,
            'body':  json.dumps({'error':traceback.format_exc()}),
        }

def parseDates(queryString):
    #Usamos el caracter - para separar las fechas
    start,end = queryString.split("-")
    #Validamos que las fechas tengan el formato correcto al tener 8 caracteres cada una
    # La primera fecha ingresada sera la fecha inicial y la segunda la fecha final
    # Independientemente del orden en que se ingresen
    
    if(len(start)!=8 or len(end)!=8):
        raise ValueError("Invalid date format")
    #Creamos objetos datetime con las fechas en los valores especificados a las 00:00:00 Que es cuando comienza el dia
    start =  datetime(int(start[0:4]), int(start[4:6]), int(start[6:8]),0,0,0)
    # Realizamos lo mismo con la fecha final, iniciando el dia a las 23:59:59
    
    end = datetime(int(end[0:4]), int(end[4:6]), int(end[6:8]),23,59,59)
    

    return start,end


def getTimeDifference(start,end):
    #Obtenemos la diferencia entre las fechas
    diff =  end - start
    # la funcion total_seconds() nos devuelve la diferencia en segundos 
    # la cual convertimos a dias, horas y minutos
    # utilizamos la funcion abs() para obtener el valor absoluto de la diferencia
    diff = abs(diff.total_seconds())
    #Obtenemos los dias, horas y minutos
    #Obtenemos la cantidad de dias
    dias = int(diff // (24 * 3600))
    #Obtenemos el resto de la division para obtener las horas restantes
    diff = diff % (24 * 3600)
    #Obtenemos la cantidad de horas
    horas = int(diff // 3600)
    #Obtenemos el resto de la division para obtener los minutos restantes
    diff %= 3600
    #Obtenemos la cantidad de minutos
    minutos = int(diff // 60)
    
    # A esto falta agregarle la cantidad de segundos restantes
    #Sin embargo eso no dice se especifica en las instrucciones
    
    #UN posible error que podria ocurrir es que la fecha inicial sea mayor a la fecha final
    # En estos casos la diferencia sera negativa, pero al utilizar la funcion abs() se soluciona
    # Ya que se obtiene el valor absoluto de la diferencia
    
    #Por otro lado, al ser la fecha inicial mayor a la fecha final
    # Al hacer la diferencia entre las fechas,  se obtendran x dias, 0 horas y  0 minutos
    # POrque la diferencia entre fechas es de  1 segundo
    
    #Por ejemplo # 20230303:000000 - 20230302:235959 = 1 segundo
    # Esto no sera evidente en el resultado final, ya que no utilizamos los segundos

    
    
    #Retornamos los dias, horas y minutos
    
    return dias,horas,minutos
    
def stringifyTimeDiffs(diff):
    #Retornamos un string con el formato solicitado
    return "{} days, {} hours, {} minutes".format(diff[0],diff[1],diff[2])