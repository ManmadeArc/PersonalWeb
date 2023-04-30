"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign10 = void 0;
exports.assign10 = {
    "sections": [
        {
            "question": "1.-  Describe los pros y cons de una arquitectura de software de microservicios.",
            "content": [
                {
                    "type": "text",
                    "value": "Una arquitectura de microservicios es una arquitectura que busca lograr la modularidad complejo de los diferentes componentes esenciales de la aplicación que se va a desarrollar , de esta manera cada servicios o parte de la aplicación se vuelve independiente para su “deploy” o lanzamiento. Este tipo de arquitectura se basa en la premisa de dividir en conquistar, ya que busca abstraer la funcionalidad de los servicios y separ ar las para que los mismos sean independientes, pudiendo trabajar cada funcionalidad sin necesidad de preocuparnos por la otra. Este tipo de arquitecturas trae ventajas  como lo son las siguientes."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Deployment Continuo. Una de las ventajas de separar la arquitectura en diferentes servicios es que desacoplar la necesidad de tener que recompilar el programa entero para subirlo a producción . Debido a que los sistemas son independientes puedes hacer deploy de una nueva versión de tu software sin tener la necesidad de esperar a que otro microservicio este completado."
                        },
                        {
                            "level": "0",
                            "value": "Facilidad de realización de pruebas. Al dividir un software en varios microservicios algo que se hace es que se limita el alcance de cada uno de los componentes. De esta manera cada parte se encarga de realizar una tarea, debido a esta simplificación de los procesos, la realización de pruebas se vuelve más concisas, ya que no necesitas probar la interacción completa, si no que tu servicios funcione de la manera adecuada."
                        },
                        {
                            "level": "0",
                            "value": " división de responsabilidades. Una vez que se desacoplo el sistema en varios servicios, ya no necesitas que un solo equipo se encargue del desarrollo de un sistema en concreto, es decir, puedes tener múltiples equipos trabajando en cada uno de los microservicios de manera paralela, cada uno con una responsabilidad especifica, haciendo más claras las tareas y obligaciones de cada uno de los equipos."
                        },
                        {
                            "level": "0",
                            "value": "Flexibilidad: En una arquitectura de microservicios, una de las ventajas que existes es que cada equipo o microservicio no está obligado a utilizar una tecnología en específico siempre y cuando exista un mecanismo que permita la comunicación entre las distintas tecnologías . De esta manera cada equipo puede escoger la plataforma de software que más se adapte a sus necesidades, por ejemplo, si un equipo necesita hacer análisis de datos y gráficas , el mismo puede utilizar Python como interfaz, ya que eso facilitar el análisis de datos, por otro lado, sin otro servicios tiene necesidades que les hagan preferir el rendimiento, este equipo podría utilizar C++ para su desarrollo , ya que ambos microservicios son completamente independientes."
                        },
                        {
                            "level": "0",
                            "value": "Fiabilidad: Los cambios no afectan la totalidad del sistema. Dado que cada servicio es independiente, si uno de los servicios falla, el fallo solo afectara al área que utiliza ese servicio en específico . Por ejemplo, si dentro de una aplicación de contabilidad falla el módulo de reporteo (que maneja reportes y exceles), la aplicación web seguirá funcionando correctamente, pudiendo permitir el ingreso y captura de datos. Haciendo que el sistema este “ caído ” menos tiempo, o que el mismo sea menos notorio."
                        },
                        {
                            "level": "0",
                            "value": "Agilidad: El uso de microservicios se acopla con el desarrollo ágil , ya que debido a la facilidad para publicar avances de cada servicios de manera independientes se puede desarrollar sistemas en los cuales el deploy o los cambios puedan ser realizados frecuentemente."
                        },
                        {
                            "level": "0",
                            "value": "Escalamiento Flexible: Al ser los microservicios sistemas completamente independientes que  por lo general no se ejecutan en un mismo proceso. Debido a esta característica el sistema puede escalar bajo demanda. Si por ejemplo el módulo de procesamiento de video es aquel que es más utilizado, solo necesitamos asignar más recursos a ese microservicio , no a la totalidad de los microservicios que componen la aplicación .  Esto añada una ventaja extra con respecto a los sistemas monolíticos y es que los procesos ya no pelean entre sí por recursos, ya que están divididos en diferentes sistemas."
                        },
                        {
                            "level": "0",
                            "value": "Mantenimiento sencillo. Como cada servicio es independiente un equipo de desarrollo bien podría implementar nuevas características mediante su implementación continua, y si ven que estas mismas no funcionan como deberían , pueden  hacer un roll back del servicio que cambiaron, sin tener muchas consecuencias."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Desventajas."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Complejidad de Diseño."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una de las desventajas de los sistemas de microservicios es que el proceso para abstraer y dividir  adecuadamente el sistema en microservicios y planear los esquemas de comunicación entre ellos."
                },
                {
                    "type": "text",
                    "value": "Debido a que los sistemas son completamente independientes, y muchos de estos escalan automáticamente y están distribuidos, uno tendrá que considerar casos de uso de su software más complejos en los cuales se tendrá que manejar concurrencia. Esto aumentará la cantidad de sistemas de control que sea necesario implementar para asegurarse que cada acción mantendrá la integridad de los datos."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Costos de Infra Estructura."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Al diseñar los sistemas de microservicios, los mismos son independientes , por lo que cada microservicio deberá contar con su propia infraestructura física , o de pruebas, monitoreo, hosting etc. Por lo tanto, entre más microservicios existan más será el costo de mantener dichos microservicios en la nube."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Complejidad organizacional."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Al separar el sistema en microservicios, cada uno de los equipos encargados del desarrollo pueden desarrollar de la manera que ellos quieran su servicios, por lo tanto , si existen dependencias entre microservicios (es decir se tiene que comunicar entre ellos), para los equipos de desarrollo será una caja negra, lo que el microservicio con el cual necesitan conectarse hace, por lo que a la hora de querer implementar o conectar dichos servicios tendrá que existir una vía de comunicación más entre los equipos de desarrollo."
                },
                {
                    "type": "text",
                    "value": "Según A mythical Man Month. Este es uno de los puntos de fallo más importantes en los desarrollos de equipos, las vías de comunicación ya que estos aumentan en un factor de n2 - n / 2 , según el número de microservicios. Es decir, a más microservicios más puntos de fallo existen entre las interacciones de los sistemas."
                },
                {
                    "type": "text",
                    "value": "Para solventar esto mayor organización necesitar ser hecha para lograr una comunicación efectiva entre ambos equipos, de manera que se pueda trabajar colaborativamente para coordinarse y establecer interfaces de comunicación (entre los microservicios)"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Depuración compleja"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Cuando diseñas una arquitectura de microservicios, cuando decimos que estas son independientes , es porque lo son tanto físicamente , como en relación con las dependencias y estrategias que se utilizan para monitorear o trazar errores.  Debido a esto cada vez que diseñas un microservicio, el mismo debe contar con su propia base de datos , e interfaces que le permitan almacenar información . Dentro de una de estas características que cada microservicio maneja, suelen encontrarse los logs, el registro de información de que fue lo que paso con el sistema."
                },
                {
                    "type": "text",
                    "value": "Esto quiere decir que, para una aplicación con 5 microservicios, existirán 5 entidades que se encarguen entonces de trazar y llevar a cabo los logs.  Esto presenta un problema cuando se quiere realizar el seguimiento de una operación la cual  atraviese o utiliza los 5 servicios, ya que, para poder el flujo de datos , es necesario  buscar sobre los 5 grupos de logs los errores de ejecución del código . (Se complica el saber donde inicio el error, y si hubo subsecuentes ya que no existe un clara estandarización .)"
                },
                {
                    "type": "text",
                    "value": "Para sobrellevar estos problemas se suele incluir un parámetro llamado TraceId, las cuales sirven para asociar un conjunto de logs con una transacción especifica."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Falta de estandarización ."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Como consecuencia directa de que los microservicios son independientes, y  que el equipo de desarrollo tiene las libertades para decidir su plataforma o esquema  y tecnologías para desarrollar su microservicios, existirá mucha libertad y por lo general ningún equipo se apegara a un estándar de trabajo que los demás microservicios persigan, por lo que cada equipo utilizará las técnicas que crea  adecuadas."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Falta de Responsabilidad Clara."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez que la arquitectura de  microservicios ha escalado y tiene los suficientes servicios independientes, existirían una gran variedad de interacciones entre los sistemas que son propensos a fallas. A la hora de buscar contactar al equipo responsable de dichas fallas entonces se creará una confusión , ya que no se podrá determinar claramente que equipo debería encargarse de mantener y solucionar los problemas relacionados o dar soporte."
                }
            ]
        },
        {
            "question": "2.-  Explica la arquitectura de Publish and Subscribe",
            "content": [
                {
                    "type": "text",
                    "value": "La arquitectura de Pub/Sub (Publish an d Suscribe), es una arquitectura la cual busca desacoplar los intereses de 2 entidades, a la hora de llevar a cabo un proceso de comunicación . Para esto, la arquitectura Pub/Sub crea un mecanismo de comunicación asíncrono para que estas dos entidades puedan comunicarse sin la necesidad de conocerse , o crear un canal de comunicación exclusivo."
                },
                {
                    "type": "text",
                    "value": "Esta arquitectura consiste en 2 entidades principales y una de apoyo, entre ellas podemos encontrar a él Publisher, el Suscriptor, y el Message Broker."
                },
                {
                    "type": "text",
                    "value": "El publisher es una entidad que busca el compartir información , es decir se encarga de enviar información de eventos en un sistema, clasificándolos en una serie de “Temas”."
                },
                {
                    "type": "text",
                    "value": "El Suscriptor, por otra parte, está interesado en escuchar dichos mensajes. Dicho esto, el suscriptor puede no estar interesado en todos los temas, por ello el mismo crea una suscripción a los temas que le son de interés ."
                },
                {
                    "type": "text",
                    "value": "Finalmente, falta la estructura de control que permite crear estos canales de comunicación asíncronos , el cual se encargara de recibir los mensajes del publicador, y hacer él envió a los suscriptores correspondientes, a este programa lo conocemos como el Message Broker.  El message broker es entonces el encargado de recibir los mensajes de los publicadores y enviarlos a todos los suscriptores de un tema en específico ."
                },
                {
                    "type": "text",
                    "value": " Para lograr lo anterior , el esquema pub/ sub hace uso de las siguientes definiciones."
                },
                {
                    "type": "text",
                    "value": "“Tema”: El cual es una clasificación para determinar un cierto tipo de mensajes."
                },
                {
                    "type": "text",
                    "value": "“ Suscripción ”: Es una entidad que determina que existe un interés por escuchar un tipo de mensajes sobre un teme en particular."
                },
                {
                    "type": "text",
                    "value": "Con estas definiciones la arquitectura Pub/Sub logra 2 cosas, 1 clasificar el tipo de contenido que un publicador hace y definir que medios o servicios están interesados en recibir mensaje de un tipo en específico ."
                },
                {
                    "type": "text",
                    "value": "Una vez habiendo hecho esto, el mesage broker ahora solo se encarga de obtener los mensajes de los diferentes publicadores, guardarlos en los temas que les corresponden y enviarlo a los suscriptores que tienen una suscripción a dicho contenido."
                },
                {
                    "type": "text",
                    "value": "De esta manera este patrón de diseño logra desacoplar el proceso de enviar un mensaje, y el de recibirlo. Gracias a esta implementación el publicador solo tiene que enviar mensajes y clasificarlos en los “Temas” correspondientes, esto permite que el publicador no tenga por qué conocer a cada uno de los suscriptores y mandar un mensaje a cada uno de los suscriptores, haciendo una verificación de que el mensaje llego correctamente."
                },
                {
                    "type": "text",
                    "value": "Por otro lado, el suscriptor ahora solo se encarga de suscribirse a los temas que le son interesantes. Creado su suscripción y notificando al broker , que tipo de mensajes o información / temas está esperando recibir."
                }
            ]
        },
        {
            "question": "3.-  Crea una Lambda + API Gateway que reciba como parámetro un rango de fechas con formato YYYYMMDD y regrese la cantidad de días, horas y minutos entre dichas fechas.",
            "content": [
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "1",
                            "value": "Por ejemplo: http://elamorlopuedetodo.com/rango/20230303-20230404"
                        },
                        {
                            "level": "1",
                            "value": " La respuesta debe ser el URL del end point y los ARN de los recursos creados"
                        }
                    ]
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign10/calendar.py"
                },
                {
                    "type": "text",
                    "value": " ARN Lambda: arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_dates_exam_api"
                },
                {
                    "type": "text",
                    "value": "ARN API GateWay : arn:aws:execute-api:us-east-1:292274580527:wl39jcw2rl"
                },
                {
                    "type": "text",
                    "value": " ARN Endpoint :  arn:aws:execute-api:us-east-1:292274580527:wl39jcw2rl/*/GET/date/range/*"
                },
                {
                    "type": "text",
                    "value": "URL : https://wl39jcw2rl.execute-api.us-east-1.amazonaws.com/dev/date/range/<Fechas>"
                }
            ]
        },
        {
            "question": "4.-  Replica la respuesta anterior, pero en este nuevo end point regresa HTML, creando un dynamic web site.",
            "content": [
                {
                    "type": "code",
                    "value": "/assets/images/assign10/calendar2.py"
                },
                {
                    "type": "text",
                    "value": " ARN Lambda: arn:aws:lambda:us-east-1:292274580527:function:moroyoqui_dates_exam_api"
                },
                {
                    "type": "text",
                    "value": "ARN API GateWay : arn:aws:execute-api:us-east-1:292274580527:wl39jcw2rl"
                },
                {
                    "type": "text",
                    "value": " ARN Endpoint :  arn:aws:execute-api:us-east-1:292274580527:wl39jcw2rl/*/GET/date/range/html/*"
                },
                {
                    "type": "text",
                    "value": "URL : https://wl39jcw2rl.execute-api.us-east-1.amazonaws.com/dev/date/range/html/<Fechas>"
                }
            ]
        },
        {
            "question": "5.-  Describe la diferencia entre los S3 object storage class standard, infrequent access y Glacier.",
            "content": [
                {
                    "type": "text",
                    "value": "Amazon S3 es un servicio de almacenamiento de datos en la Nube, ofrecido por AWS. Una de las características interesantes de est os servicios, es que el mismo ofrece distintos niveles de almacenamiento, los cuales afectan el costo y la calidad del servicio brindado."
                },
                {
                    "type": "text",
                    "value": " Entre algunos estos niveles de almacenamiento podemos encontrar los siguientes:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Standard"
                        },
                        {
                            "level": "0",
                            "value": " Infrequent Access"
                        },
                        {
                            "level": "0",
                            "value": " Glacier"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Por un lado, la clase estándar está hecho para los casos de uso, donde el bucket estará siendo sometido constantemente a pedir información , es decir, casos en lo que se escribe y lee mucho de un disco duro. Por lo tanto, este tipo de acceso debe proveer acceso casi inmediato a la información , de manera que no existan retrasos a la hora de acceder a un archivo dentro del bucket."
                },
                {
                    "type": "text",
                    "value": "Por otro lado, Infrequent access está pensado para los casos de uso, donde el acceso a la información es poco frecuente, pero aun es necesario que se dé una respuesta rápida a la hora de acceder a la información . Esto quiere decir que la disponibilidad del recurso puede bajar, ya que no se accederá tan fácilmente a él , sin embargo, el cliente esperará que, si se busca acceder a un dato dentro del bucket, este objeto sea obtenido lo más rápido posible."
                },
                {
                    "type": "text",
                    "value": "Finalmente, el tipo de almacenamiento Glacier está pensado para esos casos de uso, donde muy rara vez se va a acceder a los datos, es una opción de bajo costo que asegura que grandes cantidades de información pueden ser almacenadas por lagos periodos de tiempo. Sin embargo, en este caso de uso en específico no se necesita que el acceso a la información sea inmediato , la rapidez de acceso no es una prioridad, en cambio es más importante que los datos sean almacenados permanentemente (o por un periodo muy largo de tiempo)"
                },
                {
                    "type": "text",
                    "value": "Si nos vamos a datos más específicos podemos observar que los servicios cuentan con distintos valores , según estas características ."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Standard"
                        },
                        {
                            "level": "1",
                            "value": "Durabilidad: 99,999999999 %"
                        },
                        {
                            "level": "1",
                            "value": "Disponibilidad: 99,99 %"
                        },
                        {
                            "level": "1",
                            "value": "Tiempo de Acceso : milisegundos"
                        },
                        {
                            "level": "0",
                            "value": "Standard Infrequent Access (Multiple Zones)"
                        },
                        {
                            "level": "1",
                            "value": "Durabilidad : 99,999999999 %"
                        },
                        {
                            "level": "1",
                            "value": "Disponibilidad: 99,9 %"
                        },
                        {
                            "level": "1",
                            "value": "Tiempo de Acceso : milisegundos"
                        },
                        {
                            "level": "0",
                            "value": "Glacier Flexible Retrival ( Antes S3 Glacier)"
                        },
                        {
                            "level": "1",
                            "value": "Durabilidad : 99,999999999 %"
                        },
                        {
                            "level": "1",
                            "value": "Disponibilidad: 99,99 %"
                        },
                        {
                            "level": "1",
                            "value": " Tiempo de Acesso: minutos u horas"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Ante estas características podemos ver que los 3 tipos de almacenamiento discutidos tienen la misma durabilidad, es decir, 1 de cada 100 billones de objetos está en riesgo de perderse cuando usas cualquiera de estos tipos de almacenamiento."
                },
                {
                    "type": "text",
                    "value": "En cuanto a la disponibilidad aquí tenemos cambios, donde en la clase estándar y la Glacier tiene una disponibilidad de 99.99% , eso quiere decir que, de cada 10,000 horas , durante 1 hora, no podrás acceder a dichos datos, debido a la disponibilidad. Por otro lado, Infrecuente Access baja su disponibilidad a 99.9, es decir de cada 10,000 horas, durante 100 horas no podrá acceder a los datos (no necesariamente de manera secuencial)."
                },
                {
                    "type": "text",
                    "value": " Finalmente, el tiempo de acceso es otra de las diferencias en estos tipos de acceso, donde  Standard e Infrequent Access, dan acceso en milisegundos a la información almacenada, por otro lado, Glacier entiende que esto no es una prioridad, y para empezar a darte tu información puede tardar minutos e incluso horas en empezar a reenviar dicha información."
                },
                {
                    "type": "text",
                    "value": "Debido a estas características los tipos de almacenamiento definidos funcionan mejor en los siguientes casos:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Standard"
                        },
                        {
                            "level": "1",
                            "value": "Sitios Web estáticos"
                        },
                        {
                            "level": "1",
                            "value": " Big Data"
                        },
                        {
                            "level": "0",
                            "value": " Infrequent Access"
                        },
                        {
                            "level": "1",
                            "value": "Copias de Seguridad de Eventos críticos"
                        },
                        {
                            "level": "1",
                            "value": " información de registros de acceso de poca frecuencia"
                        },
                        {
                            "level": "0",
                            "value": " Glacier"
                        },
                        {
                            "level": "1",
                            "value": " Back ups de bases de datos extensas"
                        },
                        {
                            "level": "1",
                            "value": "Archivos de empresas del área de la salud (Las regulaciones les hacen almacenar 10 años de información )"
                        },
                        {
                            "level": "1",
                            "value": "Datos obtenidos de investigaciones científicas"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Si queremos observar los costos, podemos decir que la más cara es Standard, luego sigue Infrequent Access y finalmente Glacier . Este se debe a los niveles de seriedad que se le debe dar a la información y latencia."
                },
                {
                    "type": "text",
                    "value": "Por otra parte, hay otro tipo de cosas en el precio que los diferencian. Por ejemplo, S3 estándar se cobra en base a la cantidad de request para guardar información , o actualizarla. Por otro lado , Infrequent Access y Glacier cobran por cuantos datos solicitas acceder al mes, dependiendo de la cantidad de GB, probablemente debido a la naturaleza de la solución ."
                },
                {
                    "type": "text",
                    "value": "En general, ningún almacenamiento es mejor que otro, simplemente son utilizados para casos distintos y al amazon entender esto es que define mecanismos que le permiten ahorrar dinero a ellos, y a sus consumidores."
                }
            ]
        },
        {
            "question": "6.-  Explica cómo hacer route de un subdominio de Route 53 a un static web site en S3.",
            "content": [
                {
                    "type": "text",
                    "value": "Asumiendo que ya hemos configurado un sitio web en S3, y que contamos con la liga de acceso a dicho servidor, como lo puede ser la url www.nombrebucket.com-s3-website.us-east- 1.amazonaws.com . Lo que necesitamos hacer es crear un Registro de DNS que apunte a nuestro website."
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": " Para poder realizar esto debemos entender que es un DNS. Un DNS es El sistema de nombres de dominio (DNS) es el directorio telefónico de Internet. Es un sistema el cual se encarga de traducir nombres de dominio como lo son Facebook.com o amazon.com a direcciones ip, como lo pueden ser 192.168.20.152"
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": " Por hacer algún tipo de analogía, supongamos que la internet es una gran biblioteca, y las direcciones ip son los libros a los cuales queremos acceder, un servidor de DNS es un gran índice o base de datos, la cual identifica a un libro en específico, y nos dice donde esta mediante un palabra clave, la cual es el dominio, la cual nos ayuda a determinar de manera más fácil a que libros nos queremos hacer cargo."
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": " Para aprovechar esto, podemos hacer o crear una ruta mediante un servidor de DNS, en este caso podemos hacer uso de Amazon route 53. Amazon route 53 es un servicio de Amazon el cual precisamente nos permite enlazar nuestros recursos de red. Para esto necesitamos tener acceso a un dominio y registrarlo a nuestro nombre. Podemos buscar la disponibilidad de nuestro dominio, mediante el siguiente comando."
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "code",
                    "value": " aws route53domains check-domain-availability --domain-name example.com"
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": "Una vez que registramos que nuestro dominio está disponible podemos registrarlo a nuestro nombre utilizando el siguiente comando"
                },
                {
                    "type": "code",
                    "value": " aws route53domains register-domain --domain-name example.com --duration-in-years 1 --auto-renew --admin-contact \"FirstName LastName, email@example.com, +1.123456789, address\" --registrant-contact \"FirstName LastName, email@example.com, +1.123456789, address\""
                },
                {
                    "type": "text",
                    "value": "Una vez hemos registrado nuestro dominio, ya hemos de poder usarlo. Para poder usarlo nosotros hemos de crear una zona de hosteo. Al crear esta zona nosotros estamos creado una configuración , la cual le dice a el proveedor de nuestro servicio de DNS, que hemos adquirido el dominio y que nosotros manejaremos los subdominios de dicho centro."
                },
                {
                    "type": "code",
                    "value": " aws route53 create-hosted-zone --name example.com --caller-reference reference_string"
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": " Donde el nombre, será el nombre de dominio que busquemos utilizar y  caller reference es un identificador único para nuestra zona de hosteo. Una vez que creemos esto obtendremos unos nombres de servidor que tendremos que actualizar en nuestro dominio. Una vez hayamos cambiado esto nos toca crear registros en nuestro dominio para hacer redirección de nuestro dominio a nuestra nuestro bucket. Para hacer esto se harán con registros."
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": " Dentro de los DNS existen diferentes tipos de registros:"
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": "1. Registro A: Este registro tiene la dirección ip de un dominio"
                },
                {
                    "type": "text",
                    "value": "2. Registro AAAA: Contiene la dirección ipv6 de un dominio."
                },
                {
                    "type": "text",
                    "value": "3. Registro CNAME: reenvía de un dominio o subdominio a otro dominio. (Sin usar ip)"
                },
                {
                    "type": "text",
                    "value": "4. Registro MX: redirige a un servidor de correo"
                },
                {
                    "type": "text",
                    "value": "5. Registro TXT: Permite a almacenar archivos txt en el registro"
                },
                {
                    "type": "text",
                    "value": "6. Registro NS:  Almacena nombres de servidor para una entrada de DNS"
                },
                {
                    "type": "text",
                    "value": "7. Registro SOA: Almacenar información acerca del administrador de un dominio."
                },
                {
                    "type": "text",
                    "value": "8. Registro SRV: Especifica puertos para servicios específicos"
                },
                {
                    "type": "text",
                    "value": "9. Registro PTR: Proporciona nombre de dominio en búsquedas por ip."
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": "De estos tipos crearemos un registro de tipo CNAME o nombre canónico, el cual nos dejara enlazar nuestra url de amazon, al dominio que usaremos. Para esto necesitamos obtener la zona de hosting en la cual se encuentra nuestro DNS, para esto utilizaremos el siguiente comando. No sin antes registrar en nuestro dominio, que el controlador de dominio apunte al registro SOA creado al crear nuestra zona. (Esto puede variar según tu proveedor)"
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "code",
                    "value": " aws s3 list-hosted-zones"
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": " AL realizar el comando anterior listaremos  todas nuestras zonas, de esto rescataremos la id de nuestra zona hosteada (la correspondiente al dominio que creamos o queremos asociar), en relación con el dominio que queramos utilizar. Para eso crearemos un json con la siguiente estructura:"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign10/updatefile.js"
                },
                {
                    "type": "text",
                    "value": "Con esto crearemos cambios al registro de nuestro dominio lo cual está indicado con la llave changes. Después con el método ACTION , escribimos créate para poder generar un nuevo registro dentro de nuestro dominio Con “ResourceRecordSet” definiremos la configuración de nuestro servicio de DNS. Dentro de esto encontraremos diferentes parámetros."
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Name: El cual es el dominio/subdominio que utilizaremos para enlazar nuestro bucket"
                        },
                        {
                            "level": "0",
                            "value": " Type: El tipo de registro que crearemos en este caso es un CNAME, ya que redireccionaremos de un dominio el nuestro, a el dominio de aws"
                        },
                        {
                            "level": "0",
                            "value": "TTL: Time To Live, es el tiempo de cache. El valor TTL actual de un registro determina cuánto tardará en aplicarse cualquier cambio que realices"
                        },
                        {
                            "level": "0",
                            "value": " Después resource records, es una lista de a los recursos que se le aplicara este mapeo."
                        },
                        {
                            "level": "1",
                            "value": " Este contiene una propiedad values, donde pondremos el subdominio o dominio al cual nuestro registro DNS CNAME apuntara"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Una vez creado este archivo procederemos a hacer los cambios con la consola de aws mediante el comando aws route 53 change-resource-record-sets, para esto necesitaremos ingresar los hosted-zone-id a la que queremos hacer cambios, y utilizando el parámetro –change-batch procederemos a subir nuestro json con las instrucciones necesarias para actualizar nuestro registro, como mostramos a continuación."
                },
                {
                    "type": "code",
                    "value": " aws route53 change-resource-records --hosted-zone-id Z03346142C3RKH191036Y --change-batch file://cname.json"
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": " Una vez esto sea realizará, aws procederá a crear el registro y agregarlo a la DNS, con lo que podremos acceder a nuestro sitio web, mediante el subdominio que registramos."
                },
                {
                    "type": "text",
                    "value": "Lo que hicimos mediante estos comandos es entonces el crear un registro de tipo CNAME a la configuración de nuestro dominio que apunte a la dirección /dominio de nuestro sitio web, para que de esta manera nuestro  controlador de dominio o servicio de DNS redirige todas las peticiones de a dicho subdominio a él proveído por AWS."
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "text",
                    "value": "Nosotros no utilizamos el registro A ya que nuestro enlace no apunta a una dirección web estática , y no utilizamos AAAA tampoco ya que la dirección no es IPV6, por el contrario, utilizamos el CNAME, porque solo quisimos hacer una redirección a otro dominio."
                }
            ]
        },
        {
            "question": "7.- Escribe el código en Python para leer y borrar un mensaje de SQS",
            "content": [
                {
                    "type": "code",
                    "value": "/assets/images/assign10/sqs-reader.py"
                },
            ]
        },
        {
            "question": "8.-  Explica las diferencias entre SNS y SQS",
            "content": [
                {
                    "type": "text",
                    "value": " SQS  es el Simple Queue Sevice de Amazon, mientras que SNS es el Simple Notification Service de Amazon. Aunque ambos servicios pueden servir como medio de comunicación existen varias diferencias entre ambos servicios."
                },
                {
                    "type": "text",
                    "value": " Primeramente, SNS utiliza una arquitectura Publisher Subscribe, en la cual se simplifica el proceso del envío de mensajes, haciendo que el publicador, publique un mensaje y, además, la estructura se encarga de conocer a quienes les interesa ese mensaje y enviarlo a sus destinatarios."
                },
                {
                    "type": "text",
                    "value": "Por otro lado, SQS intenta replicar la estructura de datos Queue, al utilizar una técnica llamada message Queuing en la cual se crea una cola de mensajes, y el suscriptor o consumidor de esa cola, consume periódicamente de la queue para obtener un mensaje."
                },
                {
                    "type": "text",
                    "value": " Debido a la naturaleza de ambas soluciones es que existen diferencias entre ambos tipos de soluciones, entre ellas podemos encontrar las siguientes."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Mecanismo de comunicación. Amazon SNS utiliza un Push service, esto quiere decir que SNS les envía los mensajes a sus consumidores. Por otro lado, SQS es un pull service, eso quiere decir que en este caso un consumidor le tiene que decir a SQS que quiere leer un mensaje para de esta manera obtenerlo."
                        },
                        {
                            "level": "0",
                            "value": "Entrega de Mensajes:  SNS permite enviar mensajes a distintos consumidores, haciendo que, si existe un mensaje A, este se entregue a todos los interesados en leer el mensaje A. Por otro lado, idealmente, SQS busca que el mensaje se entregue a un solo consumidor, es decir, solo un consumidor A, puede consumir el mensaje B, y siempre y cuando el mensaje no sea agregado de nuevo al Queue, ningún otro consumidor recibirá dicho mensaje."
                        },
                        {
                            "level": "0",
                            "value": "Garantizar la entrega: Amazon SNS  a la hora de enviar un mensaje a un consumidor, empuja los mensajes a los suscriptores que estén activos,  dependiendo de la configuración SNS puede llegar a reintentar la entrega de dicho mensaje, sin embargo, no garantiza que la entrega se haga. Por otro lado, SQS si garantiza la entrega, ya que los mensajes quedan almacenados en la estructura de datos (dependiendo la configuración ) y el mensaje solo es eliminado hasta que haya sido consumido."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Debido a estas características ambos servicios tienen distintos casos de uso, por ejemplo, SQS está pensado más para manejar:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Procesamiento asíncrono.  Al utilizar un SQS ya que garantizamos la entrega de cierto mensaje, lo que logramos es que podemos almacenar los mensajes en una queue, y procesar los mismos cuando tengamos recursos suficientes para realizar las operaciones. De esta manera no bloqueemos un workflow debido a un procesamiento de datos."
                        },
                        {
                            "level": "0",
                            "value": "Procesamiento de Mensajes En Paralelo. Al utilizar múltiples queues de SQS , nosotros podemos distribuir la carga de procesamiento de mensajes, en diferentes instancias, haciendo que se procesen más datos."
                        },
                        {
                            "level": "0",
                            "value": "Desacoplar y  escalar microservicios. Al utilizar queues para el paso de mensajes, entonces estamos desacoplando el procesamiento de estos , de las acciones del servicio que genera esos datos, bloqueando menos el flujo del procesamiento. Debido a esto y que podemos consultar el tamaño de nuestro queue, nosotros podemos escalar nuestros servicios de acuerdo con la demanda que tengamos, haciendo un escalado dinámico basado en la demanda."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Por otro lado, SNS está pensado para manejar casos como:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " envió de Notificaciones en tiempo real. Ya que no garantizamos la entrega de mensajes, y nos interesa compartir información, SNS es útil para notificar a las personas interesadas acerca de eventos que ocurren."
                        },
                        {
                            "level": "0",
                            "value": "Broadcast de mensajes. Si necesitamos enviar información de paro a servicios , SNS nos ayuda a enviar estos mensajes a múltiples servicios."
                        },
                        {
                            "level": "0",
                            "value": "Webhooks. Dado que los mensajes de SNS pueden ser utilizados como eventos que fueron detonados, podemos utilizar SNS para enviarlos mensajes correspondientes a los servicios que procesaran datos , de acuerdo con la información de dichos mensajes."
                        },
                        {
                            "level": "0",
                            "value": "Alertas y Monitoreo. Podemos configurar alertas que notifiquen a una gran cantidad de sistemas acerca del funcionamiento de ciertos comportamientos, teniendo así avisos de los que pasa en el sistema."
                        }
                    ]
                }
            ]
        },
        {
            "question": "9.-  Explica el ciclo de TDD.",
            "content": [
                {
                    "type": "text",
                    "value": " TDD es test Driven Development."
                },
                {
                    "type": "text",
                    "value": " Básicamente es una práctica la cual se enfoca en el desarrollo de \"pruebas\" a la hora de realizar código."
                },
                {
                    "type": "text",
                    "value": " Una diferencia entre el Test-Driven Development y la realización de pruebas para un código es el orden en el que se hace la codificación."
                },
                {
                    "type": "text",
                    "value": " Cuando uno realiza Test Driven Development, uno empieza creando las pruebas, las cuales son secciones de código que verifican y validan que la funcionalidad es correcta, o adecuada a el problema que se quiere resolver. Una vez que se crea esta prueba, uno debe hacer ejecutar la prueba, para asegurarse que el problema falle (ya que aún no se ha codificado la solución), una vez que se ha codificado esta parte de la prueba, entonces se procede a crear o modificar la función objetivo la cual estamos desarrollando, con la finalidad de que pase la prueba. Una vez que hemos realizado esto, se vuelve a ejecutar la prueba con el fin de verificar que ahora nuestro código es capaz de pasar las pruebas. Este proceso se repite, hasta que se hayan creado las suficientes pruebas el cual el desarrollador define como necesarias para demostrar la funcionalidad de su programa."
                },
                {
                    "type": "text",
                    "value": "El proceso de desarrollo del TDD es un proceso evolutivo iterativo que se repite hasta que se ha completado el proceso de desarrollo , y se han cubierto todas los casos de prueba que se pretender cubrir."
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Desarrollar la prueba. Cuando realizamos TDD, uno de los requisitos más importantes, es que conozcamos correctamente las especificaciones del sistema que estamos desarrollando. De esta manera entonces podemos crear unas pruebas que aseguren que dichos requerimientos se están cumpliendo con nuestro Código.  Es importante que las pruebas se realicen antes de haber producido el código, ya que esto ayudara a que no exista bias al realizar las pruebas y además obliga a que se entiendan bien los requerimientos."
                        },
                        {
                            "level": "0",
                            "value": "Escribir el Código . Una vez diseñadas las pruebas unitarias, ejecutamos la serie de casos de prueba que realizamos. Estos deberán fallar ya que a este punto aún no hemos realizado la codificación. después de esto procedemos crear el código para la funcionalidad que hemos creado las pruebas, con el objetivo de que este mismo código pase las pruebas."
                        },
                        {
                            "level": "0",
                            "value": "Validar las Pruebas: Una vez hemos terminado la codificación , procederemos a ejecutar nuestra suite de pruebas con el fin de validar que todas las pruebas pasen, es decir, verificamos que cada uno de los test cases sean aprobados ."
                        },
                        {
                            "level": "0",
                            "value": "Refactorizar y repetir. Una vez que todas las pruebas fueron ejecutadas correctamente, muy a menudo no encontraremos que hicimos código enfocado en el pasar las pruebas, el cual no es precisamente el óptimo , ya sea en tiempo, memoria, o modularidad de los componentes. El proceso de refactorización viene a resolver esto, dando tiempo para crear una solución adecuada."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Dentro de las ventajas del TDD podemos encontrar:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Aumenta la calidad del código ya que, al escribir código, con las pruebas realizadas nos aseguramos de que cumplan su función"
                        },
                        {
                            "level": "0",
                            "value": " Sirve como detector de errores: Debido a esto se detectan errores antes de que llegue la fase de producción y los daños sean graves"
                        },
                        {
                            "level": "0",
                            "value": " Facilitar la refactorización: Las pruebas sirven como guía para establecer si una funcionalidad es correcta y cumple con su cometido a la hora de refactorizar"
                        },
                        {
                            "level": "0",
                            "value": " Funcionan como documentación: Las pruebas realizadas a menudo sirven como especificación del comportamiento de nuestro algoritmo"
                        },
                        {
                            "level": "0",
                            "value": " Reduce costo y tiempos de desarrollo ya que al detectar errores más tarde, el costo y tiempo de reparación es menor."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Entre las desventajas podemos encontrar:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Retrasa el tiempo de desarrollo: El proceso de escribir pruebas es un proceso adicional a la codificación de la solución, por lo que se aumenta el tiempo de desarrollo inicial en comparación, con el desarrollo sin aplicar TDD"
                        },
                        {
                            "level": "0",
                            "value": " Tiene una curva de aprendizaje: EL aprender a diseñar las pruebas correctas, para comprobar la funcionalidad de un algoritmo es un proceso complejo el cual tienes que aprender a definir los límites y caos de usos para comprobar la funcionalidad."
                        },
                        {
                            "level": "0",
                            "value": " No garantiza la ausencia de errores: Aunque sirve para disminuirlos, el probar toda la combinación posible de variables es un proceso costoso por lo cual la selección de variables y casos de prueba puede ser susceptible a crear corner cases los cuales no sean testeados y hagan que la aplicación falle."
                        },
                        {
                            "level": "0",
                            "value": "Puede requerir frameworks específicos: Realizar pruebas en código suelen de depender de un frameworks específico para cada lenguaje, lo que pude generar problemas en el desarrollo y adaptación de las tecnologías."
                        },
                        {
                            "level": "0",
                            "value": " Puede generar exceso de pruebas: Si se planifica o desarrolla una gran cantidad de pruebas se puede retrasar el proceso de desarrollo. De la misma manera, si la especificación de los algoritmos en cuanto a entrada y salida cambia, se tendrá que modificar, en principio la totalidad o gran mayoría de las pruebas, por lo tanto, es necesario definir bien el alcance de las pruebas automatizadas para no generar un trabajo extra."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Debido a estas ventajas y desventajas es mejor aplicar TDD en cartas circunstancias como:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Cuando hay procesos críticos en el cual se necesita garantizar que la funcionalidad no afecta otros sistemas."
                        },
                        {
                            "level": "0",
                            "value": " Cuando se desarrollan softwares que necesitan demostrar alta disponibilidad"
                        },
                        {
                            "level": "0",
                            "value": " Cuando la seguridad sea un tema extremadamente relevante / critico"
                        },
                        {
                            "level": "0",
                            "value": " Cuando el software requiere cambios frecuentes. Si la funcionalidad cambia constantemente, o actualizan valores, TDD es un buen método para asegurar estándares mínimos de calidad ante los cambios."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Por otro lado, TDD no es útil cuando:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Se manejan software heredados: Cuando se hereda código sin pruebas, el realizar trabajos de TDD sobre las funcionalidades antiguas puede ser muy costoso e impráctico, en relación con lo que se necesita hacer o cambiar."
                        },
                        {
                            "level": "0",
                            "value": " Cuando las especificaciones no son muy claras: Si el código o los requisitos mínimo no están claramente definidos, y están sujetos a cambio constante, la refactorización del código y las pruebas puede generar trabajo innecesario y costoso."
                        },
                        {
                            "level": "0",
                            "value": "Desarrollo triviales, experimentales o prototipos: debido a la naturaleza de la solución, el añadir pruebas se vuelve ineficiente ya que no será el producto final, y más bien sirve como una toma de contacto y guía para definir comportamientos futuros."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "En general TDD es un practica de programación que te permite aumentar la calidad de tu código, mediante el desarrollo de pruebas que guían la codificación de tu algoritmo, sin embargo, esto se puede hacer únicamente cuando los requerimientos de tu programa están bien definidos, ya que, en estas definiciones y conceptos básicos , será que se rija el desarrollo de la aplicación."
                },
                {
                    "type": "text",
                    "value": " Supongamos que queremos implementar una función simple para sumar dos números. Podríamos seguir los siguientes pasos para implementar esta función utilizando TDD:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Escribir una prueba que verifique que la función devuelve el resultado correcto al sumar dos números."
                        },
                        {
                            "level": "0",
                            "value": " Ejecutar la prueba y verificar que falla."
                        },
                        {
                            "level": "0",
                            "value": " Escribir la función que realiza la suma de los dos números."
                        },
                        {
                            "level": "0",
                            "value": " Ejecutar la prueba nuevamente y verificar que pase."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " Una vez creamos todas las pruebas entonces, solo queda verificar que pasen, y si modificamos algo en un futuro las pruebas servirán para asegurarnos que las nuevas versiones del algoritmo siguen cumpliendo con la definición de su funcionamiento"
                }
            ]
        },
        {
            "question": "10.-  Explica si el amor lo puede todo y por qué.",
            "content": [
                {
                    "type": "text",
                    "value": " La respuesta corta a esta pregunta es, depende."
                },
                {
                    "type": "text",
                    "value": "El amor realmente, no lo puede todo, existen leyes de la física inamovibles (al menos que conozcamos hasta ahora), que no pueden ser cambiadas. Por ejemplo, el amor no puede modificar las leyes de la termodinámica , o las leyes de newton, o crear una nueva manera o conjunto de reglas que pueda cambiar el comportamiento del universo. Sin embargo, puede encontrar reglas que los ayuden a representarlo, o que describan un caso muy específico de esta problemática ."
                },
                {
                    "type": "text",
                    "value": "Por otro lado, en otros casos donde algo se ve imposible, pero realmente es posible, el amor si sirve como motor, o factor que impulsa a una persona como motivación para lograr algo. Pongamos por ejemplo la siguiente meta, ser la persona con la mayor nota en una carrera universitaria."
                },
                {
                    "type": "text",
                    "value": "Ciertamente, lograr esto no es una tarea sencilla, ya que dependen tu generación puedes tener desde 1 hasta 1000 otras personas o más dentro de tu carrera, con las cuales tendrás que competir para lograr dicho cometido. Probablemente tendrás que estudiar más que los demás , tendrás que esforzarte más que los demás , tendrás que aprender e involucrarte en procesos externos que permitan desarrollarte de manera más integra, todo eso sin descuidar los proyectos y la ejecución de estos ."
                },
                {
                    "type": "text",
                    "value": "Hasta ahora mencione puras características que , en principio no tienen que ver poco o nada con el amor. Hablamos de esfuerzo, constancia, dedicación , sacrificio ,disciplina, entre otros. Estas son en principio, cualidades que uno debe tener para lograr cualquier cosa, y muchas otras que no hemos mencionado, y aunque no están directamente relacionadas con el amor, todas se pueden lograr mediante el amor."
                },
                {
                    "type": "text",
                    "value": "Cuando hablamos de amor, normalmente solemos entender el amor como este sentimiento de afecto que se experimenta por otras personas, sin embargo, esta no es la única representación del amor. El amor abarca otros ámbitos como lo son el amor al trabajo, a uno mismo, hobbies. El amor entonces no es un sentimiento solo a otros persona, sino que más bien es una fuerza que te hace sentir conectado a lograr algo, esto puede ser una idea, objeto , personal creencia o incluso uno mismo, que genera satisfacción felicidad y/o plenitud."
                },
                {
                    "type": "text",
                    "value": "De esta manera el amor se vuelve una motivación . Volviendo al caso que planteamos anteriormente, entonces, las características que necesitamos para lograr aquello que queremos pueden ser alcanzadas mediante el amor, ya que el amor nos dará esa fuerza que nos impulsará a desarrollar nuestras características para lograr nuestro cometido."
                },
                {
                    "type": "text",
                    "value": "El amor entonces no es más que el combustible de nuestro ser, el cual nos ayuda a trasladarnos hacia nuestros objetivos, por lo tanto, si uno quiere lograr algo, lo puede lograr mediante el amor, el cual te llevara a reunir los elementos necesarios para lograr lo que quieres. En el caso de ser la persona con más nota, el amor te motivara e impulsara a obtener las cualidades de resiliencia, determinación ,  que te llevaran a reunir los esfuerzos necesarios para obtener esa mayor nota."
                },
                {
                    "type": "text",
                    "value": "Como bien decía Pablo Coelho “Cuando una persona realmente desea algo, el universo entero conspira para que pueda realizar su sueño”, esto quiere decir que cualquier persona con el amor propio para lograr sus cometidos, se esforzara  y lograra apreciar y aprovechar las oportunidades que el mundo le pone en su camino."
                },
                {
                    "type": "text",
                    "value": "De esta manera, si, el amor todo lo puede ya que este refleja el factor de determinación y cambio que nos alimenta a empezar y emprender los viajes, y por más largo que sea el viaje, siempre se puede llegar a él , ya que “Un viaje de mil millas comienza con un solo paso”, y el amor, es el desencadenante de ese paso."
                }
            ]
        }
    ]
};
//# sourceMappingURL=assign10.js.map