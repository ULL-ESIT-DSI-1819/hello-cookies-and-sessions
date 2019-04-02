const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());


app.get('/', function(req, resp){
  // http://expressjs.com/es/api.html#res.cookie
  resp.cookie('galleta', 'dsi1819');
  resp.end("Hi!");
});

app.get('/removeCookie', function(req, resp) {
  // http://expressjs.com/es/api.html#res.clearCookie
  resp.clearCookie('galleta');
  resp.end('Removed cookie "galleta"');
});

app.listen(3000, () => console.log('listening on 3000'));
