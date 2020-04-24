//taryando la conexion para las consultas

const conexiondb = require('../../config/dbConexion');




module.exports = app => {

    //ejecutamos toada la fiuncion y le axisnamos una nombre
    const conexion = conexiondb();


    app.get('/', (req, res) => {

        conexion.query('SELECT * FROM noticias', (err, result) => {
            console.log(result);

            res.render('../views/noticias/noticias.ejs', {
                noticia: result
            })

        })
    })


    app.post('/noticias', (req, res) => {

        const { title, noticia } = req.body
        conexion.query('INSERT INTO noticias SET?', {
            title,
            noticia
        }, (err, result) => {
            res.redirect('/');
        })

    });








}