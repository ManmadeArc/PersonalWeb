import boto3
import traceback

client = boto3.client('cognito-idp')



def lambda_handler(event, context):
    if not "methodArn" in event.keys():
        raise Exception("Not Authorized Lack Of Arn")
    try:
        #Obtenemos las credenciales de atenticacion de los headers de la request.
        headers=event['headers']
        username = headers["username"]
        password = headers['password']
        
    
        # Iniciamos el codigo el cual nos verificara el inicio de secion
        response = client.initiate_auth(
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': username,
                'PASSWORD': password
            },
            ClientId='54ug4di32t5lsj0dfkdtt91grn'
        )
    #El cliente tira una exepcion si no existe el usaurio.    
    except Exception as e:
         #No Autorizamos el inicio de Sesion.
       raise Exception('Unauthorized')
    #Devolvemos un documento tipo IAM POLICY que dejara acceder a los recursos.
    return generate_policy('user','Allow',event['methodArn'])
    
#Generamaos dicho documento    
def generate_policy(principalId, effect,resource):

    authResponse = {}
    
    #PrincipalID es un identificador, 
    authResponse['principalId'] = principalId
    #Si no aplicamos ningun efecto , o el recurso es nul no devolvemos una politica valida.
    if( effect !=None and resource!=None):
        policy = {}
        #Formato de version y conversion estanddar
        policy['Version'] = "2012-10-17"
        #Lista con los permisos que deremos
        policy['Statement'] = []
        
        statement = {}
        # Que accion estamos dando permiso, en este caso invocar un edpoint de el api
        statement['Action'] = "execute-api:Invoke"
        # El efecto que aplicaremos, Deny | Allow
        statement ['Effect'] = effect
        # A que recursos le dartemos estos permisos
        # Normalmente lo que se hace es limitar los recursos por api, pero ya que esto es
        #  Un tipo de preuba de concepto le doy permiso a todos los endpoitns
        statement['Resource'] = "*"
        # Agregamos la politica a los recursos
        policy["Statement"].append(statement)
        #  Terminamos de contruit el documento
        authResponse['policyDocument'] = policy
    #regresamos el IAM policy con los debiudos permisos.
    return authResponse