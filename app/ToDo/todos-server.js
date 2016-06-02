var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todos = require('./ToDo.model');
var cfenv = require("cfenv");

//var port = 3000;
port = process.env.PORT || 3000;
//var db = 'mongodb://localhost/example'
//mongoose.connect(db);

//get our Org's mLab URL from cfenv
//if it returns null, then connect to local MongoDB
var appEnv = cfenv.getAppEnv();
var mongoLabUrl = appEnv.getServiceURL('naily-mLab');
if (mongoLabUrl == null) {
  //local or prod development
  mongoose.connect('mongodb://localhost/example');
} else {
  //cloud foundry
  mongoose.connect(mongoLabUrl);
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + "/client"));

/*app.get('/', function(req, res) {
  res.send('Hello World!');
});*/


app.get('/todos', function(req, res) {
  console.log('getting all todo items');
  todos.find({})
    .exec(function(err, todos) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(todos);
        res.json(todos);
      }
    });
});

app.post('/add-todo', function(req, res) {
  var newtodo = new todos();

  newtodo.content = req.body.content;

  newtodo.save(function(err, todo) {
    if(err) {
      res.send('error saving todo item');
    } else {
      console.log(todo);
      res.redirect("/index.html");
    }
  });
});


app.listen(port, function() {
  console.log('app listening on port ' + port);
});