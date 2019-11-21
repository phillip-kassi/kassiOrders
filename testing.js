var express = require("express");

var app = express();

var router = express.Router();


router.get('/home', (req, res, next) => {
  res.send("yesyes");
})

app.use(router);
// server.listen(20001);

app.listen(30001, (cool, bad) =>{
  console.log('this is the best');
});
