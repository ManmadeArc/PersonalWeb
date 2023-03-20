"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign8 = void 0;
exports.assign8 = {
    "sections": [
        {
            "question": "1.- Write an application to show in a map where a person has been in the last 24 hours. 100 points.",
            "content": [
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "1",
                            "value": "Create a schedule lambda ."
                        },
                        {
                            "level": "2",
                            "value": "Lambda is going to run every 1 seconds ."
                        },
                        {
                            "level": "2",
                            "value": "Lambda is going to send messages to the SQS queue ."
                        },
                        {
                            "level": "2",
                            "value": " Use locations in Tijuana."
                        },
                        {
                            "level": "2",
                            "value": " SQS queue:"
                        },
                        {
                            "level": "3",
                            "value": " https://sqs.us-east-1.amazonaws.com/292274580527/loveconquersall"
                        },
                        {
                            "level": "3",
                            "value": " arn:aws:sqs:us-east-1:292274580527:loveconquersall"
                        },
                        {
                            "level": "2",
                            "value": " Sample message (use your matricula):"
                        }
                    ]
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign8/matricula.png"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "1",
                            "value": "Create a new Lambda to subscribe to the SQS queue."
                        },
                        {
                            "level": "2",
                            "value": "The Lambda will read a l l the messages but only process the ones with your matricula."
                        },
                        {
                            "level": "2",
                            "value": " Messages with other matriculas will be put back to the queue."
                        },
                        {
                            "level": "2",
                            "value": "Visibility time out is 30 seconds."
                        },
                        {
                            "level": "1",
                            "value": " Create a view in your website with Google Maps and add pins for every location from the las 24 hours."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Para poder generar una función que escribe en un SQS de AWS, tendremos que hacer uso de una lambda, que se encargue de generar puntos alrededor de Tijuana. Para ello podremos tomar un procedimiento como el siguiente."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Generamos unas coordenadas en Tijuana , X y Y."
                        },
                        {
                            "level": "0",
                            "value": "A partir de esas coordenadas generamos un punto aleatorio en un rango máximo"
                        },
                        {
                            "level": "0",
                            "value": " Añadimos dichas coordenadas a la lambda."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Su implementación puede lucir como la siguiente:"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign8/generator.py"
                },
                {
                    "type": "text",
                    "value": " Hecho esto solo queda subir la función, después de ser empaquetada."
                },
                {
                    "type": "code",
                    "value": "aws lambda create-function     --function-name moroyoqui_generator     --runtime python3.9 - -zip-file fileb://generator.zip     --handler generator.lambda_handler --role arn:aws:iam::292274580527:role/lambda_ice191 > generator.json"
                },
                {
                    "type": "text",
                    "value": "Una vez creado el generador de funciones , ya que el mismo deberá ser ejecutado por un evento de cloudwatch, se le debe añadir el permiso a amazonaws para que cloudwatch pueda ejecutar dicha lambda. Por lo tanto, a nuestra función le añadimos dicho permiso con el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws lambda add-permission --function-name moroyoqui_generator --statement-id moroyoqui_gen --action lambda:InvokeFunction --principal events.amazonaws.com"
                },
                {
                    "type": "text",
                    "value": " Una vez creado el generador solo hace falta crear el consumidor, es decir aquello que va a consumir nuestro mapa, en otras palabras  un lambda que va a leer y procesar los mensajes del queue en cuestión."
                },
                {
                    "type": "text",
                    "value": "Lo que haremos en esta lambda de manera sencilla es tomar los mensajes del queue y procesar únicamente los que tienen nuestra matricula y aquellos que no tienen una fecha mayor de 24 horas. Para ello podemos implementar una función lambda como la siguiente:"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign8/sub.py"
                },
                {
                    "type": "text",
                    "value": "Algo interesante que podemos ver en la función es que incluimos 2 métodos , el GET y el options, aunque el get no está implícito. Esto se debe a que debido a CORS."
                },
                {
                    "type": "text",
                    "value": "El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent obtenga permiso para acceder a recursos seleccionados desde un servidor ."
                },
                {
                    "type": "text",
                    "value": "Por razones de seguridad, los exploradores restringen las solicitudes HTTP de origen cruzado iniciadas dentro de un script. Por ejemplo, XMLHttpRequest y la API Fetch siguen la política de mismo-origen. Esto significa que una aplicación que utilice esas APIs XMLHttpRequest sólo puede hacer solicitudes HTTP a su propio dominio ."
                },
                {
                    "type": "text",
                    "value": "De acuerdo con la documentación de amazon, Cuando un navegador recibe una solicitud HTTP no simple, el protocolo CORS requiere que el navegador envíe una solicitud preliminar al servidor y espere la aprobación (o una solicitud de credenciales) desde el servidor antes de enviar la solicitud real. La solicitud preliminar aparece en la API como una solicitud HTTP que:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Incluye un encabezado Origin."
                        }
                    ]
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Utiliza el método OPTIONS."
                        }
                    ]
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Incluye los siguientes encabezados:"
                        }
                    ]
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "1",
                            "value": " Access-Control-Request-Method"
                        }
                    ]
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "1",
                            "value": " Access-Control-Request-Headers"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Para admitir CORS, por lo tanto, un recurso de API REST tiene que implementar un método OPTIONS que puede responder a la solicitud preliminar OPTIONS con al menos los siguientes encabezados de respuesta exigidos por el estándar Fetch:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Access-Control-Allow-Methods"
                        }
                    ]
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Access-Control-Allow-Headers"
                        }
                    ]
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Access-Control-Allow-Origin"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Con base en lo anterior, simplemente se implementan dichos encabezados en la función CORS para que la misma funcione."
                },
                {
                    "type": "text",
                    "value": "Una vez hecho lo anterior solo queda empaquetar y subir la función lo que se puede realizar con el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws lambda create-function     --function-name moroyoqui_sub     --runtime python3.9     --zip-file fileb://suscriber.zip     --handler suscriber.lambda_handler --role arn:aws:iam::292274580527:role/lambda_ice191 > suscriber.json"
                },
                {
                    "type": "text",
                    "value": "Una vez hemos creado la función, necesitamos hacer ejecución de ella, para ello podemos incluir un endpoints en nuestro api Gateway que nos permite ejecutar la función y consumir el recurso. Debido a esto tenemos que añadir permisos para que lambda pueda ser ejecutado por apigateway ."
                },
                {
                    "type": "text",
                    "value": " aws lambda add-permission --function-name moroyoqui_sub --statement-id moroyoqui_sub --action lambda:InvokeFunction --principal apigateway.amazonaws.com"
                },
                {
                    "type": "text",
                    "value": " Aprovechando la api que hemos creado antes, simplemente creamos un recurso que nos permita acceder a dichas propiedades como hemos hecho anteriormente con los siguiente comandos."
                },
                {
                    "type": "text",
                    "value": " Se crea el recurso"
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-resource     --rest-api-id 009kah5l7l  --parent-id kccj5gxdbl  --path-part locations > create_endpoint_sqs.output.json"
                },
                {
                    "type": "text",
                    "value": " Se establece el método GET:"
                },
                {
                    "type": "code",
                    "value": " aws apigateway put-method     --rest-api-id 009kah5l7l     --resource-id  fyz9ph    --http-method GET     --authorization-type \"NONE\"     > put_method_sqs.output.json"
                },
                {
                    "type": "text",
                    "value": " Lo mismo para el método options."
                },
                {
                    "type": "code",
                    "value": " aws apigateway put-method     --rest-api-id 009kah5l7l     --resource-id  fyz9ph    --http-method OPTIONS     --authorization-type \"NONE\"     > put_method_sqs.options.output.json"
                },
                {
                    "type": "text",
                    "value": "Se pone o crea la integración del recurso con su respectiva lambda, para ambos métodos tanto get como options.."
                },
                {
                    "type": "code",
                    "value": " aws apigateway put-integration --rest-api-id 009kah5l7l --resource-id fyz9ph  --http-method GET --type AWS_PROXY --integration-http-method POST --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_sub/invocations > integration_sqs.get.output.json"
                },
                {
                    "type": "code",
                    "value": " aws apigateway put-integration --rest-api-id 009kah5l7l --resource-id fyz9ph  --http-method OPTIONS --type AWS_PROXY --integration-http-method POST --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_sub/invocations > integration_sqs.options.output.json"
                },
                {
                    "type": "text",
                    "value": "Se crea el deployment para actualizar el api y que existen los nuevos métodos y recursos."
                },
                {
                    "type": "code",
                    "value": " aws apigateway create-deployment --rest-api-id 009kah5l7l --stage-name dev --description 'Deployment to dev stage'"
                },
                {
                    "type": "text",
                    "value": "Algo que se me paso, es que el procesamiento configurado por defecto para una lambda de tiempo máximo de ejecución es de 3 segundos. Debido a que podemos tener muchos mensajes y no podemos procesarlos todos, ampliaremos ese tiempo de ejecución a 40 segundos con el siguiente comando en apigateway. ."
                },
                {
                    "type": "code",
                    "value": " aws apigateway update-rest-api --rest-api-id 009kah5l7l --patch-operations op=replace,path=/timeoutInMillis,value=40000"
                },
                {
                    "type": "text",
                    "value": " Una vez hecho esto podemos verificar que existe el método y que funciona correcta metnte con el siguiente comando."
                },
                {
                    "type": "code",
                    "value": " aws apigateway test-invoke-method --rest-api-id 009kah5l7l --resource-id fyz9ph --http-method GET"
                },
                {
                    "type": "text",
                    "value": "Finalmente, solo queda actualizar la configuración de timeout de la lambda a 30 segundos que es lo máximo permitido por aws."
                },
                {
                    "type": "code",
                    "value": " aws lambda update-function-configuration --function-name moroyoqui_sub --timeout 30"
                },
                {
                    "type": "text",
                    "value": "Una vez hecho esto solo queda solo queda añadir el mapa de Google a nuestro sitio web. Debido a que uso angular para la generación de este sitio web puedo hacer uso de la extensión agm, por lo cual solo es cuestión de instalar el módulo que se encuentra en https://angular-maps.com/"
                },
                {
                    "type": "code",
                    "value": " npm install @agm/core"
                },
                {
                    "type": "text",
                    "value": " E importándolo en mis módulos de angular."
                },
                {
                    "type": "text",
                    "value": " Creamos el layout de nuestro componente."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign8/layout.html"
                },
                {
                    "type": "text",
                    "value": " En el cual definimos la latitud y longitud  con agm map, además de definir un marcador."
                },
                {
                    "type": "text",
                    "value": " Mediante código, enriquecemos esto"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign8/code.ts"
                },
                {
                    "type": "text",
                    "value": " Básicamente creamos el componente, hacemos un request de los puntos a nuestro api y finalmente al obtener dichos puntos, las directivas de angular se encargan de crear cada uno de los puntos en la aplicación."
                },
                {
                    "type": "text",
                    "value": " Normalmente se ocupa un API key para acceder a los mapas de Google y su funcionalidad, pero Google es chido y te deja usarlos para propósitos de desarrollo siempre y cuando no hagas llamadas directas a su API de geolocalización. ;)"
                },
                {
                    "type": "text",
                    "value": " **************** Cosas que no se hicieron ***************************"
                },
                {
                    "type": "text",
                    "value": " Me quedé esperando permisos para poder ejecutar o crear reglas en cloudwatch o eventos, pero no los conseguí."
                },
                {
                    "type": "text",
                    "value": " En base a lo que investigue solo me hacía falta la ejecución de 2 comandos."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Put event"
                        },
                        {
                            "level": "0",
                            "value": " Put target"
                        }
                    ]
                },
                {
                    "type": "code",
                    "value": "aws events put-rule --name create-point-moroyoqui --schedule-expression 'rate(5 minutes)'"
                },
                {
                    "type": "text",
                    "value": "Para crear la regla de ejecución ."
                },
                {
                    "type": "text",
                    "value": "Después se creaba un json. Con los targets de la siguiente forma."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign8/target.js"
                },
                {
                    "type": "text",
                    "value": "Y finalmente ejecutar el comando de aws"
                },
                {
                    "type": "code",
                    "value": "aws events put-targets --rule create-point-moroyoqui --targets file://targets.json"
                },
                {
                    "type": "text",
                    "value": "Y finalmente poder ver el mapa como a continuación ."
                },
                {
                    "type": "map",
                    "vaalue": "map"
                }
            ]
        }
    ]
};
//# sourceMappingURL=assign8.js.map