def get_weather(dict:dict):
    if not "city" in dict.keys():
        return "NO DATA FOUND"
    
    ## Obtenemos la key de unestra api
    key = secrets.get_secret_value(SecretId='Moroyoqui_Weather_Key')
    key = json.loads(key['SecretString'])
    key = key['key']
    
    #Hacemos el request con los query parametrs a manita
    response = requests.get(f"http://api.weatherapi.com/v1/current.json?key={key}&q={dict['city']}&aqi=no&lang=es")
    
    #Manejamos el caso de que la api no devuelva una respuesta valida
    if(response.status_code!=200): return "No Valid City"
    response = json.loads(response.content)
    
    obj ={
        "Celsius":response['current']['temp_c'],
        "Condición":response['current']['condition']['text'],
    }
    
    return obj