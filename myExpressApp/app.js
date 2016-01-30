var express = require('express');

var app = express();
var path = __dirname + '/views/';

app.use('/javascripts', express.static(__dirname + '/views/js'));
app.use('/stylesheets', express.static(__dirname + '/views/css'));
app.use('/images', express.static(__dirname + '/views/images'));

app.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});
 
app.get('/about', function(req, res) {
    res.sendFile(path + 'about.html');
});
 
app.get('/article', function(req, res) {
    res.sendFile(path + 'article.html');
});
 
app.get('/api', function(request, response) {
    response.send({name:"Raymond",age:40});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);