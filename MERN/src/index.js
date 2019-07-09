const express=require('express');
const morgan= require('morgan');
const path = require('path');
const app =express();
const {mongoose} =require ('./database');
//settings
app.set('port',process.env.Port|| 3000);
//middleware
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/tasks',require('./routes/task.routes'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Iniciando Servidor

app.listen(app.get('port'),()=>{
    console.log(`Se ejecuta el servidor ${app.get('port')}`);
});