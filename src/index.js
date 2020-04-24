const app = require('./config/server');


require('./app/routes/notoicias')(app);




//iniciando el sevidor

app.listen(app.get('port'), () => {
    console.log("el servidor esta en el puerto ", app.get('port'));
})