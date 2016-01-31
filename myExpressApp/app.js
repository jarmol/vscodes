var express = require('express');

var app = express();
var hbs = require('hbs');
var blogEngine = require('./blog');

app.set('view engine', 'html');
app.engine('html', hbs.__express);

// var path = __dirname + '/views/';
// render knows default folder view, thus
// path is not needed

app.use('/javascripts', express.static(__dirname + '/views/js'));
app.use('/stylesheets', express.static(__dirname + '/views/css'));
app.use('/images', express.static(__dirname + '/views/images'));

app.get('/', function(req, res) {
   var x = blogEngine.getBlogEntries();

   var otext = "<h1>Articles</h1>";
   for (var i = 0; i < 6; i++) {
    otext += "Id: " + x[i].id + ", Title: " + x[i].title + "<br>";
   }
   var foot = '<p><a href="/">Home</a> ~ <a href="/about">About Me</a> ~ <a href="/article">Some Article</a></p>';
   res.send(otext + foot);
});
 
app.get('/about', function(req, res) {
    res.render('about', {title: "About this project"});
});
 
app.get('/article', function(req, res) {
    // var entry = blogEngine.getBlogEntry(req.params.id);
    // res.render('article',{title:entry.title, blog:entry});
    var x = blogEngine.getBlogEntries();
    res.send(x[0]);
});
 
app.get('/api', function(request, response) {
    response.send({name:"Raymond",age:40});
})

app.listen(3000, function() {console.log('Listen port 3000');} )