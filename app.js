var express = require('express');
var mongoose=require('mongoose');
var app=express()

//DB STUFF=========================================
mongoose.connect('mongodb://localhost/todo');

var taskSchema=mongoose.Schema({
    task: String
});

var todo=mongoose.model('tasks', taskSchema);
var db = mongoose.connection;

db.on('error', function(msg){
    console.log("Mongoose Error db todo" + msg);
});

db.once('open', function(){
    console.log("Mongoose connected to todo");
});

//DB STUFF=========================================

app.use('/', express.static('files'));
app.get('/todo/all', function(req, res){
    todo.find({}).exec(function(err, data))
    res.json(data);
});

app.listen(3000, function(){
    console.log("Express running on port: 3000");
});

