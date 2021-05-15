![logo UPM](https://raw.githubusercontent.com/laracabrera/AOS/master/tarea1/logo_upm.jpg)  TDW: REST API - Anales de la Ciencia
======================================

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Minimum PHP Version](https://img.shields.io/badge/php-%5E8.0-blue.svg)](http://php.net/)
[![Build Status](https://scrutinizer-ci.com/g/FJavierGil/ACiencia/badges/build.png?b=master&s=f78545ddddef6aed3696ab7470c1d48421cee9d1)](https://scrutinizer-ci.com/g/FJavierGil/ACiencia/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/FJavierGil/ACiencia/badges/quality-score.png?b=master&s=ced26a14a5730e2f1b084a9b32db4472b672b60b)](https://scrutinizer-ci.com/g/FJavierGil/ACiencia/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/FJavierGil/ACiencia/badges/coverage.png?b=master&s=342159ea031ef8672005fb2ccb05b3f1a91f0af1)](https://scrutinizer-ci.com/g/FJavierGil/ACiencia/?branch=master)

## 📝Memoria del proyecto

### 📋Instrucciones para desplegar el proyecto

Para el despliegue del proyecto se deberán seguir las intrucciones que se incluyen en el repositorio como un README.md.

A continuación se presentarán las credenciales necesarias para la configuración pertinente:

* Para `./.env.local`:
  -  `DATABASE_NAME`   = tdwdb
  -  `DATABASE_USER`   = tdwDB
  -  `DATABASE_PASSWD` = tdwDB
* Para  `./phpunit.xml`
  -  `DATABASE_NAME`   = tdwdb_test
  -  `DATABASE_USER`   = tdwDB
  -  `DATABASE_PASSWD` = tdwDB

Una vez que pueda desplegar el proyecto mediante la siguiente línea de comando: 

```
> php -S 127.0.0.1:8000 -t public
```

Tras esto debería abrirse una nueva pestaña con la ejecución de su proyecto,en caso de no ser así
vaya a su navegador y escriba en la barra de navegación [http://127.0.0.1:8000/][lh].

Deberá poder autenticarse en el apartado `Authorize 🔓` con las siguientes credenciales:
* `username` => adminUser
* `password` => *adminUser*

> ⚠️ NOTA: Obviamente para el despliegue correcto del proyecto se debe hacer uso de xampp y haber seguido los pasos de manera correcta siguiendo el README.md
  

###  🎯Características fundamentales del trabajo

Para la realización de este trabajo se busco en primera instancia realizar la parte relacionada con la especificación de 
referente a `Persons` y `Entities` , para ello reutilizamos la especificación de `Products` que era muy similar,y con unos ajustes,esta parte ya quedaría terminada.
Una vez revisado todo,y cerrada esa parte procedemos a completar los datos que manejarán los controladores y que enviarán a las rutas previamente definidas por el profesor.
Para no hacer la explicación muy extensa, en los puntos claves que debemos fijarnos es con que método HTTP estamos tratando
por ejemplo si es un `GET` para mostrar todos los `products/entities/persons` no necesitamos ningún tipo de parámetro.Sin embargo,si queremos consultar un sólo elemento de estas
estructuras se debe pasar un parámetro que haga referencia a el `ID`, lo mismo para comprobar si existe alguno de estos o simplemente para modificarle. 

Posteriormente, cuando ya se ha finalizado el completado de los controladores se deberá comprobar que todos y cada uno de los tests que se nos han proporcionado pasan correctamente.
Finalmente, ahora podremos ver como funciona nuestra API, la ejecutamos y podremos jugar con cada uno de los *métodos HTTP*, es decir, si queremos realizar un CRUD sobre `product/entity/person` 
o por el contrario ver todos `products/entities/persons` mediante un `GET` o establecer relaciones entre ellos.Por otro lado, hay métodos HTTP que requerirán Id's u otros parámetros como `personname/productname/entityname` 
como es el caso de que queramos consultar la existencia de un `product/entity/person` o borrarles.
en concreto.

> ❗ Para realizar estos procedimientos se debe estar autenticado.


>❗❗❗❗ No se si previamente había datos cargados en la API,pero lo cierto es que si había no sé por qué razón no se me cargaron.No obstante a ello, la API funciona correctamente.


[dataMapper]: http://martinfowler.com/eaaCatalog/dataMapper.html
[doctrine]: http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/
[dotenv]: https://packagist.org/packages/vlucas/phpdotenv
[infection]: https://infection.github.io/guide/
[jwt]: https://jwt.io/
[lh]: http://127.0.0.1:8000/
[monolog]: https://github.com/Seldaek/monolog
[openapi]: https://www.openapis.org/
[phpunit]: http://phpunit.de/manual/current/en/index.html
[rest]: http://www.restapitutorial.com/
[slim]: https://www.slimframework.com/ 
[swagger]: http://swagger.io/
[yaml]: https://yaml.org/
[12factor]: https://www.12factor.net/es/
