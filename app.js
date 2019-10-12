var express = require('express');
var app=express()
var routerTodo = require('./routes/todo');
var port=3000;

app.use('/', express.static('client'));
app.use('/todo', routerTodo);

app.listen(3000, function(){
    console.log("Express running on port: " + port);
});