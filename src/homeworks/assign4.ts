export let assign4 ={
    "sections":[
        {
            "question": "1.-  Describe the concept of throttling in APIs. 15 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Una Throttling api, es un el proceso en el cual una API , limita el número de llamadas (el número de usos ), que un cliente puede hacer en un cierto periodo de tiempo."
                },
                {
                    "type": "text",
                    "value": "Este método o técnica ayuda a los desarrolladoras de API a reducir el número de request, y la cantidad de tráfico que reciben sus servidores, o api para la ejecución de una funcion o api en específico . Con esto el desarrollador de la api, se segura de reducir el número de llamadas, por ende , puede disminuir el uso de sus sistema al obligar a los usuarios a pagar más (la opción poco inteligente) o a desarrollar algoritmos inteligentes para utilizar lo menos posible la api en cuestión ."
                },
                {
                    "type": "text",
                    "value": " De forma general una Throttling API, funciona de la siguiente manera,"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "El proveedor configura un threshold de llamadas de api en un tiempo o sección de tiempo específico ."
                        },
                        {
                            "level": "0",
                            "value": "Mientras el usuario llama a la función dentro del el límite aceptado el api funciona normalmente"
                        },
                        {
                            "level": "0",
                            "value": "Cuando se supera el límite de llamadas , el servidor devuelve un código 429 que significa too many request."
                        },
                        {
                            "level": "0",
                            "value": "Cuando pase el periodo del tiempo configurado el api vuelve a funcionar con normalidad."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " El throttling API es útil en situaciones en las que se espera que una API tenga una gran cantidad de solicitudes, pero el proveedor de la API quiere limitar la cantidad de solicitudes que un cliente puede enviar en un período de tiempo determinado."
                },
                {
                    "type": "text",
                    "value": "Los casos de uso más común para este tipo de sistemas son los siguientes:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " protección contra ataques DDOS:  Si se coordina correctamente, un usuario puede intentar denegar el servicio de la API saturando el servidor con request, sin embargo, si esto se limita, el ataque durara como máximo, el número de llamadas permitidas por unidad de tiempo, haciendo que el servidor no se sature,"
                        },
                        {
                            "level": "0",
                            "value": " Optimizar el rendimiento del servidor: Al limitar la cantidad de solicitudes que un cliente puede enviar en un período de tiempo determinado, el proveedor de la API puede garantizar que la API tenga un rendimiento consistente y no se sobrecargue con demasiadas solicitudes."
                        },
                        {
                            "level": "0",
                            "value": "Controlar el costo: Al limitar la cantidad de solicitudes que un cliente puede enviar en un período de tiempo determinado, el proveedor de la API puede controlar el costo de su infraestructura. (Al limitar el uso de ancho de banda)"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Aparte de los beneficios mencionados anteriormente , el uso de throtling api puede ofrecer ventajas como:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Ofrece flexibilidad: El throttling API puede ser personalizado y configurado para satisfacer las necesidades específicas de cada proveedor de API. Por ejemplo, se pueden establecer diferentes límites de tasa de solicitudes para diferentes tipos de clientes o para diferentes tipos de solicitudes."
                        },
                        {
                            "level": "0",
                            "value": " Mejora la calidad del servicio: Al limitar la cantidad de solicitudes que un cliente puede enviar en un período de tiempo determinado, el proveedor de la API puede garantizar que todos los usuarios tengan acceso a un servicio de alta calidad y que la API esté disponible y sea fácil de usar."
                        }
                    ]
                }
            ]
        },
        {
            "question": "2.-  Describe the concept of pagination in APIs. 15 points.",
            "content": [
                {
                    "type": "text",
                    "value": " La Pagination API es una técnica que se utiliza para dividir grandes conjuntos de datos en secciones más pequeñas y manejables para su procesamiento en una API (Interfaz de Programación de Aplicaciones). En lugar de devolver todos los datos de una sola vez, la API devuelve una cantidad limitada de datos a la vez, y proporciona información adicional para que el cliente pueda obtener más datos a pedido."
                },
                {
                    "type": "text",
                    "value": "Mediante el uso de esta técnica es posible disminuir los costos y uso del api , al disminuir el ancho de banda utilizado a la hora de solicitar un request, limitando la cantidad de registros o información que se devuelven a realizar una solicitud."
                },
                {
                    "type": "text",
                    "value": "Las Pagination Apis son útiles para los desarrolladores porque permiten estructurar y dividir grandes cantidades de información , en segmentos pequeños a fin de que los mismos sean una cantidad manejable la cual no afecte el rendimiento del sistema en general."
                },
                {
                    "type": "text",
                    "value": "Este tipo de Apis suelen incluir ventajas como la mejora de rendimiento, el ahorro de ancho de banda, facilitar el manejo de grandes conjuntos de datos, armas de facilitar procesos de paginación del lado del cliente, ya que la misma funcionalidad pasa a ser un servicio de fondo en lugar de un proceso activo del sistema."
                },
                {
                    "type": "text",
                    "value": "Sin embargo, a pesar de ser beneficioso para ahorrar costos la pagina tio n apis incluyen algunas desventajas como lo son"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Complejidad adicional: El definir que parámetros pueden ser utilizados para la paginación , ordenamiento, y por ende la coherencia de los datos entregados complican la implementación de este tipo de Apis"
                        },
                        {
                            "level": "0",
                            "value": "Requiere más usos de api: debido a que la api página sus resultados, el número de llamadas a este tipo de api crece ya que la cantidad de datos a la que es necesario acceder cambia constantemente, lo que suele aumentar la carga de trabajo para esas api"
                        },
                        {
                            "level": "0",
                            "value": "Pueden afectar la experiencia del usuario: Si la información paginada necesita ser procesada por el servidor, el uso de la misma puede incluir retrasos en el uso de la aplicación debido a la carga de datos."
                        }
                    ]
                }
            ]
        },
        {
            "question": "3.- Describe the concept of callback function. 15 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Una callback función , se suele entender como una funcion la cual es pasada como parámetro a otra para ejecutar al finalizar la ejecución de la primera. Este tipo de funciones suele ser utilizado en procesos asíncronos , cuando se trabaja sobre el procesado de grandes cantidades de información . Al utilizar este tipo de funciones, se puede especificar el comportamiento o siguiente paso de uso de la información ,  de esta manera se pueden coordinar procesos asíncronos , admitiendo paralelización y eliminando los tiempos de espera de ejecución de algunas funciones."
                },
                {
                    "type": "text",
                    "value": " La función de callbacks utiliza comúnmente en programación asíncrona, donde se necesita esperar a que se complete una tarea antes de continuar con otras tareas. Por ejemplo, una función de devolución de llamada podría utilizarse para notificar a una aplicación cuando se completa una solicitud de red o cuando se ha terminado de cargar una página web."
                },
                {
                    "type": "text",
                    "value": " Las funciones de devolución de llamada se utilizan en una variedad de situaciones en la programación, incluyendo:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Manejo de eventos: Las funciones de devolución de llamada se utilizan para manejar eventos del usuario, como hacer clic en un botón, mover el cursor sobre un elemento o enviar un formulario."
                        },
                        {
                            "level": "0",
                            "value": " Programación asíncrona: Las funciones de devolución de llamada se utilizan para manejar tareas que tardan mucho tiempo en completarse, como la lectura de un archivo o la realización de una solicitud de red."
                        },
                        {
                            "level": "0",
                            "value": " Animación y gráficos: Las funciones de devolución de llamada se utilizan en la creación de animaciones y gráficos interactivos, como juegos y visualizaciones de datos."
                        },
                        {
                            "level": "0",
                            "value": " Manejo de errores: Las funciones de devolución de llamada se utilizan para manejar errores en una aplicación, como la gestión de excepciones o la notificación al usuario de un error."
                        },
                        {
                            "level": "0",
                            "value": " Autenticación y autorización: Las funciones de devolución de llamada se utilizan en la autenticación y autorización de usuarios, como la validación de credenciales de inicio de sesión y la autorización de acceso a recursos protegidos."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Entre algunas de las ventajas de uso de funciones callback podemos encontrar que las mismas, permiten modularizarían . Ya que nos permite separar las funcionalidades de las funciones al definir el comportamiento para distintas situaciones. De la misa manera nos dan flexibilidad ya que permiten la ejecución de tareas en segundo plano. De la misma manera permite la reutilización de código , ya que al crear usar funciones de callback , podemos crear una funcion de procesamiento que realice todo el procedimiento común de depuración de datos, y que nos permite implementar una funcion de callback específica para cada caso distinto de uso."
                },
                {
                    "type": "text",
                    "value": " Las funciones de devolución de llamada son útiles en Cloud Computing por varias razones:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Escalabilidad: Las funciones de devolución de llamada se pueden utilizar para escalar la infraestructura de la nube. Cuando se utiliza una función de devolución de llamada en la nube, se puede procesar una gran cantidad de solicitudes sin tener que preocuparse por el rendimiento o la disponibilidad."
                        },
                        {
                            "level": "0",
                            "value": " Eficiencia: Las funciones de devolución de llamada pueden ejecutarse en la nube, lo que permite que la aplicación sea más eficiente en términos de uso de recursos. Las funciones de devolución de llamada en la nube pueden ejecutarse en paralelo y en segundo plano, lo que reduce el tiempo de espera del usuario y mejora la experiencia de usuario."
                        },
                        {
                            "level": "0",
                            "value": " Integración: Las funciones de devolución de llamada son una forma eficaz de integrar aplicaciones y servicios en la nube. Las funciones de devolución de llamada se pueden utilizar para comunicarse con otros servicios y aplicaciones en la nube, lo que permite que los datos se compartan y se procesen de manera eficiente."
                        },
                        {
                            "level": "0",
                            "value": " Automatización: Las funciones de devolución de llamada se pueden utilizar para automatizar tareas en la nube. Por ejemplo, las funciones de devolución de llamada se pueden utilizar para monitorear y responder automáticamente a eventos y alertas en la nube, como el aumento del tráfico o la caída de un servicio."
                        }
                    ]
                }
            ]
        },
        {
            "question": "4.- Describe the concept of cold start in AWS Lambda. 15 points.",
            "content": [
                {
                    "type": "text",
                    "value": " Una función Lambda en AWS (Amazon Web Services) es una pieza de código que se ejecuta en respuesta a un evento. Las funciones Lambda son servicios de cómputo sin servidor, lo que significa que no hay necesidad de aprovisionar o administrar la infraestructura en la que se ejecuta la función."
                },
                {
                    "type": "text",
                    "value": "Debido a esta característica es que se dice que la funciones aws lambdas, son funciones distribuidas que no dependen de un servidor en específico o hardware en específico , por lo que se pueden encontrar distribuidas a lo largo de diferentes servidores. Debido a esta característica es en la cual no se depende del hardware sobre el cual se ejecuta la funcion, y para garantizar que todas las funciones lambda sirvan aws tiene la capacidad de desactivar y activar las funciones lambda según sea necesario."
                },
                {
                    "type": "text",
                    "value": " AWS desactiva las funciones Lambda para ahorrar recursos y reducir costos. AWS utiliza una estrategia de aprovisionamiento bajo demanda, lo que significa que la capacidad de cómputo se ajusta automáticamente en función de la demanda de los clientes. Para lograr esto, AWS desactiva las funciones Lambda que no se han utilizado durante un período determinado, lo que libera recursos para otras funciones y mejora la eficiencia en la asignación de recursos."
                },
                {
                    "type": "text",
                    "value": "Cuando esto sucede una funcion lambda experimenta lo que se conoce como un “Cold Start”, en el cual se somete a un proceso en el que “reactiva” o se “ relanza ” el proceso que activa la funcion lambda. A este tiempo en el cual se reactiva el servicio lambda es lo que se le conoce como un cold start, el cual es el tiempo en el que se terminan de asignar los recursos de memoria y CPU a la funcion, y tiempo en el cual la funcion no puede atender o procesar el contenido del request."
                },
                {
                    "type": "text",
                    "value": "En palabras más simples, realizar un cold start hace referencia a que el proceso tiene que ser iniciado de nuevo, porque el mismo no existe (computacionalmente hablando) ya que no vive en la memoria RAM (Ojo si puse atención a sistemas operativos), del servidor de AWS que ejecuta al funcion lambda."
                },
                {
                    "type": "text",
                    "value": "Para reducir el tiempo que normalmente una  cold start  supone para la ejecución de la aplicación se suele sugerir"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Reducir el tamaño de la aplicación : Entre menos recursos ocupe y memoria más rápidamente será cargado en memoria y ejecutado"
                        },
                        {
                            "level": "0",
                            "value": "Minimizar el uso de Apis externas : La latencia de estos servicios puede afectar el cold start"
                        },
                        {
                            "level": "0",
                            "value": "Utilizar capas de funciones : bibliotecas de Código compartidas entre funciones lambda, lo que reduce el tamaño de la funcion."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "En resumen, una funcion lambda debe realizar operaciones o acciones atómicas ( especificas) con el fin de disminuir los tiempos de cold start ."
                }
            ]
        },
        {
            "question": "5.-  Describe each HTTP methods. 15 points.",
            "content": [
                {
                    "type": "text",
                    "value": " HTTP (Hypertext Transfer Protocol) es un protocolo de aplicación utilizado para la transferencia de datos en la World Wide Web (WWW). Se utiliza para enviar y recibir información en forma de páginas web, documentos, imágenes, videos y otros recursos multimedia. HTTP es un protocolo sin estado, lo que significa que cada solicitud que se realiza se trata como una solicitud nueva y no se guarda información sobre las solicitudes anteriores."
                },
                {
                    "type": "text",
                    "value": " El protocolo HTTP se basa en el modelo cliente-servidor, donde el cliente envía una solicitud al servidor y el servidor responde a esa solicitud. Una solicitud HTTP consta de un método HTTP, una URI (Uniform Resource Identifier) y un conjunto de encabezados. Los encabezados HTTP proporcionan información adicional sobre la solicitud y la respuesta, como el tipo de contenido y la longitud del mensaje."
                },
                {
                    "type": "text",
                    "value": " Los HTTP methods, o métodos HTTP, son verbos utilizados para indicar la acción que se desea realizar en un recurso identificado por la URI. Como se mencionó anteriormente, existen 9 métodos HTTP estándar, cada uno con una función específica."
                },
                {
                    "type": "text",
                    "value": " Los métodos HTTP son importantes porque permiten a los desarrolladores web crear aplicaciones web dinámicas e interactivas. Al utilizar los métodos HTTP, los desarrolladores pueden controlar cómo los usuarios interactúan con los recursos web y cómo se procesa la información que se envía y se recibe. Además, los métodos HTTP son esenciales para el desarrollo de API RESTful ("
                },
                {
                    "type": "text",
                    "value": "A continuación, se detallan los 9 métodos HTTP estándar y su función:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " GET: El método GET se utiliza para solicitar un recurso en el servidor. La solicitud GET solicita una representación de un recurso identificado por la URI en la línea de solicitud. Si se encuentra el recurso, el servidor lo devuelve en un mensaje de respuesta."
                        },
                        {
                            "level": "0",
                            "value": " POST: El método POST se utiliza para enviar datos al servidor para su procesamiento. La solicitud POST solicita que el servidor acepte la entidad incluida en la solicitud como un nuevo subordinado del recurso identificado por la URI en la línea de solicitud."
                        },
                        {
                            "level": "0",
                            "value": " PUT: El método PUT se utiliza para actualizar un recurso existente. La solicitud PUT solicita que el servidor actualice la entidad identificada por la URI en la línea de solicitud con la entidad incluida en la solicitud."
                        },
                        {
                            "level": "0",
                            "value": " DELETE: El método DELETE se utiliza para eliminar un recurso identificado por la URI en la línea de solicitud. Si se elimina el recurso, el servidor devuelve un mensaje de respuesta indicando que se ha eliminado."
                        },
                        {
                            "level": "0",
                            "value": " HEAD: El método HEAD se utiliza para solicitar información sobre un recurso sin obtener el cuerpo del mensaje completo. El servidor responde con un encabezado HTTP que contiene la misma información que una solicitud GET, pero sin el cuerpo de la respuesta."
                        },
                        {
                            "level": "0",
                            "value": " OPTIONS: El método OPTIONS se utiliza para obtener información sobre los métodos HTTP que son permitidos en un recurso. El servidor responde con un encabezado HTTP que contiene una lista de los métodos permitidos para el recurso solicitado."
                        },
                        {
                            "level": "0",
                            "value": " TRACE: El método TRACE se utiliza para recuperar el mensaje de solicitud tal como se recibió por el servidor. El servidor devuelve un mensaje de respuesta que contiene la solicitud original del cliente."
                        },
                        {
                            "level": "0",
                            "value": " CONNECT: El método CONNECT se utiliza para establecer una conexión de red en un túnel SSL. El servidor responde con un mensaje de respuesta que indica si se estableció o no la conexión."
                        },
                        {
                            "level": "0",
                            "value": " PATCH: El método PATCH se utiliza para actualizar parcialmente un recurso. La solicitud PATCH solicita que el servidor actualice la entidad identificada por la URI en la línea de solicitud con la entidad incluida en la solicitud. A diferencia de PUT, que actualiza todo el recurso, PATCH se utiliza para actualizar sólo una parte del recurso."
                        }
                    ]
                }
            ]
        },
        {
            "question": "6.-  Describe how you can automate a deployment of a static website to S3. 15 points",
            "content": [
                {
                    "type": "text",
                    "value": "La automatización del el deployment de un sitio web estático en s3 puede ser un proceso tan simple como sencillo, el proceso necesario para realizarlo es bastante sencillo y consiste en los siguientes pasos"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Crear un repositorio para realizar el control de versiones y cambios"
                        },
                        {
                            "level": "0",
                            "value": " Configurar un proceso de compilación"
                        },
                        {
                            "level": "0",
                            "value": " Configurar un servidor de alojamiento (Lugar para alojar y mostrar el sitio web)"
                        },
                        {
                            "level": "0",
                            "value": " Automatizar el proceso de deployment"
                        },
                        {
                            "level": "0",
                            "value": " Verificar y probar los cambios"
                        },
                        {
                            "level": "0",
                            "value": " Ejecutar el script de deployment."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "El proceso de crear un repositorio para el control de versiones es bastante sencillo, mediante git simplemente necesitas crear un repositorio en el cual se hará registro de todos los cambios realizados, esto servirá para mantenernos al tanto de los cambios realizados en cada implementación, y para de la misma manera tener un registro de cuando se subió la última versión del sistema, lo que ayudara a identificar que versiones introdujeron errores al sistema."
                },
                {
                    "type": "text",
                    "value": "Una vez realizado esto, solo tenemos que configurar un proceso de compilación. Muy a menudo cuando se trabaja con frameworks web, a veces es necesario generas los bundles o carpetas de distribución, los cuales contienen optimizaciones de códigos hechos al código original, ya sea para asegurar retrocompatibilidad, o por otro lado realizar procesos de uglificacion o minifcacion necesarios según los requerimientos del sitio web. (Asumiendo que estamos usando angular y un pre-render o generador de sitios web estáticos llamado scully , podríamos generar el siguiente pipeline de comandos )"
                },
                {
                    "type": "code",
                    "value": " Ng build ; npx scully –scanRoutes ;"
                },
                {
                    "type": "text",
                    "value": " Configurar el alojamiento de un sitio web estáticos, puede llegar a ser bastante simple, como generar un  bucket  de amazon s3 obteniendo su api y servicios, o también mediante la generación de una máquina virtual en la cual podremos configurar llaves ssh para la interacción con la VM. Para este caos se asumir que el sitio y los accesos han sido hechos con anterioridad."
                },
                {
                    "type": "text",
                    "value": " Para automatizar el proceso de deployment, con el paso anterior es necesario crear un script o utilizar algún tipo de herramienta que automatice este proceso. En el mercado existen Basantes herramientas de CI-CD que permiten realizar esto de manera sencilla. Entre algunos de ellos podemos encontrar Jenkins, AWS CodePipeline etc. O se puede realizar el scripting necesario para que esto pase."
                },
                {
                    "type": "text",
                    "value": "Para verificar los cambios, es buena práctica utilizar pruebas automatizadas para la confirmación , por lo que es recomendable crear una serie de casos de prueba que verifiquen que la funcionalidad de la aplicación es correcta antes de realizar el deployment a el sitio de hosting."
                },
                {
                    "type": "text",
                    "value": "Finalmente queda de ejecutar el script de deployment el cual puede parecerse a la siguiente forma."
                },
                {
                    "type":"code",
                    "value":"/assets/images/assign4/buildScript.js"
                },
                {
                    "type": "text",
                    "value": "Una vez con el script creado solo hace falta ejecutarlo y listo, tenemos un deployment automático del sitio web."
                },
                {
                    "type":"code",
                    "value":"sh ./build.sh"
                }
            ]
        },
        {
            "question": "7.- Read the Real-world Engineering Challenges #8: Breaking up a Monolith article and write a summary and opinions about it. 10 points.",
            "content": [
                {
                    "type": "text",
                    "value": "El artículo, breaking up a monolith cuanta la experiencia de desarrollo y migración de los servicios de Khan Academy, una organización educativa sin fines de lucro, la cual, por motivo determino del periodo de soporte y vida para el lenguaje de Python2, se vio en cierta manera obligada a rediseñar los servicios y las Apis nativas de la aplicación, con el fin de migrar su sistema monolítico a un bien estructurado para poder hacer uso de GraphQL."
                },
                {
                    "type": "text",
                    "value": "A lo largo del articulo y para la mejor comprensión de este se divide el contenido en 5 grandes bloques entre sellos podemos encontrar los siguientes"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Contexto y Motivación"
                        },
                        {
                            "level": "0",
                            "value": " Fase inicial"
                        },
                        {
                            "level": "0",
                            "value": " Fase de migración"
                        },
                        {
                            "level": "0",
                            "value": " Cosas que funcionaron"
                        },
                        {
                            "level": "0",
                            "value": " Cosas que sería bueno reconsiderar"
                        },
                        {
                            "level": "0",
                            "value": "Aprendizajes del proceso de migración ."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "La fase de contexto básicamente describe lo que comente, donde la empresa de Khan Academy, mediante el estudio d e un proceso de mejora, encontraron GraphQL (GraphQL es un lenguaje de consulta de datos y una tecnología de servidor que fue desarrollada por Facebook en 2012 y lanzada al público en 2015. GraphQL permite a los desarrolladores definir y solicitar exactamente los datos que necesitan en lugar de recibir datos completos de una API REST.) como una mejor alternativa para el desarrollo de sus Apis las cuales en un inicio se guiaban bajo la idea de API RESTful.  Debido a esto, y que al mismo tiempo el equipo del desarrollo empieza a ver complicado el mantener la arquitectura de monolito, y la eminente depreciación de Python 2 es que se decidió que era un buen momento para reestructurar y reorganizar la aplicación monolítica de Khan Academy."
                },
                {
                    "type": "text",
                    "value": "Al inicio del proyecto, lo que se nos cuenta es que las decisiones que tomaron en el inicio de mismo fueron las que guiaron todo el desarrollo consecuente, y una de las más importantes fue la selección del Lenguaje de programación, en el cual se reconstruir el sistema. Después de considerar los pros y contras de cada una de las opciones, el equipo de desarrollo selecciono el lenguaje Go debido a su mayor rendimiento en comparación a Python 2 y mejor soporte por parte de las herramientas de desarrollo."
                },
                {
                    "type": "text",
                    "value": "Una vez lo anterior fue seleccionado, el equipo busco definir el alcance del proyecto, es decir busco ser realistas y desde el inicio establecer que es lo que quieran lograr con la migración, para guiar su desarrollo y poder planear y destinar recursos a la causa. Algo que ayudo a este desarrollo fue dicha claridad en el sope , al ellos afirmar que lo que querían lograr era, mover su proyecto a GraphQL, migrando el 100 % del código en Python a GO."
                },
                {
                    "type": "text",
                    "value": "Para poder hacer una estimación de lo que esto tomaría, se le pregunto a Brian (uno de los encargados y responsables de la migración)  cual fue el método de estimación, para saber lo que haría que 1 millón de líneas de código , se tradujera a tiempo y recursos. Para esto Brian dice que, al principio , se usaron métricas simples, como el número de líneas de código que podían ser adaptadas por semana, sin embargo, que al puntualizar sobre el desarrollo los mismos tuvieron que considerar como dividir la aplicación en diferentes microservicios y actualizar su estimados en base a ellos."
                },
                {
                    "type": "text",
                    "value": "Para lograr dicho objetivo, el equipo decidió dividir el desarrollo en 2 fases:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "El MVE (Minimun Viable Experience) : Debido a que no era un desarrollo nuevo, el MVE hace referencia a todas aquellas funcionalidades identidad de Khan Academy las cuales definen la identidad de Khan Academy, La cual fue definida por los analistas de negocios, los cuales definieron los flujos más importantes de la aplicación"
                        },
                        {
                            "level": "0",
                            "value": "EL juego final: La fase donde se adaptan todas las funcionalidades adicionales restantes y se creara nuevas de ser necesario."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " La fase de migración:"
                },
                {
                    "type": "text",
                    "value": "Debido a que Khan Academy ya era un servicio establecido, a pesar de que el nuevo código ya estaba creado o desarrollado hasta cierto punto, no era correcto desde el punto de vista de implementación, el relanzar los servicios nuevos para reemplazar los otros de manera inmediata, por lo que los desarrolladores decidieron tomar o llevar a cabo un proceso más escalonado. De manera que a medida que las funcionalidades fueran siendo creadas, las mismas serian utilizadas o lanzadas, para coexistir con la aplicación monolítica, de esta manera se podría verificar el avance y validar la funcionalidad de estas."
                },
                {
                    "type": "text",
                    "value": "Para llevar esto acabo el equipo desarrollo una estrategia de migración bastante efectiva, la cual consiste en lo siguiente:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Redirigir todo el tráfico a los servicios monolíticos , a menos que un parámetro especial fuera especificado. Esto permitía a los desarrolladores el verificar que el funcionamiento del sistema era correcto."
                        },
                        {
                            "level": "0",
                            "value": "Side by side testing. Hacer el uso de ambos servicios, tanto el monolítico, como el nuevo servicio desarrollado . Ambos procesos son ejecutados, se almacena las diferencias entre los mismos y se devuelve la respuesta del servicio monolítico"
                        },
                        {
                            "level": "0",
                            "value": "Canary Deployment: Mientras se sigue en la fase de side by side testing. Para aquellos métodos que alteran el estado de un query, se hace una prueba piloto del nuevo servicio redirigiendo cierta parte del tráfico a el nuevo servicio."
                        },
                        {
                            "level": "0",
                            "value": " Migración: Todo el tráfico se redirige al nuevo servicio, mientras que el 2do sigue activo solo en caso de que exista un error en el nuevo sistema."
                        },
                        {
                            "level": "0",
                            "value": " Remover el antiguo sistema."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Algo que mencionan dentro del artículo que ayudo a la migración fue el desarrollo de pruebas automáticas al código , ya que este acercamiento permitió el generar pruebas robustas que aseguraran la calidad y lo completitud de los servicios."
                },
                {
                    "type": "text",
                    "value": " De esta experiencia de desarrollo los autores nos comentan que se ganó vario conocimiento que los ayudo y que fueron buenas para el desarrollo del proyecto, entre ellas podemos mencionar las siguientes"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Go fue un buen lenguaje: El grupo de desarrollo se siento cómodo con el ambiente lo que facilito el desarrollo ,  ya que el rendimiento era mayor. Sin embargo, uno de los drawbacks fue que el sistema no manejaba Generics o templates, lo que los obligaba a crear funciones similares para distintos tipos de datos"
                        },
                        {
                            "level": "0",
                            "value": "Migrar de Manera Incremental: El migrar servicio a servicio, y probarlo de manera incremental ayudo al equipo a ver el desarrollo e implementación continua permitió sentir que había avances"
                        },
                        {
                            "level": "0",
                            "value": "Separar lógicas en servicios: Esto ayudo a dividir los procesos en servicios que se encargaban de modificar una sola estructura de datos, lo que facilito detectar cuando las cosas salían mal"
                        },
                        {
                            "level": "0",
                            "value": "La migración side by side ayudo a comprar ambos servicios y poder ver de manera amas grafica la diferencia entre cada uno de ellos"
                        },
                        {
                            "level": "0",
                            "value": "Definir limites: La definición de límites y recursos ayudo a seguir modelo de cascada el cual, aunque no era un proceso de desarrollo ágil , adquirió y cumplía de mejor manera las necesidades del proyecto , ayudando al equipo a progresar al tiempo que se debía ."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "De entre las acciones que se menciona que sería prudente volver a pensar se encuentran:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": "Cambiarse a un lenguaje totalmente nuevo: Aunque la migración del nuevo sistema al nuevo lenguaje fue una decisión que aumento el rendimiento de la aplicación , la curva de aprendizaje que tuvieron que sufrir los ingenieros para adaptarse a la nueva metodología retraso aún más el proceso de desarrollo . Por lo que es difícil calcular si el costo extra de desarrollo podrá verse reflejado o amortiguado por el costo de mantenimiento y rendimiento de la aplicación ."
                        },
                        {
                            "level": "0",
                            "value": "El equipo manejo con ambigüedad el “adaptar las cosas como son”. Aunque esta era una regla general para la aplicación , las herramientas internas se adaptaban con menos rigidez, lo que causo más retrasos al no replicar el funcionamiento original."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Dentro de los aprendizajes que los integrantes de dicho proyecto aprendieron, lo mismos destacan que después de una migración que tomo 3.5 años, den entre ellos destacan el que el definir un MVE, sirve para priorizar cosas en ausencia de un MVP ( Mínimum Viable Producto ) de esta manera era más fácil visualizar y planear con antelación el desarrollo , de la misma manera al tomar la decisión de hacer un port o replica de la funcionalidad existente ayudo a realizar un estimado realista. Entre alguno de otros puntos que destacan son los siguientes:"
                },
                {
                    "type": "list",
                    "value": [
                        {
                            "level": "0",
                            "value": " Las deadlines o fechas limites pueden servir como motivación para el desarrollo de un proyecto"
                        },
                        {
                            "level": "0",
                            "value": "A pesar de que se divida una aplicación en microservicios, uno no puede olvidarse de la interacción entre los mismos, por lo que es importante tomar en cuenta esto a la hora del desarrollo."
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Finalmente, los autores o participes de la migración terminan advirtiendo que las migraciones a gran escala pueden sentirse inútiles o desagradecidas y pesadas de llevar a cabo, por lo que las mismas deben estar bien planeadas y estimadas para reducir los problemas relacionados."
                },
                {
                    "type": "text",
                    "value": "En general este fue un buen artículo, ya que nos permite observar la importancia de la planeación al desarrollar un proyecto, algo con lo que particularmente estoy de acuerdo y he podido ver en mi experiencia personal. El cómo, se seleccionan el tomar riesgos, y planear contramedidas y estar conscientes de las implicaciones que toman ciertas decisiones es útil para poder estimar de manera realista el costo y tiempos de desarrollo de un proyecto."
                },
                {
                    "type": "text",
                    "value": "De la misma manera de la lectura me gusto el acercamiento que tuvieron para el desarrollo de la integración y deployment escalonado de ambos servicios, el rediseñar un sistema mientras el anterior sirve como guía y respaldo para posibles fallas del nuevo, es un proceso que ayudara a visualizar los cambios y comprender mejor las diferencias y los procesos de ambos sistemas, lo que al mismo tiempo ayuda a reducir los fallos de la implementación"
                }
            ]
        }
    ]
}