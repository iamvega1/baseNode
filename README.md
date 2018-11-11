Base
=========

Descripcion del proyecto
------------------------

Proyecto base: Utilizando la tecnologia Node JS y la Base de Datos Mongo DB.

## Configuración

# Arrancar docker

## Correr en produccion

1.- Cambiar el comando en docker y docker-compose
```
CMD ["node", "server.js"]
command: node server.js
```
**Listo ya podemos sacarlo a producción.**

## Correr en desarrollo
1.- Cambiar el comando en docker y docker-compose
```
CMD ["npm", "start"]
command: npm start
```
2.- Levantar docker ``` docker-compose up ```
3.- Agregar al package.json las dependecias de desarrollo
```
  "devDependencies": {
    "babel-preset-es2015": "^6.14.0",
    "browser-sync": "^2.14.3",
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2",
    "gulp-imagemin": "^3.0.3",
    "gulp-sass": "^2.3.2",
    "gulp-svgmin": "^1.2.2",
    "gulp-concat": "^2.6.0",
    "gulp-autoprefixer": "^3.1.1",
    "onchange": "^3.0.0",
    "parallelshell": "^2.0.0",
    "imagemin-pngquant": "^5.0.0",
    "supervisor": "^0.11.0"
  }
```
4.- Despues en otra terminal dentro de la carpeta application ejecutamos
```
npm i
npm run watch:dev
```
### Ya podemos seguir desarrollando

### Autor
**[Luis Vega](https://github.com/iamvega1)**
