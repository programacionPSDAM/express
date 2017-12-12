var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hola Mundo');
});

app.get('/users/:id', function(req, res){
  var id = req.params.id;
  console.log('Recibido: ' + id);
  res.send('Recibido: ' + id);
});


app.post('/users/', function(req, res){
  console.log('Entrando en el post');
  var id = req.body.id;
  console.log('Recibido: ' + id);
  res.send('Recibido: ' + id);
});

var server = app.listen(3000, function(){
  console.log('Servidor corriendo en el puerto 3000');
});
