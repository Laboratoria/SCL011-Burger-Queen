Burger Queen
Índice
1. Preámbulo
2. Resumen del proyecto
3. Objetivos de aprendizaje
4. Consideraciones generales
5. Criterios de aceptación mínimos del proyecto
6. Pistas, tips y lecturas complementarias
1. Preámbulo
React y Angular son algunos de los frameworks y librerías de JavaScript más utilizados por lxs desarrolladorxs alrededor del mundo, y hay una razón para eso. En el contexto del navegador, mantener la interfaz sincronizada con el estado es difícil. Al elegir un framework o librería para nuestra interfaz, nos apoyamos en una serie de convenciones e implementaciones probadas y documentadas para resolver un problema común a toda interfaz web. Esto nos permite concentrarnos mejor (dedicar más tiempo) en las caractrísticas específicas de nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una arquitectura, una serie de principios de diseño, un paradigma, unas abstracciones, un vocabulario, una comunidad, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte de gran ayuda para implementar rápidamente características de los proyectos en los que trabajes.

2. Resumen del proyecto
Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes) hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente (a través de un backend del que nos darán detalles más adelante).

burger-queen

Esta es la información que tenemos del cliente:

Somos Burguer Queen, una cadena de comida 24hrs.

Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de nuestros clientes.

Tenemos 2 menús: uno muy sencillo para el desayuno:

Ítem	Precio $
Café americano	500
Café con leche	700
Sandwich de jamón y queso	1000
Jugo de frutas natural	700
Y otro menú para el resto del día:

Ítem	Precio
Hamburguesas	$
Hamburguesa simple	1000
Hamburguesa doble	1500
Acompañamientos	$
Papas fritas	500
Aros de cebolla	500
Para tomar	$
Agua 500ml	500
Agua 750ml	700
Bebida/gaseosa 500ml	700
Bebida/gaseosa 750ml	1000
Importante: Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana. Además, por $ 100 adicional, pueden agregarle queso o huevo.

Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno con todos sus productos. El usuario debe poder ir eligiendo qué productos agregar y la interfaz debe ir mostrando el resumen del pedido con el costo total.

out

3. Objetivos de aprendizaje
El objetivo principal de es aprender a construir una interfaz web usando el framework elegido (React o Angular). Todos estos frameworks de Front-end atacan el mismo problema: cómo mantener la interfaz y el estado sincronizados. Así que esta experiencia espera familiarizarte con el concepto de estado de pantalla, y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un producto a un pedido, la interfaz debe actualizar la lista del pedido y el total).

Como objetivo secundario, deberás seguir las recomendaciones para PWAs (Progressive Web Apps), lo cual incluye conceptos como offline. Para guiarte con respecto a este tema te recomendamos usar Lighthouse, que es una herramienta de Google que nos ayuda a asegurar que nuestras web apps sigan "buenas prácticas". De hecho, usaremos Lighthouse a la hora de evaluar el proyecto.

Finalmente, la interfaz debe estar diseñada específicamente para correr en tablets.

Tópicos: react, angular, pwa, offline-first, service-worker.

4. Consideraciones generales
Este proyecto se debe "resolver" en grupo de 3 estudiantes.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6+), HTML y CSS y empaquetada de manera automatizada. En este proyecto Sí está permitido usar librerías o frameworks (debes elegir entre React o Angular).

La aplicación debe ser un Single Page App. Los pedidos los tomaremos desde una tablet, pero no queremos una app nativa, sino una web app que sea responsive y pueda funcionar offline.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos, el tamaño y aspecto de los botones, la visibilidad del estado actual del pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de npm-scripts y contar con scripts start, test, build y deploy, que se encarguen de arrancar, correr las pruebas, empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions, lines y branches.

Este proyecto incluye un boilerplate con el código necesario para arrancar con la parte de backend ya resuelta. El boilerplate incluye los siguientes archivos/carpetas con la configuración de Fierbase (hosting, firestore y functions):

./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md
Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás definir la estructura de carpetas y archivos que consideres necesaria. Puedes guiarte de las convenciones del framework elegido. Por ende, los tests y el setup necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

5. Criterios de aceptación mínimos del proyecto
Definición del producto
El Product Owner nos presenta este backlog que es el resultado de su trabajo con el cliente hasta hoy.

[Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente
Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

Criterios de aceptación
Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

Anotar nombre de cliente.
Agregar productos al pedido.
Eliminar productos.
Ver resumen y el total de la compra.
Enviar pedido a cocina (guardar en alguna base de datos).
Se ve y funciona bien en una tablet
Definición de terminado
Lo acordado que debe ocurrir para decir que la historia está terminada.

Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).
[Historia de usuario 2] Jefe de cocina debe ver los pedidos
Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.

Criterios de aceptación
Ver los pedidos ordenados según se van haciendo.
Marcar los pedidos que se han preparado y están listos para servirse.
Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.
Definición de terminado
Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).
[Historia de usuario 3] Meserx debe ver pedidos listos para servir
Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.

Criterios de aceptación
Ver listado de pedido listos para servir.
Marcar pedidos que han sido entregados.
Definición de terminado
Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).
Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para poder tener estadísticas en el futuro.
6. Pistas, tips y lecturas complementarias
Primeros pasos
El primer paso de este proyecto debe ser convertir el menú descrito por el cliente en una estructura que podamos poner en un archivo JSON para después pintar en la pantalla

Haz un fork de este repo (en GitHub).

Clona tu fork en tu computadora:

git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
cd <cohortid>-burger-queen
Crea una rama a partir de master para empezar a trabajar. Por ejemplo:

git checkout -b develop
Crear proyecto en Firebase

Habilitar Firestore (comenzar en modo bloqueado) en sección de "Bases de Datos" de Firebase console.

Instalar utilidad de línea de comando de Firebase:

npm i -g firebase-tools
Agregamos entorno de producción para desplegar:

firebase use --add
Instalar dependencias de cloud functions:

# usando yarn
cd functions && yarn && cd ..
# alternativamente, usando npm
cd functions && npm install && cd ..
Desplegar: firebase deploy

Llegado a este punto ya puedes comenzar con el front-end 😉

Nota para estudiantes que elijan React y quieran usar create-react-app:

Si tratas de usar create-react-app en el directorio del proyecto recibirás un error diciendo que hay archivos que podrían presentar un conflicto. Para evitar este problema puedes crear una nueva app usando create-react-app y de ahí mezclarla con la carpeta del proyecto:

# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
Otros recursos
Frameworks / libraries
React
Angular
Herramientas
npm-scripts
Babel
webpack
PWA
Tu primera Progressive Web App - Google developers
Progressive Web Apps - codigofacilito.com
offlinefirst.org
Usando Service Workers - MDN
Cómo habilitar datos sin conexión - Firebase Docs
Serverless
Qué es eso de serverless? - @PamRucinque en Medium
Qué es Serverless? | FooBar - YouTube
Firebase
Serverless Architectures - Martin Fowler
Cloud functions
Cloud functions - Firebase Docs