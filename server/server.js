// Esto es para ejecutarlo en heroku
require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Estan a la espera para ejecutarse cada vez que se haga una peticion
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/usuario')); //Aqui exportamos los metodos que refactorizamos en el usuarios.js para poder usarlos aqui

/* LOCAL
app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});
*/

//Conexion a mongo local
//mongodb://localhost:0000/my_database
mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) {
        throw err;
    }
    console.log('Base de Datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});