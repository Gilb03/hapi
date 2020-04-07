var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api', 
{ useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');


