const express = require('express');
const app = express();
const Usuario = require('../models/usuario');

app.get('/', function(req, res) {
    // res.send('Hello World')  Esto envia un html
    res.json('Hello World'); //Esto envia un JSON como respuesta a la peticion REST
});


app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

//Recibiendo informacion por body
app.post('/usuario', (req, res) => {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
});

//Recibiendo un aprametro id
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id: id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

module.exports = app;