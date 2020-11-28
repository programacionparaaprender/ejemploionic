## google  maps ionic
https://medium.com/@gamiparesh5/agm-angular-google-map-in-ionic-4-bc97bcc9421f
 npm install --save @agm/core@1.1.0
$ ionic generate page geocerca-google

-----------------
Corrección de errores
--------------------
[ERROR] ionic-app-scripts has unexpectedly closed (exit code 1).
https://stackoverflow.com/questions/51569546/ionic-a-utility-cli-has-unexpectedly-closed

Paquetes a instalar
------------------------------
sudo apt install npm

en caso de tener una versión node no actualizada
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/node
sudo n latest

sudo npm install -g cordova
sudo npm install -g cordova ionic

----------------
Start an App
-----------------
--------------
creación del proyecto
ionic start ejemploionic tabs

para ejecutar
ionic serve

ver lo instalado
npm list -g

visualizar la aplicación entre diferentes plataformas moviles
ionic serve --lab

los tags de las plantillas ionic
ion-header
ion-content
ion-list
ion-list-header
ion-item
ion-button

Examples
$ ionic generate 
$ ionic generate component
$ ionic generate directive
$ ionic generate page
$ ionic generate pipe
$ ionic generate provider
$ ionic generate tabs
$ ionic generate component foo
$ ionic generate page Login
$ ionic generate page Detail --no-module
$ ionic generate page About --constants
$ ionic generate pipe MyFilterPipe

--------------------------
Iteración 0.0: Configurar Sublime Text 3
---------------------------------------

https://packagecontrol.io/installation
ctrl+shift+p y luego package control: install package
luego seleccionamos emmet css

-------------------
--------------------
Iteración 0.1: Creación del proyecto
-------------------
--------------------

ionic start ejemploionic tabs
? Would you like to integrate your new app with Cordova to target native iOS anY
d Android? (y/N)
Y
Install the free Ionic Pro SDK and connect your app? (Y/n) Y


--------------------
---------------------
Iteración 1: config.xml Edición
--------------------
--------------------
Información de la aplicación
como nombre

ionic serve --lab

ion-header
ion-content

colocar en español las plantillas
.ts significa type script

dentro de cada carpeta de página
el .scss es el encargado de los estilos

variable.scss son los estilos globales

--------------------
---------------------
Iteración 2: Crear una nueva página
--------------------
--------------------
ionic generate page youtube
editar tabs.ts agregar nuevos parametros
editar app.module.ts agregar nuevos parametros


--------------------
---------------------
Iteración 3: Agregando imagenes
--------------------
--------------------
ion-content
ion-card
img src="img/logo.png"
ion-card-content

--------------------
---------------------
Iteración 4: Listas y *ngFor para crearlas dinámicamente
--------------------
--------------------
forma estatica
ion-card
ion-card-header
	    Header
ion-card-header
ion-card-content
	    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.
ion-card-content
ion-list
button ion-item

--------------------
---------------------
Iteración 5: Enlazar a otras páginas con NavController
--------------------
--------------------
ionic generate page masinfo
editar app/app.module.ts agregar nuevos parametros
home.html
<button ion-button (click)="otraPagina()">A otra página</button>
home.ts
import { MasinfoPage } from '../masinfo/masinfo';
 otraPagina(){
  	this.navCtrl.push(MasinfoPage);
  }

--------------------
---------------------
Iteración 6: Creando listas dinámicas con Navigation
--------------------
--------------------
contact.html
contact.ts
masinfo.html
masinfo.ts

--------------------
---------------------
Iteración 7: Grid
--------------------
--------------------
Maximo son 12 columnas
<ion-col col-1> se puede poner
<ion-col class="caja" col-md-6>
<ion-col class="caja" col-auto> se ajusta al tamaño del texto

--------------------
---------------------
Iteración 8: Alertas
--------------------
--------------------
https://ionicframework.com/docs/components/#alert-confirm
https://github.com/ionic-team/ionic-preview-app/tree/master/src/pages/alerts
home.html
home.ts

--------------------
---------------------
Iteración 9: Conexión con API REST
--------------------
--------------------
https://www.youtube.com/watch?v=PrwwGuwq44g&index=18&list=PLPl81lqbj-4IzylAHYigeNB_Pob2WGGEG
https://jsonplaceholder.typicode.com/
aquí se almacena un json users
https://jsonplaceholder.typicode.com/users

ionic g provider proveedor1
about.html
about.ts


--------------------
---------------------
Iteración 10: Generar APK
--------------------
--------------------
    $ ionic cordova platform
    $ ionic cordova platform add ios
    $ ionic cordova platform add android
    $ ionic cordova platform rm ios


ionic cordova platform rm android

ionic platform add ios
ionic build ios
ionic emulate ios

usar telemetry on
- cordova telemetry on 
- cordova telemetry off
- cordova build --no-telemetry

ionic cordova platform add android@~7.0.0
ionic cordova build android@~7.0.0

ionic cordova plugin rm cordova-plugin-console
ionic cordova build --release android@~7.0.0
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk


 ionic cordova run android --emulator













