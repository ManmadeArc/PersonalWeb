"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign3 = void 0;
exports.assign3 = {
    "sections": [
        {
            "question": "1. Create a CloudFront distribution for your website and explain each step with great technical detail.  50 points.",
            "content": [
                {
                    "type": "text",
                    "value": "El proceso para crear una distribución de cloudfront, es un proceso bastante sencillo. Para ello nosotros necesitamos tener previamente configurado un bucket de amazon s3 con el contenido que deseamos distribuir alrededor de la CDN que nos provee el servicio de cloudfront. Una vez teniendo esto el proceso es bastante simple."
                },
                {
                    "type": "text",
                    "value": "Lo que necesitamos a hacer es crear dicha distribución, esto lo podemos hacer mediante el siguiente comando."
                },
                {
                    "type": "code",
                    "value": "aws cloudfront create-distribution --distribution-config file://distribution.json"
                },
                {
                    "type": "text",
                    "value": "Donde el archivo distribution.config.json, sera aquel que define detalladamente, los datos del sitio que nosotros queremos configurar. Dicho documento tendrá una estructura similar a la siguiente."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign3/1.json"
                },
                {
                    "type": "text",
                    "value": "Dentro de esta configuración de CloudFront nos encontraremos los siguientes elementos para crear dicha configuración de CloudFront."
                },
                {
                    "type": "list",
                    "value": [
                        { "level": 0, "value": "CallerReference : Es el nombre único de la distribución que crearas. Si el nombre esta repetido, cloudfront no creara dicha distribución" },
                        { "level": 0, "value": "Origins: Estructura que define información acerca de los origines de la distribución" },
                        { "level": 1, "value": "Quantity: El número de orígenes de la distribución" },
                        { "level": 1, "value": "Items : Los elementos de la distribución" },
                        { "level": 2, "value": "Id : Identificador Unico para el miembro de la distribución" },
                        { "level": 2, "value": "DomainName : El nombre de dominio de la distribución" },
                        { "level": 2, "value": "S3OriginConfig :  Configuración utilizada para servir el contenido de un bucket no configurado como sitio web estático" },
                        { "level": 2, "value": "CustomOriginConfig : Configuración utilizada para cualquier otro tipo de distribución." },
                        { "level": 3, "value": "HTTPort: Puerto el cual sirve la pagina bajo el protocolo http" },
                        { "level": 3, "value": "HTTPSPort : Puerto Sobre el cual se sirve la pagina mediante el Protocolo HTTPS" },
                        { "level": 3, "value": "OriginProtocolPolicy: Protocolo Que usara cloudfront para acceder al contenido el dominio al cual especificamos." },
                        { "level": 3, "value": "OriginSSLProtocols: Estrutura que especifica las versiones minimas de los protocolos ssl tls a utilizar cuando cloudfront se conecta a su sitio web" },
                        { "level": 4, "value": "Quantity: NUmero de protocolos a soportar" },
                        { "level": 4, "value": "Items : Lista con los protocolos soportados" },
                        { "level": 0, "value": "DefaultcachéBehavior: Estructura que define la configuración del caché por defecto si no se especifica una CacheBehavio" },
                        { "level": 1, "value": "TargetOriginId: El identificador del origen al que cloudfront  hara redirigir las peticiones cuando se use un comportamiento default de caché" },
                        { "level": 1, "value": "ViewerProtocolPolicy: Define que protocolos se pueden usar cuando se quiera hacer uso a uno de los elementos de origen definidos en la distribución." },
                        { "level": 1, "value": "AllowedMethods: Una estructura que permite definir que métodos del estándar http pueden ser usados al acceder a la distribución." },
                        { "level": 2, "value": "Quantity: El número de métodos http que se permitirán " },
                        { "level": 2, "value": "Items : Una lista con los métodos permitidos" },
                        { "level": 2, "value": "CachedMethods: Esta estructura define que repuestas a ciertos contenidos pueden ser almacenados en el caché de cloudfront para usar con los distintos métodos" },
                        { "level": 3, "value": "Quantity : Numero de métodos a permitir" },
                        { "level": 3, "value": "Items: Lista con los métodos permitidos" },
                        { "level": 1, "value": "ForwardedValues:Es una estructura que sirve para decir a cloudfront que hacer con las cookies , las query strings y  los headers" },
                        { "level": 2, "value": "QueryString: Decide si pasa las query string hacia el servidor o si ignorarlas." },
                        { "level": 2, "value": "Cookies: Estructura que manejara el comportamiento de las cookies de cloudfront" },
                        { "level": 2, "value": "Forward: Sirve para indicar a cloudfront que deberia hacer con las cookies" },
                        { "level": 1, "value": "MinTTL : Define el tiempo minimo el cual un edge server puede tener antes de hacer una nueva solicitud a el origen para volver a tener el caché del contenido" },
                        { "level": 1, "value": "DeafultTTL : Tiempo promedio para volver a obtener o recargar el caché desde la fuente original" },
                        { "level": 1, "value": "MaxTTL: Tiempo maximo el cual el servidor puede tardar en recargar el caché" },
                        { "level": 0, "value": "Enabled: Valor que sirve para indicar si la distribución a crear debe ser habilitada o no" },
                        { "level": 0, "value": "DefaultRootObject : Este campo sirva para especificar el elemento o documento que cloudfront debería solicitar cuando se intente acceder a la raíz del dominio a utilizar." },
                        { "level": 0, "value": "Comment: Un valor que sirva para describir los datos de la distribución creada. Tiene como longitud maxima 128 caracteres." }
                    ]
                },
                {
                    "type": "text",
                    "value": "Una vez que hemos creado dicho archivo, solo queda ejecutar el comando. Lo que debería devolver un json. De entre la llave que encontremos, la dirección o dominio de nuestra distribución se encontrara dentro de la llave de distribution, en la propiedad DomainName."
                },
                {
                    "type": "text",
                    "value": "Dentro de esta misma sección podremos encontrar, una propiedad llamada Status, la cual indicara si nuestra distribución a sido creada con éxito. Cuando el esta propiedad Status, tenga el valor  deployed, sera cuando nuestro contenido se haya distribuido por todas los edge servers.Para verificar  si la distribucion fue creada exitosamente podemos utilizar el comando"
                },
                {
                    "type": "code",
                    "value": "aws cloudfront list-distributions"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/7.png"
                },
                {
                    "type": "text",
                    "value": "Donde al buscar en la terminal podemos observar que nuestra distribución se encuentra deployed. Donde ademas  podemos ver el dominio de nuestra distribucion de cloudfront.	"
                }
            ]
        },
        {
            "question": "2. Update your DNS Record to route to the CloudFront end point and explain each step with great technical detail. 10 points.",
            "content": [
                {
                    "type": "text",
                    "value": "Para hacer un update de nuestro registro de DNS a la ruta que obtuvimos previamente de CloudFront, primeramente, necesitamos obtener la zona de hosting en la cual se encuentra nuestro DNS. Para esto podemos utilizar el comando"
                },
                {
                    "type": "code",
                    "value": "aws route53 list-hosted-zones"
                },
                {
                    "type": "text",
                    "value": "Una vez que obtengamos nuestros registros es necesario, obtener la id de nuestra id de zona y anotarla. Para comprobar que nuestro dominio existe en esta zona podemos utilizar el siguiente comando"
                },
                {
                    "type": "code",
                    "value": "aws route53 list-resource-record-sets --hosted-zone-id Z03346142C3RKH191036Y --start-record-name marcos.cetystijuana.com"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/17.png"
                },
                {
                    "type": "text",
                    "value": "Estos nos desplegasen una lista de los records asociados a nuestro dominio, empezando por la que contiene el nombre que especificamos en --start-record-name. Una vez que nos verificamos que si existe va a ser necesario crear un archivo json, el cual indique los cambios sobre el recurso que queramos actualizar. El mismo debera tomar la siguiente forma."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign3/4.json"
                },
                {
                    "type": "text",
                    "value": "Mediante el archivo anterior le diremos al cloudfront lo siguiente"
                },
                {
                    "type": "list",
                    "value": [
                        { "level": 0, "value": "Coment: Comentario opcional para describir los cambios hechos a los registros." },
                        { "level": 0, "value": "Changes : Informacion General para describir los cambios a realizar." },
                        { "level": 1, "value": "Action: Accion que indicaremos o queremos realizar, podemos crear, borrar o actualizar un recurso" },
                        { "level": 1, "value": "ResourceRecordSet : Estructura que define los cambios a realizar en el registro" },
                        { "level": 2, "value": "Name Nombre del dominio al que haremos referencia" },
                        { "level": 2, "value": "Tipo: El tipo de registro DNS al que haremos un cambio." },
                        { "level": 2, "value": "TTL: Tiempo de vida de caché, es el tiempo en el que se almacena el caché antes de res recargado. Este campo se puede omitir si se actualiza un recurso y no es necesario actualizar el TTL" },
                        { "level": 2, "value": "ResourceRecords : Es una lista que tiene las Ip o dominios actualizar para los distintos registros. Estos pueden tener multiples valores exceptuando registros de tipo CNAME o SOA." },
                        { "level": 3, "value": "Values: La dirección Ip o dominio a enlazar a él DNS record." },
                    ]
                },
                {
                    "type": "text",
                    "value": "Ten en cuenta que en nuestro caso utilizaremos la acción upsert ya que existe un dominio  al que queremos actualizar. Otra de las consideraciones es que el tipo de DNS record que modificaremos es uno de tipo CNAME o nombre canónico. Esto es debido a que crearemos un registro que apunte a otro dominio, no una direcciojn ip, por lo que el tipo adecuado es el registro de Nombre Canonico (CNAME). Un vez tenemos este archivo solo hace falta ejecutar el siguiente comando."
                },
                {
                    "type": "code",
                    "value": "aws route53 change-resource-record-sets --hosted-zone-id Z03346142C3RKH191036Y  --change-batch file://change-batch.json "
                },
                {
                    "type": "text",
                    "value": "Una vez que el cambio este hecho, el recurso procederá a ser actualizado. Sin embargo como el registro se tiene que replicar y propagar a traves de los distintos servidores de DNS en la region del servidor de DNS, puede que el cambio tome un tiempo en verse reflejado."
                },
                {
                    "type": "text",
                    "value": "Una vez que el resgistro haya sido actualizado, podemos intentar acceder a nuestra web mediante el dominio que hemos seleccionado en este caso marcos.cetystijuana.com"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/9.png"
                },
                {
                    "type": "text",
                    "value": "Donde si observamos correctamente este se debe a que cuando confguramos este CDN, los mismos estan configurados para poder acceder unicamente mediante el enlace que el CDN nos provee. Esto sucede porque el CDN esta configurado para proveer el contenido unicamente a dominios autorizados, de lo contrario cualqiuera podria crear un registro a tu dominio, y sobrecargar de peticiones los distintos servidores, abusando asi de los servidores al linkear otros dominios a el tuyo, y pudiendo hacer entonces practicas como phishing de datos."
                },
                {
                    "type": "text",
                    "value": "Para poder entonces habilitar esto, nosotros necesitamos añadir nuestro dominio a la lista de dominios autorizados para redirigir nuestra pagina web estatica. Para hacer eso podemos hacer lo siguiente. Primeramente obtener la configuracion de nuestra distrbucion mediante el siguiente comando"
                },
                {
                    "type": "code",
                    "value": " aws cloudfront get-distribution-config --id E100HXP077G1GL"
                },
                {
                    "type": "text",
                    "value": "En el cual la id es la id que obtuvimos al crear la distribución. Una vez realizado esto, podremos copiar los contenidos de este comando en un nuevo json y agregar los valores que ocupamos. De este json que obtivimos la llave DistributionConfig es la que denota la configuracion de nestra dsitrbución hecha en el paso anterior. Mientras que el ETag es un recurso para identificar la version actual de la distribucionón. "
                },
                {
                    "type": "json",
                    "value": "/assets/images/assign3/a.json"
                },
                {
                    "type": "text",
                    "value": "Como queremos agregar nuestro subdominio o alias a la lista de dominios que pueden redirigir a nuestra distribución de cloudfront , tendremos que agregarlo como un alias. En este caso agregaremos el siguiente json a la configuración del la distrbución:"
                },
                {
                    "type": "json",
                    "value": "/assets/images/assign3/6.json"
                },
                {
                    "type": "text",
                    "value": "Esto lo agregaremos en la sección de aliases de nuestra configuración que pudimos descargar, una vez realizado esto procederemos a hacer los cambios correspondientes mediante el siguiente comando."
                },
                {
                    "type": "code",
                    "value": "aws cloudfront update-distribution --id E100HXP077G1GL --distribution-config file://5.json"
                },
                {
                    "type": "text",
                    "value": "Sin embargo necesitaremos antes  de eso , obtener nuestro certificado de que poseemos el dominio el cual estamos agregando a nuestra distribución de cloudfront. Para eso podremos solicitar un certificado para nuestro dominio. Un certificado en el contexto de servicios, es un certificado el cual asegura que los sitios y paginas de internet son legales y sus transacciones seguras. De esta manera un certificado asegura la  legalidad de un sitio,  lo que te permite realizar a menudo Esto lo podremos hacer con la cli de amazon mediante el siguiente comando."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/10.png"
                },
                {
                    "type": "text",
                    "value": "Lo que hace el anterior comendo es, solicitar a la entidad certificadore de AMAZON , el amazon certificate manager por un certificado TSL, para esto acm tiene que verificar que nosotros poseemos el control de ese dominio, y que enrealidad es nuestro, por ello lo que necesitamos hacer es el solicitar un tipo de validación. En este caso haremos uso del metodo de validacion por DNS, en el cual mediante el registro de unos CNAME, en el registro de DNS podremos demostrarle a nuestra entidad que si somos duenos del dominio. PAra obtener los registros que deberemos agregar podemos usar el siguiente comando."
                },
                {
                    "type": "code",
                    "value": "aws acm describe-certificate --certificate-arn arn:aws:acm:us-east-1:292274580527:certificate/390bbe14-51d0-4058-9e51-a3779902e01a"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/11.png"
                },
                {
                    "type": "text",
                    "value": "Una vez obtenemos el resultado del comando podremos ver que dentro de domain validation options, obtenemos un registro el cual tendremos que modificar y crear con un CNAME para así poder validar que somos propietarios de dicho dominio."
                },
                {
                    "type": "text",
                    "value": "Procedemos a agregar los valores indicados en DomainValidOptions en la llave de ResrouceRecords como registro de nuestro DNS, para que  de esta manera Amazon Certificate Manager pueda reconocer que el dominio es de nosotros."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/12.png"
                },
                {
                    "type": "text",
                    "value": "Una vez realizado esto solo basta con  esperar a que los cambios se propaguen y cuando eso funcione utilizaremos el siguiente comando para verificar si amazon nos ha creado el certificado. Para esto hemos de usar el resource name que amazon nos provee en el comando anterior"
                },
                {
                    "type": "code",
                    "value": "aws acm describe-certificate --certificate-arn arn:aws:acm:us-east-1:292274580527:certificate/390bbe14-51d0-4058-9e51-a3779902e01a "
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/13.png"
                },
                {
                    "type": "text",
                    "value": "Donde podremos ver que el estatus de nuestro  certificado es issued. Ahora que tenemos este certificado lo único que hace falta es anotar el valor del certificado, porque lo usaremos después. "
                },
                {
                    "type": "text",
                    "value": "Para usarlo, tendremos que volver a nuestra distribución de cloudfront, donde  con base en el archivo de configuración que descargamos de nuestra distribución, agregaremos el siguiente  json"
                },
                {
                    "type": "json",
                    "value": "/assets/images/assign3/9.json"
                },
                {
                    "type": "list",
                    "value": [
                        { "level": 0, "value": "Viewer Certificate es el objeto el cual hará que configuremos el certificado por defecto de aws. " },
                        { "level": 1, "value": "SSL Suported Mehtod: la propiedad configura qué métodos de encriptación son seguros, en este caso usaremos sni-only" },
                        { "level": 1, "value": "MinimunProtocolVersion Hará que utilicemos la versión de TSL1 como la versión mínima soportada" },
                        { "level": 1, "value": "ACMCertificationArn ser el campo con el cual configuraremos el certificado, el cual obtuvimos , que es el enlace a la entidad certificadora y al certificado que cerciora la veracidad o seguridad de nuestra página." },
                    ]
                },
                {
                    "type": "text",
                    "value": "Finalmente, rescataremos el ETAG de la versión que descargamos, y una vez que tengamos el JSON , actualizado, procederemos a actualizar nuestra configuración con el siguiente comando."
                },
                {
                    "type": "code",
                    "value": "aws cloudfront update-distribution --id E100HXP077G1GL --distribution-config file://7.json --if-match E1LULWCSQYD9XV"
                },
                {
                    "type": "text",
                    "value": "En este caso -if-match es una configuración que usamos para asegurarnos que la versión que actualizaremos es la correcta.Una vez que estos cambios se propagan podremos acceder a nuestra distribución de cloudfront mediante nuestro CNAME "
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/16.png"
                },
                {
                    "type": "text",
                    "value": "Donde también podremos ver que en caso de haber configurado el certificado  y la redireccion https , cloudfront hara redirect inmediato a https, mostrando la conxion segura con el candado "
                },
            ]
        },
        {
            "question": "3. Explain what it means to minify website resources (html, js, css) and the advantages and disadvantages of this process. 10 points.",
            "content": [
                {
                    "type": "text",
                    "value": "El concepto de minificación de recursos como html css  o js hace referencia directamente a la reducción del peso del tamaño de un archivo de este tipo. Aunque la minificación de recursos el contexto de las páginas web se refiere comúnmente a los tipos de archivos antes mencionados, la verdad es que cualquier recurso que puede ser mostrado en una página web puede ser minificado."
                },
                {
                    "type": "text",
                    "value": "El proceso de minificacion, el cual normalmente se refiere a la minificacion de html, js y css, normalmente hace referencia al proceso de “compactar” los contenidos de dichos archivos, con el fin de eliminar cualquier tipo de información que no sea absolutamente necesaria para ejecución del código fuente del archivo que se quiera minificar."
                },
                {
                    "type": "text",
                    "value": "Pensemos en la minificacion por ejemplo de un archivo JavaScript. Cuando una persona crea un archivo JavaScript, html o CSS, los desarrolladores tiendan a escribir el código de una manera estructurada visualmente, con la cual podamos entender fácilmente lo que el programa o código intenta realizar, para que de esta manera cuando otra persona Lea el código, pueda identificar fácilmente que e los que se intenta hacer. Esto normalmente se logra mediante el uso de aventación, espacios, comentarios, nombres de variables auto explicativas entre otras."
                },
                {
                    "type": "text",
                    "value": "Este proceso se traduce en archivos cada vez más grandes y con más líneas de código, que a la hora de leídas por un compilador o interpretador se vuelven completamente innecesarias, ya que el mismo no necesita el contexto del nombre de la variable, o los comentarios escritos por el programador, incluso cosas como los  espacios o nuevas líneas se vuelven completamente innecesarios, ya que los compiladores están hechos para ignorar este código. De esta manera un código podría estar representado o escrito en solo una línea, y esto aun así poder ser compilado o interpretado correctamente, haciendo que estos espacios en blanco sean completamente innecesarios."
                },
                {
                    "type": "text",
                    "value": "Si nosotros nos deshacemos de esta información la cual es a priori, inútil para el compilador, obtenemos un archivo equivalente al original, el cual consume menos espacio y desempeña la misma función. La minificacion de estos recursos se vuelve importante cuando entramos o encontramos esquemas de pago en la nube, donde se nos cobra por el ancho de banda usado, o  cuando queremos aumentar al máximo la carga de recursos en nuestra red, para aumentar la usabilidad y velocidad de repuesta de nuestros sitios web."
                },
                {
                    "type": "text",
                    "value": "Entre algunas de las ventajas de la minificacion de recursos podemos encontrar las siguientes:"
                },
                {
                    "type": "list",
                    "value": [
                        { "level": 0, "value": "Reducción del tiempo de carga de la página" },
                        { "level": 0, "value": "Menor consumo de ancho de banda de tu sitio web" },
                        { "level": 0, "value": "Menor tiempo de ejecución de los scripts" },
                        { "level": 0, "value": "Menos peticiones HTTP al servidor (y una carga menor)" },
                        { "level": 0, "value": "Protección contra robos (las versiones minificadas son complicadas de leer y robar para su reutilización)" },
                    ]
                },
                {
                    "type": "text",
                    "value": "Sin embargo, a pesar de que la minificacion como tal es un proceso que facilita la minificacion de estos recursos, ya que el proceso en si introduce una nueva variable al desarrollo del código, que puede fungir como punto de fallo. Principalmente porque el problema de minificar un código es un problema complejo. De la misa manera al minificar un código estas cambiando la estructura innata que le desarrollaste, por lo que, si ocurre un error en tu código, una vez lo has minificado y no lo has notada antes, es posible que depurar el error se vuelva una tarea titánica. De la misma manera la minificacion puede hacer que un código bien escrito, falle, ya que dentro del código pueden existir variables globales dependientes, las cuales al ser minificadas en un archivo ajeno al debido a que es una librería o dependencia, el proceso de minificacion puede interpretar mal el código y  minificar una variable que no debía, haciendo una referencia invalida. "
                },
                {
                    "type": "text",
                    "value": "A manera de resumen las desventajas de la minificacion son:"
                },
                {
                    "type": "list",
                    "value": [
                        { "level": 0, "value": "El proceso de minificación puede ser tedioso y requiere un conocimiento técnico." },
                        { "level": 0, "value": "Puede ser difícil de depurar y solucionar problemas en los archivos minificados." },
                        { "level": 0, "value": "Algunas veces los errores pueden ocurrir en la minificación, lo que puede afectar la funcionalidad del sitio web" },
                    ]
                },
                {
                    "type": "text",
                    "value": "En resumen, minificar los recursos de un sitio web puede mejorar la velocidad y la eficiencia, pero también puede presentar desafíos técnicos. Por lo tanto, es importante evaluar cuidadosamente si la minificación es adecuada para su sitio web y si se cuenta con los conocimientos técnicos para hacerlo de manera efectiva."
                }
            ]
        },
        {
            "question": `4. Write a python script (and explain each step with great technical detail) to (20 points) \n`,
            "subtitles": [
                "a. Create or update a record in the Students DynamoDB table based on the id.",
                "b. Find a record in the Students DynamoDB table by id.",
                "c. Delete a record in the Students DynamoDB table based on the id ",
            ],
            "content": [
                {
                    "type": "subtitle",
                    "value": "a. Create or update a record in the Students DynamoDB table based on the id."
                },
                {
                    "type": "text",
                    "value": "Supongamos que queremos insertar datos de un estudiante a una tabla que se encuentra en DynamoDB, donde la tabla se llama Students y la estructura de datos esta discretizada de la siguiente manera.  "
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign3/3.js"
                },
                {
                    "type": "text",
                    "value": "Primero crearemos una estructura de datos sobre la que que definiremos el estudiante a crear en nuestra base de datos de dyanamo db como se muestra a continuación"
                },
                {
                    "type": "json",
                    "value": "/assets/images/assign3/2.json"
                },
                {
                    "type": "text",
                    "value": "En este caso, a la hora de definir nuestra estrcutura dyanmoDB nos especifica que debemos definir que tipo de dato al cual la propiedad corresponde. Esto es debido a que dynamoDb es un tipo de base de datos  NoSQL. La especificación es necesaria ya que ayuda a DynamoDB a entender que tipo de datos estan siendo almacenados, ademas de ayudar a  indexar rapido los documentos o elementos para poder realizar busquedas rapidas. De la misma manera el especeficar el tipo de dato va a ser insertado ayuda a obtener o mantener consistencia."
                },
                {
                    "type": "text",
                    "value": "Para lograr esto mediante un JSON o diccionario dynamo db nos requere que insertemos los datos dentro de brackets en el cual la llave representara el tipo de dato, y el valor el valor especificado. Alguno de los valores que podemos leer se encuentran S para epecificar Strings, B para un valor binario, N para numero, M para dicccionarios, L para listas etc. Por mencionar algunos"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign3/1.py"
                },
                {
                    "type": "text",
                    "value": "Lo que produce como respuesta"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/1.png"
                },
                {
                    "type": "text",
                    "value": "Para modificar un registro en base a una id podemos podemos seguir el siguiente codigo"
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign3/2.py"
                },
                {
                    "type": "text",
                    "value": "Lo que produce como respuesta"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/2.png"
                },
                {
                    "type": "subtitle",
                    "value": "c. Find a record in the Students DynamoDB table by id."
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign3/3.py"
                },
                {
                    "type": "text",
                    "value": "Lo que produce como respuesta"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/3.png"
                },
                {
                    "type": "subtitle",
                    "value": "c. Delete a record in the Students DynamoDB table based on the id "
                },
                {
                    "type": "code",
                    "value": "/assets/images/assign3/4.py"
                },
                {
                    "type": "text",
                    "value": "Lo que produce como respuesta"
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/4.png"
                },
                {
                    "type": "text",
                    "value": "SI utilizamos el código especificado anteriormente para consultar un id, obtenemos la siguiente respuesta, donde podemos observar que hace falta la llave item, lo que significa que el elemento no existe en la base de datos dynamodb."
                },
                {
                    "type": "image",
                    "value": "/assets/images/assign3/5.png"
                },
            ]
        },
        {
            "question": "5. Explain the difference between Growth mindset and Fixed mindset according to Carol Dweck 10 points",
            "content": [
                {
                    "type": "text",
                    "value": "Un “Fixed Mindset” se refiere a una forma de pensar en la cual, el individuo cree que el conocimiento, habilidades y características de unas personas son “innatas”, y que estas están determinadas por el ADN de la personas, y que el mismo no se puede desarrollar, es decir piensan que uno nuca lograra aquello que la naturaleza no le dio desde el inicio. Este tipo de “MindSet”, sería un mindset de tipo conformista, es decir el individuo se conforma con lo que tiene, y no busca el realizar un verdadero progreso."
                },
                {
                    "type": "text",
                    "value": "Debido a lo anterior, las personas que tienen un mindset de este tipo tienden a escapar de los problemas, rendirse fácilmente, ver el esfuerzo como algo innecesario o sin sentido, ignoran la retroalimentación critica, debido a que piensan que es un ataque contra su persona, además de envidiar y sentirse lastimados o atacados por el progreso de otros."
                },
                {
                    "type": "text",
                    "value": "Este mindset tiende a ser problemático, porque limita le potencial innato de una persona y la vuelve conflictiva al sentirse atacada por el éxito de los demás. De la misma manera una característica remarcable de los mismos es que aquellos con un fixed mindset, buscan el aparentar ser inteligentes, mas no buscan serlo en realidad. Es como si de  alguna manera tuvieran miedo del éxito."
                },
                {
                    "type": "text",
                    "value": "Al contrario que en el caso anterior, un Growth Mindset, es una manera de pensar en la que se anhela el conocimiento, y por lo tanto se hace todo lo posible para llegar a el o alcanzar el éxito, Según palabras de la autora, un mindset de este estilo significa que la persona cree firmemente, que los talentos y la inteligencia son habilidades que pueden ser desarrollados mediante la experiencia."
                },
                {
                    "type": "text",
                    "value": "Esta manera de pensar resulta positiva para las personas ya que les permite buscar el conocimiento, y abrazar los errores. Al contrario de lo que hace el otro Mindset, este mindset busca enfrentarse a diferentes retos y aprender de ellos, desestimando ligeramente el resultado (éxito o fracasa), y enfocándose más en el proceso, y lo que se puede aprender del mismo. A menudo se les suele ver como duros trabajadores"
                },
                {
                    "type": "text",
                    "value": "Este tipo de mentalidad no tiene miedo del fracaso, y en lugar de verlo como un estrepitoso fallo, se ve como una oportunidad de aprendizaje lo cual le permite crecer personalmente, porque al analizar sus errores ellos pueden ir descubriendo la clave para el “éxito”."
                },
                {
                    "type": "text",
                    "value": "En lugar de buscar esconder las deficiencias de uno, este tipo de mentalidad busca el solucionarlas, a menudo ellos se preocupan más por sentirse bien consigo mismos, y buscan relacionarse con gente la cual los instara a retarse a sí mismos y les ayuden a poder crecer."
                },
                {
                    "type": "text",
                    "value": "Las personas con este tipo de mindset son valiosas porque ellas desarrollan sus habilidades para ser mejores que sí mismos, y no buscan superar a los demás, si no probarse a ellos mismos que pueden ser mejores, lo que resulta en que los mismos alcanzar objetivos más altos de los que los mismos pudieron haber imaginado."
                },
                {
                    "type": "text",
                    "value": "A manera de resumen podremos ver las diferencias principales de estas mentalidades en el siguiente cuadro comparativo :"
                },
                {
                    "type": "markdown",
                    "value": "/assets/images/assign3/1.md"
                }
            ]
        }
    ]
};
const exampleContent = {
    "question": "",
    "content": [
        {
            "type": "text",
            "value": ""
        },
        {
            "type": "image",
            "value": "/assets/images/assign"
        },
        {
            "type": "json",
            "value": "/assets/images/assign"
        },
        {
            "type": "list",
            "value": [
                { "level": 0, "value": "" },
                { "level": 0, "value": "" }
            ]
        }
    ]
};
//# sourceMappingURL=assign_3.js.map