const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const ins = require('util').inspect;

app.use(cookieParser());


app.get('/', function(req, resp){
  let c = ins(req.cookies, {depth: Math.Infinity});
  console.log("Cookies: "+c);
  // http://expressjs.com/es/api.html#res.cookie
  resp.cookie('galleta', 'dsi1819');
  resp.end("Cookies: "+c);
});

app.get('/removeCookie', function(req, resp) {
  // http://expressjs.com/es/api.html#res.clearCookie
  let c = ins(req.cookies, {depth: Math.Infinity});
  console.log("Cookies: "+c);
  resp.clearCookie('galleta');
  let d = ins(req.cookies, {depth: Math.Infinity});
  resp.end(`Removed cookie.\nCookies before "${c}"\nCookies after "${d}"`);
});

app.listen(3000, () => console.log('listening on 3000'));
