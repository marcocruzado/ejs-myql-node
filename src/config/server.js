const express = require('express');
const path = require('path');
const bp = require('body-parser');

//ejecucuon de exprress
const app = express();


//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views')); //vistas a renderizAR

//middleawares

app.use(bp.urlencoded({ extended: false }));
app.use(express.json())


//rutas



//archivos estaticos





//export
module.exports = app;