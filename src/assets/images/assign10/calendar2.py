from datetime import datetime
import traceback
import random
import json


def lambda_handler(event,context):
    try:
        request_context = event['requestContext']
        #Obtenemos el endpoint al que se esta accediendo
        # Esto nos permitira saber si se esta accediendo a la version html o json
        api_endpoint = request_context['resourcePath']
        #Obtenemos el parametro dates
        dates = event['pathParameters']['dates']
        #Obtenemos las fechas inicial y final
        start,end = parseDates(dates)
        #Obtenemos la diferencia entre las fechas
        diff = getTimeDifference(start,end)
        #Si se accede a la version html retornamos el resultado en html
        #para esto usamos la funcion stringifyTimeDiff
        # y seteamos el header Content-Type a text/html
        if "html" in api_endpoint:
             return {
                "statusCode": 200,
                "headers": {
                    "Content-Type": "text/html"
                },
                "body": stringifyTimeDiff(start,end,diff)
        }
        #Si se accede a la version json retornamos el resultado en json
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
    
    
def stringifyTimeDiff(start,end,diff):
    #Creamos un string con el formato solicitado, que mostrara las dos fechas ingresadas
    #Para hacerla dinamica y que cambie de color cada vez que se acceda a la pagina
    # Utilizamos la funcion random_color_hex() para obtener un color aleatorio en formato hexadecimal
     string = f"""
     <div
        style="display:flex; 
        justify-content:space-evenly; 
        align-items:center; 
        height:100%; 
        background-color: {random_color_hex()}; 
        flex-direction:column;"
        >
    <div>  Difference Between Dates {start} and {end} is </div>
    <div>  {diff[0]} Days</div>
    <div>  {diff[1]} Hours </div>
    <div>  {diff[2]}  Minutes </div>
    </div>
     """
     return string
     
     

def random_color_hex():
    #Generamos un color aleatorio en formato hexadecimal
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    #Retornamos el color en formato hexadecimal
    color_hex = f"#{r:02x}{g:02x}{b:02x}"
    return color_hex    


if __name__=="__main__":
    print("This program prints a calendar for a given month and year.")
    stringPrameter = "20230303-20230404"
    
    start,end = parseDates(stringPrameter)
    print(start," - ",end)
    
    print(getTimeDifference(start,end))
    