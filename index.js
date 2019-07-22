const express = require('express');
const mongooose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config({ path: './variables.env'});

mongooose.connect(process.env.DATABASE);
mongooose.connection.on('error', function(error){
    console.log('Error de mongoose', error);
});


require('./Schemas/persona');
const modelopersona = mongooose.model('persona');

app.get('/', function(req,res){
    res.send('http://localhost:2000/nueva-persona')
});

app.get('/nueva-persona', function(req,res){
    const mipersona = new modelopersona({
        name:'Daniel',
        username:'Big_Iron',
        email:'Daniel@example.com',
        pasword:'794613',
        age: 41
    });
    mipersona.save().then(function(){
        res.send('persona guardada');
    });
});


app.listen(2000,function(){
    console.log('Aplication escuchando en http:/localhost:2000');
});

app.get('/personas/Daniel', function(req,res){
    const search = {
        username: req.query.name
    };
    modelopersona.find(search).then(function(users){
        res.send(users);
    });
});