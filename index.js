const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const animals = require('./Routes/animals');
const enviroments = require('./Routes/enviroment')

dotenv.config();
const dbConnectionString = process.env.DB_CONNECTION_STRING;


app.use(cors());
app.use(bodyParser.json());
app.use('/api/animals',animals)
app.use('/api/environments',enviroments)

mongoose.connect(
    dbConnectionString
    , {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=> console.log('Conexion a MongoDB exitosa'))
    .catch(err => console.error('No de pudo conectar con MongoDB', err))


app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000")
})