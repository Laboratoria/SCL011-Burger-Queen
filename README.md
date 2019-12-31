![enter image description here](https://i.ibb.co/CnQMK42/Logo.png)

Índice

## **Índice**

- [1- Resumen del proyecto](#Resumen-del-proyecto)
- [2-Objetivos de la Aplicación](#objetivos-de-la-aplicacion)
- [3-Historias de Usuario](#Historias-de-Usuario)
- [4-Flujo](#Flujo)
- [5-Entrevista](#Encuesta-online)
- [6-Prototipos](#prototipos)
- [6.1-Prototipo de baja fidelidad](#prototipo-de-baja-fidelidad)
- [6.2-Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
- [7-Tests de usabilidad](#tests-de-usabilidad)
- [8-Guía de estilos](#Guia-de-estilos)
- [9-Pruebas unitarias](#Pruebas-unitarias)
- [10-Futuras Mejoras](#futuras-mejoras)
- [11-Planificación](#Planificación)
- [12-Herramientas](#Herramientas)
- [13-Checklist obligatorio](#checklist-obligatorio)

1. Resumen del proyecto
   Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes) hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente (a través de un backend del que nos darán detalles más adelante).

burger-queen

Esta es la información que tenemos del cliente:

Somos Burguer Queen, una cadena de comida 24hrs.

Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de nuestros clientes.

Tenemos 2 menús: uno muy sencillo para el desayuno:

Ítem Precio \$
Café americano 500
Café con leche 700
Sandwich de jamón y queso 1000
Jugo de frutas natural 700
Y otro menú para el resto del día:

Ítem Precio
Hamburguesas $
Hamburguesa simple	1000
Hamburguesa doble	1500
Acompañamientos	$
Papas fritas 500
Aros de cebolla 500
Para tomar $
Agua 500ml	500
Agua 750ml	700
Bebida/gaseosa 500ml	700
Bebida/gaseosa 750ml	1000
Importante: Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana. Además, por $ 100 adicional, pueden agregarle queso o huevo.

Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno con todos sus productos. El usuario debe poder ir eligiendo qué productos agregar y la interfaz debe ir mostrando el resumen del pedido con el costo total.

2. Objetivos
   Construir una interfaz web usando React, diseñada para tablet. Ademas debe ser Progressive Web Apps y debe debe aplicarse Ligthouse

## Historias de Usuarios

**Definición del producto**
El Product Owner nos presenta este backlog que es el resultado de su trabajo con el cliente hasta hoy.

**[Historia de usuario 1]** Mesero/a debe poder tomar pedido de cliente
Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

**Criterios de aceptación** (Lo que debe ocurrir para que se satisfagan las necesidades del usuario)
Anotar nombre de cliente.
Agregar productos al pedido.
Eliminar productos.
Ver resumen y el total de la compra.
Enviar pedido a cocina (guardar en alguna base de datos).
Se ve y funciona bien en una tablet

**Definición de terminado** (Lo acordado que debe ocurrir para decir que la historia está terminada.)
Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).

**[Historia de usuario 2]** Jefe de cocina debe ver los pedidos
Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.

**Criterios de aceptación**
Ver los pedidos ordenados según se van haciendo.
Marcar los pedidos que se han preparado y están listos para servirse.
Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.
Definición de terminado
Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).

**[Historia de usuario 3]** Meserx debe ver pedidos listos para servir
Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.

**Criterios de aceptación**
Ver listado de pedido listos para servir.
Marcar pedidos que han sido entregados.

**Definición de terminado**
Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).
Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para poder tener estadísticas en el futuro.


## Flujo

![Flujo](https://raw.githubusercontent.com/mariaPazBeltran/SCL011-Burger-Queen/master/src/assets/img/flujo.PNG)

## Entrevista

Se realizo una entrevista a Jennifer Andrade, encargada de local de Tío Manolo, Florida. Debido a la similitud del servicio que presta esta entidad con la de nuestra Aplicación Burguer-Queen.

La entrevista se mezclo con técnicas de card sorting puesto que entre los elementos que queríamos definir se encontraban la arquitectura de la aplicación, la cual debía reflejar los requerimientos del potencial usuario de esta. El cual se define como la persona que entre sus responsabilidades esta atender a los clientes que acuden a su local.

[Audio](https://trello.com/c/MuwmXYfO/13-entrevista-ux)

Resultados:

! [Arquitectura]("https://i.ibb.co/wsrNQQr/Arquitectura.jpg")


Dentro de las observaciones, se destacan los siguientes puntos.

-Debería contemplar por separado los ingredientes de un sándwich puesto que a veces los clientes quieren con o sin lechuga, tomate etc. Lo mismo ocurre con las papas y los aros de cebolla a veces piden con o sin sal.

-Una vez realizado el pedido debería existir la opción de revisar y confirmar el pedido antes de ser enviado a la cocina

-una vez terminado el pedido al final del detalle debería existir la opción de diferente formas de pago, ya que actualmente es muy poco el porcentaje de personas que pagan en efectivo. Por ende se debieran contemplar las siguientes opciones:

-Efectivo

-Debito

-Crédito

-Cheque Restorán

## Guia-de-estilos

![enter image description here](https://i.ibb.co/BcFy5XF/Paletade-Colores-Burguer-Queen.png)

## Prototipo de alta fidelidad

[Figma](https://www.figma.com/file/LELmcuygbOhs6mNGyhBRlG/BurguerQueen?node-id=0:1)
![Inicio](https://i.ibb.co/n6qL0fx/1.png)
![Menu](https://i.ibb.co/0rCLwHm/2.png)
![Desayuno](https://i.ibb.co/4tNT9Nx/3.png)
![Almuerzo](https://i.ibb.co/ngj8VH0/4.png)
![Cocina](https://i.ibb.co/qBTCrRW/5.png)

## Planificación

[Trello](https://trello.com/b/qVVNX6pC/burguer-queen)

[Github](https://github.com/NataliaSaavedraM/SCL011-Burger-Queen/projects/1)


## checklist obligatorio

**Planificación e Investigación**

- [x] Hace una planificación inicial y el product backlog
- [x] Revisa y actualiza planificación a medida que se desarrolla el proyecto
- [x] Realiza historias de usuario
- [x] Prioriza el desarrollo en cuanto a historias de usuario
- [x] Realiza entrevistas a usuari@s de la aplicación
- [x] Itera la planificación/historias de usuario en base al resultado de las entrevistas
- [] Realiza testeo de usabilidad de la aplicación
- [] Itera en base al testeo de usabilidad de la app

**Interfaz**

- [x] Es mobile first y enfocado en tablets
- [ ] Es responsive
- [x] Sigue alineamientos de diseño visual

**Lógica **

- [x] Utiliza reglas de ESlint (ES6+) para su framework

** Es Single Page App**

- [x] Usa funciones pequeñas con una sola responsabilidad
- [x] Divide su código en módulos (componentes)
- [x] Mantiene la interfaz y el estado de la app sincronizados
- [x] React: Trabaja con estados; Angular: Trabaja con servicios (observables)
- [x] Comenta el código y no hay código muerto
- [x] Son los nombres de variables y funciones claros, descriptivos y en inglés

**Base de datos y despliegue **

- [ ] Autentica usuari@s
- [x] Guarda información
- [x] Lee información
- [x] Guarda archivos, como imagenes, en Firebase Storage u otro servicio de almacenamiento
- [x] La app está desplegada y se puede acceder desde cualquier dispositivo

** Progressive Web App **

- [ ] Funciona offline
- [x] Utiliza Lighthouse para auditar la app

** Testing **

- [ ] Realiza tests unitarios
- [ ] Ocupa herramientas como Jest, Enzyme, Jasmine o Karma (u otro)
- [ ] Tiene un 70% de coverage

** GIT **

- [x] Hace commits con propósito claro y pequeños
- [x] Usa ramas de desarrollo o feature
- [x] Hay pull requests con intención clara, una característica en particular para cada uno
- [x] Usa tags en su repositorio
- [x] Usa issues para reportar bugs o cosas por hacer

