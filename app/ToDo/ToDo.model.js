var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  content: String
});

module.exports = mongoose.model('ToDo', ToDoSchema);