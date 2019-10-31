var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes');
var pdf = require('express-pdf')
var path = require('path');

//when i'm conneting to remote database
mongoose.connect('mongodb://admin:admin1234%2A%2A@cluster0-shard-00-00-xbnnw.mongodb.net:27017,cluster0-shard-00-01-xbnnw.mongodb.net:27017,cluster0-shard-00-02-xbnnw.mongodb.net:27017/kassApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true }).then(() =>{
  console.log('connected to database 4');
})
.catch(() => {
  console.log('could not connect to database :(');
});


//trying to mamke changes
// mongoose.connect('mongodb://localhost:27017/Kassi', { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{
//   console.log('connected to database');
// })
// .catch(() => {
//   console.log('could not connect to database :(');
// });
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use('/api', router);
app.use(express.static(path.join(__dirname, "public")));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
})
app.use(pdf);




module.exports = app;
