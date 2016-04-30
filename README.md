
# PepsCards App
Aplicacion sencilla utilizando el starter kit: [https://github.com/AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

### Guia Rapida
**Necesitas una version superior a Node 4.0 y NPM superior o igual a 3**
> Clona/Descarga el repo [`https://github.com/silvercrow/pepscards`](https://github.com/silvercrow/pepscards)

```bash
# Clonando el proyecto PepsCards
git clone https://github.com/silvercrow/pepscards.git

# ir al directorio del repo
cd pepscards

# añadiendo librerias globales requeridas
npm install typings webpack-dev-server rimraf webpack -g

# instalando el repo con npm
npm install

# cargando el server
npm start

# usando Hot Module Replacement
npm run server:dev:hmr

```

Apunta tu navegador a : [http://0.0.0.0:8080](http://0.0.0.0:8080) o [http://localhost:8080](http://localhost:8080)

## Guia Paso a Paso Proyecto PepsCards
**Instrucciones a seguir para realizar este proyecto basado en angular2-webpack-starter**

```bash
# Clonando angular2-webpack-starter
git clone https://github.com/AngularClass/angular2-webpack-starter.git PepsCards

# Re-inicializando nuestra app
cd pepscards
rm -rf .git
rm README.md
echo "# PepsCards App " >> README.md
git init
git add .
git commit -m 'Inicializando nuestro projecto PepsCards'  

# Añadiendo el Projecto a github
# visita : [https://github.com/new](https://github.com/new) y crea un nuevo repositorio : pepscards
# reemplaza [silvercrow] con tu usuario
git remote add origin https://github.com/silvercrow/pepscards.git
# push del repositorio a master
git push -u origin master

```
**Continua la Guia basandote en los commits del repo**
[`https://github.com/silvercrow/pepscards/commits/master`](https://github.com/silvercrow/pepscards/commits/master)
