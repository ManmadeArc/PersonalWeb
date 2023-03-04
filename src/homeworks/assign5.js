"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign5 = void 0;
exports.assign5 = {
    "sections": [
        {
            "question": "1.-  Write a Lamba function to CRUD over the Students DynamoDB table. 30 points.",
            "content": [
                {
                    "type": "text",
                    "value": " Para poder crear una LAMBDA en aws , primero debemos definir que es una LAMBDA, además de definir que es CRUD."
                },
                {
                    "type": "text",
                    "value": "Una función lambda de aws es un tipo de función “serverless” o “FaS (Functions as Services)”, es decir, la mismo no necesita de una infraestructura  dedicada para poder ejecutar su función. Mediante este tipo de arquitectura o diseño se generan funciones  efímeras (pueden desaparecer de memoria) y sin estado (no tienen noción de algún tipo de estado de datos , per se)."
                },
                {
                    "type": "text",
                    "value": " De esta manera el desarrollador no se preocupa por administrar la infraestructura de el servidor donde se ejecutarán sus funciones, si no simplemente de definir sus funciones. Dentro de estas ventajas podemos encontrar las siguientes:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Escalabilidad"
                        },
                        {
                            "level": "0",
                            "value": " Ahorro de Costos (Debido a no tener que pagar por un servicio o hardware dedicado 24/7)"
                        },
                        {
                            "level": "0",
                            "value": " Alta disponibilidad y tolerancia a fallas"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Por otro lado, un CRUD, hace referencia a la gestión de datos digitales y sus operaciones básicas , entre ellas podemos encontrar las siguientes."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Create"
                        },
                        {
                            "level": "0",
                            "value": " Read"
                        },
                        {
                            "level": "0",
                            "value": " Upate"
                        },
                        {
                            "level": "0",
                            "value": " Delete"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Estas operaciones básicas hacen acrónimo de la palabra crud , y son a las operaciones que se refieren. En los contextos de bases de datos CRUD suele hacer referencia a los métodos INSERT, SELECT, UPDATE y DELETE mientras que en request HTTP nos solemos referencias a los métodos POST, GET , PUT y DELETE respectivamente."
                },
                {
                    "type": "text",
                    "value": " Una vez teniendo esto en cuenta entonces , lo que necesitamos hacer es crear una lambda para poder hacer dichas operaciones."
                },
                {
                    "type": "text",
                    "value": "Para realizar esto, podemos crear una función utilizando Python para que lea, desde nuestra tabla de Dynamodb , como lo podremos ver en nuestro archivo a continuación."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign5/api_v0.py"
                },
                {
                    "type": "text",
                    "value": "Una vez creado el código que definiar el comporamiento de la lambda es necesario meterlo dentro de un archivo zip, junto a todas sus dependencias (paquetes) adicionales o externos, para que a la hora que lambda quiera hacer el uso de nuestra función, aws tenga las paquetes y funciones neesarias para su ejecución. Para subir dicha función podemos utilizar el siguiente comando de AWS."
                },
                {
                    "type": "code",
                    "value": "aws lambda create-function     --function-name moroyoqui_api     --runtime python3.9     --zip-file fileb://api_v1.zip     --handler api_v1.lambda_handler --role arn:aws: iam:: 292274580527:role/lambda_ice191"
                },
                {
                    "type": "text",
                    "value": "Dentro de la función anterior los parámetros que reciben son los siguiente:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " function-name : EL nombre único e identificador de nuestra función"
                        },
                        {
                            "level": "0",
                            "value": " runtime : en qué ambiente se debería ejecutar nuestra función"
                        },
                        {
                            "level": "0",
                            "value": "zip-file : El archivo zip que contendrá el paquete de archivos necesario para la ejecución de dicha función"
                        },
                        {
                            "level": "0",
                            "value": "handler : la función que deberá ser llamada a la hora de la ejecución del archivo o lambda. Esta indica el nombre del archivo seguido de un punto, y el nombre de la función que hará el handling de los eventos"
                        },
                        {
                            "level": "0",
                            "value": "Finalmente, el rol: Dado que queremos limitar los servicios y las cosas que puede hacer nuestra función lambda es necesario de proveerle de permisos para poder acceder a distintos servicios dentro de aws"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Para poder elegir uno de los roles que tenga los permisos necesarios podemos hacer uso del comando"
                },
                {
                    "type": "code",
                    "value": "aws iam list --roles"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign5/roles.js"
                },
                {
                    "type": "text",
                    "value": "Una vez que encontremos el rol que tenga los permisos necesarios, podremos entonces crear nuestro método. En nuestro caso para darle los mismos permisos que nuestra cuenta , podemos buscar un rol que tenga el permiso sts:assumeRole lo que le permitirá a la lambda acceder o tomar los permisos que tiene el usuario. Es importante que le demos permiso únicamente al servicio lambda.amazonaws.com. Para que otros servicios no pueden tomar ventaja de este rol."
                },
                {
                    "type": "text",
                    "value": "Una vez que hemos subido nuestra función, solo quedara acceder a la configuración de la función para verificar que todo este correcto. Lo cual podemos hacer mediante siguiente comando"
                },
                {
                    "type": "code",
                    "value": "aws lambda get-function --function --name moroyoqui _api > api.config.json"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign5/api.config.js"
                },
                {
                    "type": "text",
                    "value": "Una vez que verificamos el estado y haya que comprobado que la función haya sido lanzada por el aws, podemos hacer uso de un script similar al siguiente para verificar que nuestra lambda funciona correctamente."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign5/test-function.sh"
                },
                {
                    "type": "text",
                    "value": " Ejecutamos el comando:"
                },
                {
                    "type": "code",
                    "value": "bash test-function.sh"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign5/out"
                },
                {
                    "type": "text",
                    "value": "Finalmente, solo queda observar que la función se ejecuta tal y como lo definimos en nuestro archivo Python."
                }
            ]
        },
        {
            "question": "2.-  Write an API Gateway API to CRUD over your Lambda function. 30 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Antes de empezar a crear nuestro API Gateway tenemos que recordar que es un api y que es un api Gateway. Primeramente, un API es una aplicación interface que le permite a diferentes programas externos comunicarse con la aplicación que sostiene la API. De esta manera el api se encarga de establecer un método de comunicación y estándares que les permitan a los demás servicios el saber como interactuar con este servicio para realizar una acción determinada."
                },
                {
                    "type": "text",
                    "value": "Por otro lado, un Gateway es en español significa puerta de enlace. De esta manera un api Gateway es una especie de centro de operaciones , el cual permite conectar diferentes definiciones de API’s o servicio bajo una misma interfaz. Siendo la encargada de dirigir y manejar el trafico y protocolos necesarios para la interacción con un servicio en específico."
                },
                {
                    "type": "text",
                    "value": "Este proceso , es útil para poder crear un api la cual no este atada a un lenguaje de programación en específico y que, por otro lado, pueda servir para realizar/seleccionar el proceso o servicio interno adecuado para la ejecución de dicha tarea."
                },
                {
                    "type": "text",
                    "value": " Para poder crear un api Gateway utilizando aws podemos utilizar el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-rest-api --name Moroyoqui_StudentsAPI > createApiGateWay.output.json"
                },
                {
                    "type": "text",
                    "value": "Esto creara nuestro api Gateway inicial, dándole el nombre de Moroyoqui_StudentsAPI, al ejecutar el comando se nos devolverán identificadores internos, así como el estado de deploy de nuestra aplicación.  Sin embargo al crear nuestro Gateway de esta manera, no tendremos configurado nada, más que el registro de que debe de existir un recurso para manejar nuestra api. Esto lo podremos observar ejecutando el siguiente comando."
                },
                {
                    "type": "code",
                    "value": "aws apigateway get-resources --rest -api-id 009kah5l7l"
                },
                {
                    "type": "text",
                    "value": "Como pudimos observar , no existe ningún recurso dentro de nuestro api , no están definido ningún de los PATH’s a seguir, y tampoco existe una asociación entre esta función y que es lo que la misma debería hacer. Para poder generar estos recursos es entonces necesario crear dichos PATH’s, los cuales se pueden crear de la siguiente manera."
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-resource     --rest-api-id 009kah5l7l  --parent-id kccj5gxdbl  --path-part students > CreateResourceApi.output.json"
                },
                {
                    "type": "code",
                    "value": "aws apigateway create-resource     --rest-api-id 009kah5l7l     --parent-id qo75up     --path-part \"{id}\" > read Endpoint.output.json"
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-resource     --rest-api-id 009kah5l7l     --parent-id qo75up     --path-part \"create\" > createEndpoint.output.json"
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-resource     --rest-api-id 009kah5l7l     --parent-id qo75up     --path-part \"delete\" > delete1Endpoint.output.json"
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-resource     --rest-api-id 009kah5l7l     --parent-id p7s9ff     --path-part \"{id}\" > delete2Endpoint.output.json"
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-resource     --rest-api-id 009kah5l7l     --parent-id qo75up     --path-part \"update\" > updateEndpoint.output.json"
                },
                {
                    "type": "text",
                    "value": "Los anteriores comandos lo que hicieron fueron definir los distintos métodos para cada una de las ejecuciones , entre ellos podemos ver algunas propiedades que es necesario observar."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Rest-api-id : Hace referencia al id del api sobre la que crearemos el recurso"
                        },
                        {
                            "level": "0",
                            "value": " parent-id : Hace referencia a el path “padre” sobre el cual se creará el nuevo recurso"
                        },
                        {
                            "level": "0",
                            "value": " path-part: El nombre o parte del path que tendrá dicha sección. Aquí cabe destacar que existen paths que pueden ser “variables” es decir, variar y ser tomado como argumento para una función en especifica. Para esto se puede crear un path el definirlo entre corchetes {} y el nombre, lo que le dirá a api Gateway como nombrar dicha propiedad de la url."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez hemos creado estos métodos, solo nos falta integrarlos con nuestra función lambda que se encargara de manejar los cometidos de dicha request HTTP, así como definir que métodos serán aceptados para que recursos de la URL. Para esto podemos usar los siguientes parámetros ."
                },
                {
                    "type": "code",
                    "value": "aws apigateway put-method     --rest- api -id 009kah5l7l     --resource-id 5ny2s6     --http-method GET     --authorization-type \"NONE\"     --request-parameters \"method.request.path.id=true\" > put_method.output.json"
                },
                {
                    "type": "code",
                    "value": "aws apigateway put-method     --rest-api-id 009kah5l7l     --resource-id 3wjjof     --http-method POST     --authorization-type \"NONE\"  > put_method_create.output.json"
                },
                {
                    "type": "code",
                    "value": " aws apigateway put-method     --rest-api-id 009kah5l7l     --resource-id h8ay5q     --http-method DELETE   --request-parameters \"method.request.path.id=true\"   --authorization-type \"NONE\"  > put_method_delete.output.json"
                },
                {
                    "type": "code",
                    "value": " aws apigateway put-method     --rest-api-id 009kah5l7l     --resource-id 4e6eeo     --http-method PUT     --authorization-type \"NONE\"  > put_method_update.output.json"
                },
                {
                    "type": "text",
                    "value": "Mediante el anterior comando, lo que hacemos es definir cada uno de los métodos que serán soportados por los diferentes PATH’s y definir de la misma manera, si estos ocuparan algún tipo de  propiedad necesaria dentro del path."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "rest-api-id : El api sobre el cual vas a realizar los métodos"
                        },
                        {
                            "level": "0",
                            "value": "Resource-id : El id del path sobre el cual se aplicarán las reglas siguientes"
                        },
                        {
                            "level": "0",
                            "value": "http-method : El método que será permitido en dicho recurso"
                        },
                        {
                            "level": "0",
                            "value": "authorization-type : SI el método va a requerir autorización, y de que tipo. (CUSTOM , COGNITO_USER_POOL, etc. )"
                        },
                        {
                            "level": "0",
                            "value": " request-parameters : Que parámetros deben estar dentro del request y son estrictamente necesario para poder responder a la API"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez hecho lo anterior, solo falta asociar el endpoints , con qué tipo de integración que será necesario para poder vincular los métodos. Esto se puede hacer mediante los siguientes comandos :"
                },
                {
                    "type": "code",
                    "value": "aws apigateway put-integration --rest- api -id 009kah5l7l --resource-id 5ny2s6 --http-method GET --type AWS_PROXY --integration-http-method POST --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_api/invocations > integration.get.output.json"
                },
                {
                    "type": "code",
                    "value": "aws apigateway put-integration --rest-api-id 009kah5l7l --resource-id 3wjjof --http-method POST --type AWS_PROXY --integration-http-method POST --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_api/invocations > integration.post.output.json"
                },
                {
                    "type": "code",
                    "value": "aws apigateway put-integration --rest-api-id 009kah5l7l --resource-id h8ay5q --http-method DELETE --type AWS_PROXY --integration-http-method POST --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_api/invocations > integration.post.delete.json"
                },
                {
                    "type": "text",
                    "value": "El comando anterior tiene las siguientes características."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Rest-api-id : El id del gateway sobre el que se va a realizar la integración"
                        },
                        {
                            "level": "0",
                            "value": "Resource -id: EL ide de path sobre el cual se ejecutará el proceso."
                        },
                        {
                            "level": "0",
                            "value": "http-method: El método sobre el cual se aplicará la transacción. (Un endpoint puede aplicar a varios métodos )"
                        },
                        {
                            "level": "0",
                            "value": " type: tipo de integración que será utilizada"
                        },
                        {
                            "level": "1",
                            "value": " HTTP"
                        },
                        {
                            "level": "1",
                            "value": " AWS"
                        },
                        {
                            "level": "1",
                            "value": " MOCK"
                        },
                        {
                            "level": "1",
                            "value": " HTTP_PROXY"
                        },
                        {
                            "level": "1",
                            "value": " AWS_PROXY"
                        },
                        {
                            "level": "0",
                            "value": " Integration-http-method: método utilizado para llamar al método que se utilizara. Para llamar a lambdas, el método utilizado al llamar una lambda."
                        },
                        {
                            "level": "0",
                            "value": " Uri : el recurso al cual se debe acceder a la hora de llamar el método. En este caso la uri de la función lambda a ser ejecutada"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez hemos creado e integrado los distintos métodos, falta darle permiso a nuestro api Gateway a ejecutar nuestra función. Para realizar eso podemos usar el método add-permi s sion, en el cual indicaremos a la lambda que api Gateway tiene permisos de ejecutar nuestra lambda."
                },
                {
                    "type": "code",
                    "value": "aws lambda add-permission --function-name moroyoqui_api --statement-id moroyoqui-api-test --action lambda:InvokeFunction --principal apigateway.amazonaws.com "
                },
                {
                    "type": "text",
                    "value": "En el anterior comando especificamos"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Function_name: EL nombre de la funcion sobre la que se aplicará el servicio"
                        },
                        {
                            "level": "0",
                            "value": "Statement : Identificador único para el permiso"
                        },
                        {
                            "level": "0",
                            "value": "Action: que metodo puede realizar, en este caso invar la funcion para su ejecución"
                        },
                        {
                            "level": "0",
                            "value": " Principal: quien tiene el permiso de ejecutar dicho permiso"
                        }
                    ]
                },
                {
                    "type": "code",
                    "value": "aws apigateway test-invoke-method --rest-api-id 009kah5l7l --resource-id 5ny2s6 --http-method GET --path-with-query-string '/students/ 03094 '"
                },
                {
                    "type": "text",
                    "value": "Podemos probar los métodos de la api , de manera de test, sin abrirla al publico mediante el método test invoke method, el cual podemos ejecutar uno de los endpoints, especificado sus propiedades (básicamente simulamos el método)"
                },
                {
                    "type": "text",
                    "value": "Una vez hemos comprado que el funcionamiento es correcto, podemos crear un deployment, que será un reléase de una versión de nuestra api ."
                },
                {
                    "type": "code",
                    "value": "aws apigateway create-deployment --rest-api-id 009kah5l7l --stage-name dev --description 'Deployment to dev stage '"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Api id"
                        },
                        {
                            "level": "0",
                            "value": " Nombre del stage o versión de deployment"
                        },
                        {
                            "level": "0",
                            "value": " Descripción del stage"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez que creamo s esto la url de nuestro deployment de api se vera de la siguiente manera."
                },
                {
                    "type": "text",
                    "value": " https://{id-de-api}.execupte-apu.us-east-1.amazonaws.com/{stage}/{PATH}"
                },
                {
                    "type": "text",
                    "value": "Para nuestro caso el url del path para GET será"
                },
                {
                    "type": "text",
                    "value": " https://009kah5l7l.execute-api.us-east-1.amazonaws.com/dev/students/030934"
                },
                {
                    "type": "text",
                    "value": " Métodos"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "POST students/create"
                        },
                        {
                            "level": "0",
                            "value": " GET students/{id}"
                        },
                        {
                            "level": "0",
                            "value": "PUT students/update"
                        },
                        {
                            "level": "0",
                            "value": " DELETE students/delete/{id}"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Profe en mi caso me adelanté e hice deployment sobre el mismo stage D : así que ya tiene autorización mi error D:"
                },
                {
                    "type": "text",
                    "value": "Una vez que tenemos esto , podemos ejecutar y ver las respuestas de los siguientes métodos"
                },
                {
                    "type": "text",
                    "value": "Para el metetodo de READ / GET tenemos"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign5/1.png"
                },
                {
                    "type": "text",
                    "value": "Para el metetodo de CREATE / POST tenemos"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign5/2.png"
                },
                {
                    "type": "text",
                    "value": "Para el metetodo de UPDATE / PUT tenemos"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign5/3.png"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign5/4.png"
                },
                {
                    "type": "text",
                    "value": "Para el metetodo de DELETE tenemos"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign5/5.png"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign5/6.png"
                }
            ]
        },
        {
            "question": "3.-  Implement 404 HTTP response when an invalid id is passed to the Read in your API Gateway API/Lambda. 30 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Para implementar debemos cambiar el código de nuestra funcion, para que incluya el manejo de códigos http. Como podremos ver en el siguiente archivo."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign5/api_v1.py"
                },
                {
                    "type": "text",
                    "value": "Lo que realizamo aqui, es basicamente que dentro de cada metodo nuevo actualizado, definimos cual es el codigo que cada endpoint mandara. Esto es posible ya que api gateway automaticamente decide que tipo de respuesta o codigo de respuesta mandar en base al comportamiento de las lambdas. Sin embargo, debid a que configuramos al api como un tipo proxy, aws nos permite utilizar los campos body y statusCode como etodos que definen el contenido de la respuesta y el codigo con el cual se responde. De esta manera apigateway unicamente hace fordward del codigo recibido. "
                },
                {
                    "type": "text",
                    "value": "Una vez realizamos lo anterior, únicamente nos queda actualizar la funcion creada, mediante el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws lambda update-function-code --function-name moroyoqui_api --zip-file fileb://api_v1.zip"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " function-name: Nombre de la aplicación"
                        },
                        {
                            "level": "0",
                            "value": "zipfile : archivo zip de nuestro paquete."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Como solo actualizamos el metodo, es decir la funcion lambda y no su identificador, no es necesario acceder al api ."
                },
                {
                    "type": "text",
                    "value": " Por lo que podemos acceder al método y observar que el método responde con los códigos de estatus especificados por la función, como podemos ver a continuación."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign5/7.png"
                },
            ]
        },
        {
            "question": "4.- Read the Test Driven Development is the best thing that has happened to software design article and write a summary and opinions about it. 10 points.",
            "content": [
                {
                    "type": "text",
                    "value": "TDD o Test Driven Development es una técnica de desarrollo de aplicaciones que ha sido implementada en el desarrollo y diseño de software com o una herramienta la cual nos permite aumentar la calidad de nuestro código, mediante el seguimiento de unas a pautas que permiten escribir solo el código necesario, manteniendo un diseño simple y fácilmente actualizable ."
                },
                {
                    "type": "text",
                    "value": "TDD,  sigue el método científico (de cierta manera), a la hora de realizar código. El mismo consiste en un proceso muy simple de 3 pasos, crear reglas ( estudiar el fenómeno ) y verificar que el código no las pasa (porque aún no hay una implementación ), después procedemos a crear un modelo que satisfaga nuestras reglas (hipótesis y observación ) , y finalmente la refinación, en base a los resultados de nuestro modelo, ajustamos el mismo para con las reglas que planteamos y generamos una versión nueva de programa ."
                },
                {
                    "type": "text",
                    "value": "Este proceso, lo repetimos tantas veces nuevas características queremos agregar a un sistema (que ya esta definido) y de esta manera podremos entonces crear un proceso iterativo, que de manera continua , nos lleva a diseñar sistemas robustos que pueden ser fácilmente actualizables, y ayudan además a la detección temprana de bugs."
                },
                {
                    "type": "text",
                    "value": "Algo que se nos comenta en el artículo , son las diferencias entre distintos acercamientos a la hora de desarrollar pruebas. En el se nos plantea que hay 2 vertientes, cuando el código se realiza primero, y las pruebas después o viceversa. Una de las desventajas del primer acercamiento es  que cuando desarrollas el código primero, el decidir cuantos “test” han de ser agregados es algo difícil de definir, además de que no existe una manera real de aseguramos que la implementación del código esta terminada, porque tus test se verán influenciados en base a tu implementación."
                },
                {
                    "type": "text",
                    "value": "Por otro lado, al seguir realizar las pruebas primeras , cono no existe dicha implementación, te ves obligado a adentrarte más en los requerimientos del sistema , y ahondar el los casos de uso primarios, secundarios y los “Edge cases”, para los cuales puedes diseñar pruebas mas robustas. Debido a esto el alcance del código está definido con base en los requerimientos del sistema, y es fácil definir la cantidad de casos de prueba y una vez realices la implementación , será mas sencillo ya que tienes definido todos los caos en lo que necesitas algo."
                },
                {
                    "type": "text",
                    "value": "A pesar de estas ventajas del TDD, existe otra que es mas evidente, y es la de proveer feedback acerca del diseño y la arquitectura de ciertas aplicaciones, al hacer evidentes ciertos errores de diseño que dificultan la “testeabilidad” de un componente. Entre esto podemos encontrar los siguientes casos"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Spying or mocking . Cuando se hacen implementaciones mock de ciertos servicios, donde se espera que el código se comporte de cierta manera, se sumen muchas cosas del código, posponiendo test cases para el futuro. Esto hace que, al integrar servicios de manera local, se difícil de implementar pruebas en el código."
                        },
                        {
                            "level": "0",
                            "value": " Datos Variables: Cuando existen datos que varían entre prueba y prueba, van a existir datos que no son accesibles fuera del método, por lo que es imposible acceder a sus valores. Esto nos indicaría que el método está muy acoplado, y que tal vez sea mejor agregar dicha variable como una propiedad dentro de la clase a la cual se pueda acceder fácilmente."
                        },
                        {
                            "level": "0",
                            "value": "Configuración amontonada.  Si la instanciación de una clase o método tiene que inicializar demasiados otros servicios o clases para funcionar, esto puede indicar que el diseño está muy acoplado, y que es mejor subdividir las tareas."
                        },
                        {
                            "level": "0",
                            "value": "Mocking Recursivo infinito. Esto suele pasar cuando información va de una clase, a otra y a otra, y a otra y a otra. Esto puede indicar que la información se está escapando entre componentes, haciendo que cada una tome decisiones de código acerca de  y que actualizar el método , implique alterar todas las clases, lo que indica un mal diseño."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "En general TDD, es una herramienta que nos permite enfocarnos en los requerimientos y en lo que es estrictamente necesario para alcanzar la funcionalidad, además de proveer una herramienta que ayuda a tomar decisiones de diseño. En general , he utilizado brevemente TDD antes, y he encontrado que es una herramienta bastante útil, sobre todo porque nos ayuda a construir un mínimo estándar de calidad y evitar errores catastróficos para ambientes de producción (diosito no me lleves)"
                }
            ]
        }
    ]
};
//# sourceMappingURL=assign5.js.map