const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// Estan a la espera para ejecutarse cada vez que se haga una peticion
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
FUNCION DE PRUEBA

app.get('/', function(req, res) {
    // res.send('Hello World')  Esto envia un html
    res.json('Hello World'); //Esto envia un JSON como respuesta a la peticion REST
});
*/

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

//Recibiendo informacion por body
app.post('/usuario', (req, res) => {
    let body = req.body;
    res.json({
        persona: body
    });
})

//Recibiendo un aprametro id
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id: id
    });
})

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
})

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});