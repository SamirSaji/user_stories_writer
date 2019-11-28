var express = require('express');
var app = express();
app.use('/public', express.static('public'));
// app.use( express.static( "public" ) );
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/index', function(req, res) {
	res.render('index');
});

 
app.listen(8080);
console.log('ok im running');






