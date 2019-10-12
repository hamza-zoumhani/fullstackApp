var mongoose=require('mongoose');

var taskSchema=mongoose.Schema({
    task: String
});

var todo = mongoose.model('tasks', taskSchema);

module.exports = todo;