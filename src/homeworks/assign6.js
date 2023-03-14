"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign6 = void 0;
exports.assign6 = {
    "sections": [
        {
            "question": "1.- Modify your Lambda function to include the field City for each new record in the Students DynamoDB table. 30 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Para modificar nuestra lambda y hacer que la misma acepte los nuevos campos de CIUDAD , debido a mi configuración de validación de datos hecha en la implementación anterior, únicamente necesitaremos crear la propiedad “City” dentro de ambas configuraciones de verificación ,  donde el primer valor de la tupla representara si el campo es necesario, esto lo dejamos en False, en ambos casos, ya que será un valor que será opcional, mas no necesario."
                },
                {
                    "type": "text",
                    "value": "Los siguientes valores de la tupla consisten en el tipo de dato, y el “String” de la configuración que usa Dynamodb para definir el tipo de dato del elemento que estamos configurando. Una vez hecho esto solo queda subir los cambios, y listo, nuestra API será capaz de guardar y editar nuevos campos relacionados con la creación de un estudiante."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign6/updated_weather.py"
                }
            ]
        },
        {
            "question": "2.- Modify Read in your Lambda function to return the weather of the city assigned to the Student s DynamoDB table record . 30 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Para desarrollar una función la cual nos permita devolver el clima de una ciudad en específico , deberemos usar una API del clima."
                },
                {
                    "type": "text",
                    "value": "Este api de lo que se encargará será de solicitar información relacionada con el clima para una request en específico. Para ello es necesario acceder a una Api Key , la cual es un recurso que nos dará acceso al api."
                },
                {
                    "type": "text",
                    "value": " Para ello podemos usar paginas como la siguiente:"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/weather_api.png"
                },
                {
                    "type": "text",
                    "value": "La cual nos deja obtener una llave gratis de dicha API, bajo el registro para el uso de dicho api , esto lo podremos ver en sus pricing page."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/pricing.png"
                },
                {
                    "type": "text",
                    "value": " Procedemos a crear nuestra cuenta:"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/key.png"
                },
                {
                    "type": "text",
                    "value": " La cual nos dará una API Key, la cual será necesaria para poder acceder a su API del clima."
                },
                {
                    "type": "text",
                    "value": " Si nos vamos a su documentación podremos ver que para hacer uso de dicha API, y obtener la información del clima de una ciudad en especifica , solo necesitamos realizar lo siguiente:"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/documentation.png"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/documentation2.png"
                },
                {
                    "type": "text",
                    "value": " Una vez que vemos esto podremos ver que la API, tiene distintas formas con las que nos podremos comunicar para pedirle información, de entre ellas nos dice que la url para hacer dichas request es la siguiente:"
                },
                {
                    "type": "text",
                    "value": "Base URL : http://api.weatherapi.com/v1"
                },
                {
                    "type": "text",
                    "value": " Si queremos acceder entonces al clima actual de dicho api, entonces necesitamos acceder a el path /current.json"
                },
                {
                    "type": "text",
                    "value": "De la misma manera el api nos dice otras cosas que debemos incluir como parámetros de request, entre los más importante podemos ver:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Key : Es la llave o API key para acceder al api, y la documentación que esta debe estar presente en la llamada"
                        },
                        {
                            "level": "0",
                            "value": " q: Este par metro también es obligatorio cuando llamamos a este endpoints y nos dice que especifiquemos el lugar , sobre el cual vamos a querer la ubicación, ya se mediante ip, nombre de cuidado, código postal, etc."
                        },
                        {
                            "level": "0",
                            "value": " Aqi: Para incluir información o no sobre la calidad del aire"
                        },
                        {
                            "level": "0",
                            "value": " Lang: El lenguaje en el cual el api nos dará dichas respuestas."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Podemos verificar su funcionalidad usando algún cliente como Postman:"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/raw_request.png"
                },
                {
                    "type": "text",
                    "value": " Una vez observamos el funcionamiento de esto, podemos ver que los parámetros utilizados , son query paramerters de la url del endpoint al que accederemos, los cuales siguen la siguiente estructura"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " http://api.weatherapi.com/v1/current.json?key={key}q={ciudad}&lang={lenguaje}&aqi={yes/no}"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Para poder hacer esto en nuestro api , basta con crear un método que haga un request a dicha API para obtener lo anterior, esto lo podremos hacer con el siguiente código:"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign6/weather_function.py"
                },
                {
                    "type": "text",
                    "value": "Como pudimos ver en el resultado anterior, utilizamos el secrestamanager para no dejar visible nuestro api KEY, es decir que la misma este harcodedada en el código, y que por algún modo se pueda acceder a su valor. Para evitar esto lo que hacemos es usar el cliente de secrets manager de AWS, y crear un recurso que tendrá nuestra API KEY. Esto lo podemos crear utilizando el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws secretsmanager create-secret --name Moroyoqui_Weather_Key --secret-string '{\"key\": \"XXXXXXXXXXXXXXXXXXXXXXXXXX\"}' > secret.json"
                },
                {
                    "type": "text",
                    "value": "Donde XXXXXXXXXXXXXXXXXXX , hace referencia a nuestro api key."
                },
                {
                    "type": "text",
                    "value": "Una vez realizado lo anterior, solo queda obtener el resultado de dicha request en nuestro endpoint de GET , lo único que tendremos que realizar entonces , es después de hacer el request a nuestro ítem de dynamodb agregarle la propiedad de ciudad, mandando a llamar nuestro método de get_weather."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign6/get_request.py"
                },
                {
                    "type": "text",
                    "value": "Una vez hemos realizado los cambios, debido a que utilizamos una librería externa, deberemos incluir los paquetes que utilizamos dentro del zip file que subiremos como nuestra función lambda. Para ellos crearemos nuestro paquete."
                },
                {
                    "type": "text",
                    "value": " Creamos un directorio y metemos entramos a dicho directorio."
                },
                {
                    "type": "code",
                    "value": " mkdir package"
                },
                {
                    "type": "code",
                    "value": " cd ./package"
                },
                {
                    "type": "text",
                    "value": "Instalamos la librería request dentro del folder del paquete que acabamos de crear, y lo metemos dentro de un zip, junto con el código fuente."
                },
                {
                    "type": "code",
                    "value": " pip install requests -t ."
                },
                {
                    "type": "code",
                    "value": " zip -r api_v2.zip ./"
                },
                {
                    "type": "text",
                    "value": " Hacemos update a la función lambda y subimos nuestro archivo empaquetado en ZIP."
                },
                {
                    "type": "code",
                    "value": " aws lambda update-function-code --function-name moroyoqui_api --zip-file fileb://api_v2.zip"
                },
                {
                    "type": "text",
                    "value": "Una vez empaquetada la función, únicamente es necesario mandar llamar el endpoint y podemos ver que obtenemos el clima si la ciudad está definida."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/api_modified.png"
                }
            ]
        },
        {
            "question": "3.- Add authorization to your API Gateway API. Only valid user is admin and password abc123!@#. 30 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Para añadir autorización a nuestro Gateway API , tomaremos ventaja de una de las funcionalidades de cognito, que es un servicio de amazon encargado del manejo de usuarios para distintos usos."
                },
                {
                    "type": "text",
                    "value": "Amazon cognito se compone de un pool de usuario, lo que puede ser visto como una base de datos de usuarios, las cuales tendrán sus credenciales de uso."
                },
                {
                    "type": "text",
                    "value": "Para crear un pool de usuarios con cognito podemos usar el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws cognito-idp create-user-pool --pool-name moroyoqui_api2"
                },
                {
                    "type": "text",
                    "value": " En este comando crearemos dicho pool de usuarios, asignándole un nombre, en mi caso moroyoqui_api2."
                },
                {
                    "type": "text",
                    "value": "Dicho comando nos devolverá el ID de nuestro pool , el cual utilizaremos para poder ver las configuraciones de nuestro pool de usuarios, la cual podemos ver utilizando el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws cognito-idp describe-user-pool --user-pool-id us-east-1_0z51KH5QI > \"config_pool.json\""
                },
                {
                    "type": "text",
                    "value": "Como pudimos ver con el anterior comando, nuestro pool de usuarios fue creada, pero no existe ningún recurso que nos permita usarlo como validación para la creación de usuarios. Para poder lograr esto tenemos que crear un “cliente” de validación. Este cliente administrara los disantos flujos y métodos que podemos usar para autenticarnos . Para definir este cliente podremos utilizar el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws cognito-idp create-user-pool-client --user-pool-id us-east-1_0z51KH5QI --client-name moroyoqui_api2_client --no-generate-secret --explicit-auth-flows \"ALLOW_USER_PASSWORD_AUTH\" \"ALLOW_REFRESH_TOKEN_AUTH\" --supported-identity-providers \"COGNITO\" > client2.json"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "User-pool-id : representa la ID del pool de usuarios a la que estará ligada el cliente que creemos."
                        },
                        {
                            "level": "0",
                            "value": "Client-name : El nombre del cliente que queremos utilizar e identificara a nuestro recurso"
                        },
                        {
                            "level": "0",
                            "value": " --no-generate-secret: Con esto decimos que no queremos generar algún tipo de API-KEY que el usuario o desarrollador tendrá que usar como parámetro para autenticarse utilizando esta API."
                        },
                        {
                            "level": "0",
                            "value": " Explicit-auth-flows: Define que tipo de flujos de autorización soportara nuestro cliente, en este caso hemos seleccionado 2"
                        },
                        {
                            "level": "1",
                            "value": " “ALLOW_USER_PASSWORD_AUTH”: Admitimos el uso del flujo de usuario y contraseña"
                        },
                        {
                            "level": "1",
                            "value": " “ALLOW_REFRESH_TOKEN_AUTH”  : Admitimos el uso de refresh de tokens para mantener una sección activa."
                        },
                        {
                            "level": "0",
                            "value": "suported-identity-providers : Especifica que proveedores de identificación serán validaos para seguir este flujo, debido a que usamos un pool de usuarios de Cognito , especificados cognitivo como nuestro proveedor."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez hemos realizado lo anterior, solo nos quedara crear las políticas que nos permitan registrar usuarios dentro de nuestro pool de usuarios. En este caso creamos una política de passwords, la cual nos ayudara a definir las características mínimas de el password que nos usuarios deberán utilizar."
                },
                {
                    "type": "code",
                    "value": " aws cognito-idp update-user-pool --user-pool-id us-east-1_0z51KH5QI --policies '{\"PasswordPolicy\":{\"MinimumLength\": 8, \"Require Lowercase\": false, \"RequireNumbers\": false, \"RequireSymbols\": false, \"RequireUppercase\": false}}'"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "user-pool-id: El id del pool sobre la cual crearemos los usuarios"
                        },
                        {
                            "level": "0",
                            "value": "policies : Las distintas restricciones utilizadas para nuestra contraseña ."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "En el anterior comando básicamente especificamos que no es necesario ni mayúsculas ni minúsculas , ni números, o símbolos, lo único que necesitamos es que la contraseña sea de tamaño al menos 8."
                },
                {
                    "type": "text",
                    "value": "Una vez realizamos lo anterior solo nos queda registrar a nuestro usuario, para eso hemos de utilizar el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws cognito-idp sign-up --client-id 54ug4di32t5lsj0dfkdtt91grn --username \"admin\" --password $pass"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " --client-id: El id sobre el cliente el cual crearemos nuestro usuario."
                        },
                        {
                            "level": "0",
                            "value": " Username : El nombre de usuario"
                        },
                        {
                            "level": "0",
                            "value": " Password: La contraseña de dicho usuario."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "En este caso guarde $pass en una variable de entorno de Linux , ya que, al introducir los símbolos especiales, Linux reconocía algún tipo de comando."
                },
                {
                    "type": "text",
                    "value": "Una vez esta creado el registro del usuario, lo único que hace falta es verificar dichos usuarios, para hacerlo, ya que no configuramos ningún correo ni habilitamos la verificación de usuario por correo, podemos utilizar el siguiente comando que nos permitirá habilitar dicho usuario ."
                },
                {
                    "type": "code",
                    "value": " aws cognito-idp admin-confirm-sign-up --user-pool-id us-east-1_0z51KH5QI 0z51KH5QI --username \"admin\" > admin_confirm.json"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " user-pool-id: Id del pool de usuarios sobre el cual se registró el usuario"
                        },
                        {
                            "level": "0",
                            "value": " --username : El nombre de usuario"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez que realizamos esto, procederemos a crear un método de autorización utilizando una lambda custom, la cual se conectara con amazon cognito y validara que el cliente este dado de alta en el pool de usuarios."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign6/authorizer.py"
                },
                {
                    "type": "text",
                    "value": "Para que nuestra lambda sea resulta e interpretada de manera correcta, entonces debera devolver un documento de ploitica que de los permisos necesarios, como el que podremos ver a continuación "
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign6/policy.js"
                },
                {
                    "type": "text",
                    "value": "La politica debe tener los siguientes elementos"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Version: El formato del documento"
                        },
                        {
                            "level": "0",
                            "value": "Statement  Las acciones que se tomaran"
                        },
                        {
                            "level": "1",
                            "value": "Action: Que accion se permitira, en este caso llamar al api"
                        },
                        {
                            "level": "1",
                            "value": "Effect: Si se va a permitir o no la acción"
                        },
                        {
                            "level": "1",
                            "value": " Resource: Sobre que recurso se permite la acción, en este caso todos para hacer mas facil la implementación "
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Ahora solo queda hacer el deploy de nuestra función, con el comando"
                },
                {
                    "type": "code",
                    "value": " aws lambda create-function     --function-name moroyoqui_auth     --runtime python3.9     --zip-file fileb://handler_lambda.zip     --handler handler_lambda.lambda_handler --role arn:aws:iam::292274580527:role/lambda_ice191 > auth.lambda.create.json"
                },
                {
                    "type": "text",
                    "value": "Ya que es necesario dale permiso a API Gateway para que pueda utilizar nuestra api, lo único que tendremos que hacer es añadir un permiso, el cual le dará permisos de mandar invocar a nuestra lambda."
                },
                {
                    "type": "code",
                    "value": " aws lambda add-permission --function-name moroyoqui_auth --statement-id moroyoqui-api-test --action lambda:InvokeFunction --principal apigateway.amazonaws.com"
                },
                {
                    "type": "text",
                    "value": " Una vez hemos creado el permiso, queda crear nuestro autorizador en Api Gateway, para eso utilizaremos el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-authorizer  --rest-api-id 009kah5l7l --name moroyoqui_auth --type REQUEST --authorizer-uri arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_auth --identity-source 'method.request.header.username, method.request.header.password' --authorizer-result-ttl-in-seconds 300"
                },
                {
                    "type": "text",
                    "value": "El siguiente comando se compone de"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Rest-api-id: Id del api sobre la cual crearemos el autorizador"
                        },
                        {
                            "level": "0",
                            "value": "Name : Nombre identificador de nuestro api"
                        },
                        {
                            "level": "0",
                            "value": " Type: Hace referencia al tipo de configuración que se utilizara para hacer la validación de la identidad, y el mecanismo utilizado entre ellos podemos encontrar"
                        },
                        {
                            "level": "1",
                            "value": "Request: Utiliza los parámetros recibidos en los header para validar al usuario"
                        },
                        {
                            "level": "1",
                            "value": " Token : recibe un token JWT o cualquier tipo de OAuth para verificar el request."
                        },
                        {
                            "level": "1",
                            "value": "Cognito User pool: Utiliza un pool de usuarios de cognito para validar los datos."
                        },
                        {
                            "level": "0",
                            "value": " Authorizer-Uri: El arn del user pool o la lambda utilizada para autorizar dicho inicio de sesión."
                        },
                        {
                            "level": "0",
                            "value": " Identity-source: Indica que parámetros deben estar presentes para hacer la validación y autorización de permisos."
                        },
                        {
                            "level": "0",
                            "value": "Authorizer-result-ttl-in-seconds: El tiempo que las credenciales serán guardadas en cache para darle permisos a nuestro al usuario que uso la request, una vez pase este tiempo apigateway tendrá que hacer otro invoke de la lambda para verificar si el usuario tiene permisos."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez hemos creado nuestro autorizador, API Gateway nos devolverá el documento con la id de nuestro autorizador. Una vez obtenemos dicho dato necesitaremos crear y actualizar los métodos que tendrán como autorizador dicho método. Para hacer esto tendremos que ejecutar el siguiente comando."
                },
                {
                    "type": "code",
                    "value": "aws apigateway update-method --rest-api-id 009kah5l7l --resource-id 5ny2s6 --http-method GET --patch-operations [{\"op\":\"replace\",\"path\":\"/authorizationType\",\"value\":\"CUSTOM\"},{\"op\":\"replace\",\"path\":\"/authorizerId\",\"value\":\"n1302h\"}]'"
                },
                {
                    "type": "text",
                    "value": "Este comando incluye los siguientes parámetros :"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Rest-api-id: Id sobre la que se aplicara o modificara la configuración"
                        },
                        {
                            "level": "0",
                            "value": " Resource-id: El id correspondiente al path del recurso al cual se le hace una petición"
                        },
                        {
                            "level": "0",
                            "value": "http-method: El método sobre el cual se aplicará el cambio"
                        },
                        {
                            "level": "0",
                            "value": "patch-operations : Un objeto que dicta la configuración o el cambio que se hará sobre nuestro recurso"
                        },
                        {
                            "level": "1",
                            "value": " “op” la operación que se hará, en este caso replace"
                        },
                        {
                            "level": "1",
                            "value": " “Path” la propiedad que se cambiara"
                        },
                        {
                            "level": "1",
                            "value": " “Value”: El nuevo valor que será asignado."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " En nuestro caso anterior lo que hacemos es reemplazar la autorización de tipo nuevo que teníamos por una CUSTOM, es decir la que nosotros desarrollamos, en caso de usar un pool de cognito utilizaríamos COGNITO. El otro parámetro que cambios es el autorizerId, el cual reemplazamos lo que sea que exista por el valor del autorizador que creamos anteriormente."
                },
                {
                    "type": "text",
                    "value": " Hacemos esto para cada uno de los métodos o endpoints de nuestro api que ocupen autorización, ejecutando ese comando para cada uno de los recursos como se muestra a continuación."
                },
                {
                    "type": "code",
                    "value": "aws apigateway update-method --rest-api-id 009kah5l7l --resource-id 3wjjof --http-method POST --patch-operations [{\"op\":\"replace\",\"path\":\"/authorizationType\",\"value\":\"CUSTOM\"},{\"op\":\"replace\",\"path\":\"/authorizerId\",\"value\":\"n1302h\"}]'"
                },
                {
                    "type": "code",
                    "value": "aws apigateway update-method --rest-api-id 009kah5l7l --resource-id h8ay5q --http-method DELETE --patch-operations [{\"op\":\"replace\",\"path\":\"/authorizationType\",\"value\":\"CUSTOM\"},{\"op\":\"replace\",\"path\":\"/authorizerId\",\"value\":\"n1302h\"}]'"
                },
                {
                    "type": "code",
                    "value": "aws apigateway update-method --rest-api-id 009kah5l7l --resource-id 4e6eeo --http-method PUT --patch-operations [{\"op\":\"replace\",\"path\":\"/authorizationType\",\"value\":\"CUSTOM\"},{\"op\":\"replace\",\"path\":\"/authorizerId\",\"value\":\"n1302h\"}]'"
                },
                {
                    "type": "text",
                    "value": "Una vez esto esté listo, solo necesitaremos crear el deployment de nuestro api para poder usar dichos métodos, esto se hará utilizando el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-deployment --rest-api-id 009kah5l7l --stage-name dev --description 'Deployment to dev stage'"
                },
                {
                    "type": "text",
                    "value": " Una vez realizado esto solo queda acceder a nuestro api y verificar dichos cambios."
                },
                {
                    "type": "text",
                    "value": " GET Utilizando autorización con credenciales validas."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/valid.png"
                },
                {
                    "type": "text",
                    "value": " GET Utilizando autorización con credenciales invalidas."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/novalid.png"
                },
                {
                    "type": "text",
                    "value": " GET Utilizando autorización sin credenciales."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign6/nocred.png"
                }
            ]
        },
        {
            "question": "4.- The Test Driven Development is the best thing that has happened to software design article and write a summary and opinions about it. 10 points.",
            "content": [
                {
                    "type": "text",
                    "value": " TDD o Test Driven Development es una técnica de desarrollo de aplicaciones que ha sido implementada en el desarrollo y diseño de software como una herramienta la cual nos permite aumentar la calidad de nuestro código, mediante el seguimiento de unas a pautas que permiten escribir solo el código necesario, manteniendo un diseño simple y fácilmente actualizable."
                },
                {
                    "type": "text",
                    "value": " TDD,  sigue el método científico (de cierta manera), a la hora de realizar código. El mismo consiste en un proceso muy simple de 3 pasos, crear reglas (estudiar el fenómeno) y verificar que el código no las pasa (porque aún no hay una implementación), después procedemos a crear un modelo que satisfaga nuestras reglas (hipótesis y observación ) , y finalmente la refinación, en base a los resultados de nuestro modelo, ajustamos el mismo para con las reglas que planteamos y generamos una versión nueva de programa ."
                },
                {
                    "type": "text",
                    "value": "Este proceso, lo repetimos tantas veces nuevas características queremos agregar a un sistema (que ya está definido) y de esta manera podremos entonces crear un proceso iterativo, que de manera continua , nos lleva a diseñar sistemas robustos que pueden ser fácilmente actualizables, y ayudan además a la detección temprana de bugs."
                },
                {
                    "type": "text",
                    "value": "Algo que se nos comenta en el artículo, son las diferencias entre distintos acercamientos a la hora de desarrollar pruebas. En él se nos plantea que hay 2 vertientes, cuando el código se realiza primero, y las pruebas después o viceversa. Una de las desventajas del primer acercamiento es  que cuando desarrollas el código primero, el decidir cuantos “test” han de ser agregados es algo difícil de definir, además de que no existe una manera real de  aseguramos que la implementación del código está terminada, porque tus test se verán influenciados en base a tu implementación."
                },
                {
                    "type": "text",
                    "value": "Por otro lado, al seguir realizar las pruebas primeras, cono no existe dicha implementación, te ves obligado a adentrarte más en los requerimientos del sistema , y ahondar en los casos de uso primarios, secundarios y los “Edge cases”, para los cuales puedes diseñar pruebas más robustas. Debido a esto el alcance del código está definido con base en los requerimientos del sistema, y es fácil definir la cantidad de casos de prueba y una vez realices la implementación, será más sencillo ya que tienes definido todos los caos en lo que necesitas algo."
                },
                {
                    "type": "text",
                    "value": "A pesar de estas ventajas del TDD, existe otra que es más evidente, y es la de proveer feedback acerca del diseño y la arquitectura de ciertas aplicaciones, al hacer evidentes ciertos errores de diseño que dificultan la “testeabilidad” de un componente. Entre esto podemos encontrar los siguientes casos"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Spying or mocking. Cuando se hacen implementaciones mock de ciertos servicios, donde se espera que el código se comporte de cierta manera, se sumen muchas cosas del código, posponiendo test cases para el futuro. Esto hace que, al integrar servicios de manera local, se difícil de implementar pruebas en el código."
                        },
                        {
                            "level": "0",
                            "value": " Datos Variables: Cuando existen datos que varían entre prueba y prueba, van a existir datos que no son accesibles fuera del método, por lo que es imposible acceder a sus valores. Esto nos indicaría que el método está muy acoplado, y que tal vez sea mejor agregar dicha variable como una propiedad dentro de la clase a la cual se pueda acceder fácilmente."
                        },
                        {
                            "level": "0",
                            "value": " Configuración amontonada.  Si la instanciación de una clase o método tiene que inicializar demasiados otros servicios o clases para funcionar, esto puede indicar que el diseño está muy acoplado, y que es mejor subdividir las tareas."
                        },
                        {
                            "level": "0",
                            "value": "Mocking Recursivo infinito. Esto suele pasar cuando información va de una clase, a otra y a otra, y a otra y a otra. Esto puede indicar que la información se está escapando entre componentes, haciendo que cada una tome decisiones de código acerca de y que actualizar el método , implique alterar todas las clases, lo que indica un mal diseño."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " En general TDD, es una herramienta que nos permite enfocarnos en los requerimientos y en lo que es estrictamente necesario para alcanzar la funcionalidad, además de proveer una herramienta que ayuda a tomar decisiones de diseño. En general , he utilizado brevemente TDD antes, y he encontrado que es una herramienta bastante útil, sobre todo porque nos ayuda a construir un mínimo estándar de calidad y evitar errores catastróficos para ambientes de producción (diosito no me lleves)"
                }
            ]
        }
    ]
};
//# sourceMappingURL=assign6.js.map