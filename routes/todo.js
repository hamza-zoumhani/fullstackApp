var express = require ('express');
var mongoose = require('mongoose');
var router = express.Router();
var todo = require('../models/todo');

router.use(express.json()):
mongoose.connect('mongodb://localhost/todo');

var db = mongoose.connection;

db.on('error', function(msg){
    console.log("Mongoose Error db todo" + msg);
});

db.once('open', function(){
    console.log("Mongoose connected to todo");
});


router.get('/all', function(req, res){
    todo.find({}).exec(function(err, data){
    res.json(data);
    });
});

router.post('/add', function(req, res){
    console.log(req.body);
    var newTask= new todo(req.body);
    newTask.save(function(err, results){
        if(err){
            console.log("Error trying to save document"+ req.body);
            res.status(404);
        } else{
            res.status(201).json({status:"Task Added"});
        }
    });
});

module.exports = router;
