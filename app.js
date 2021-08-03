var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes');
var pdf = require('express-pdf')
var path = require('path');
var User = require('./models/user');
var multer = require('multer');

//when i'm conneting to a remote database
//mongodb://<username>:<password>@cluster0-shard-00-00.xbnnw.mongodb.net:27017,cluster0-shard-00-01.xbnnw.mongodb.net:27017,cluster0-shard-00-02.xbnnw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect('mongodb+srv://Phillip:Dopeboi234%2A%2A@cluster0.xbnnw.mongodb.net/kassApp?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true }).then(() =>{
  console.log('connected to database 4');
})
.catch((e) => {
  console.log('could not connect to database :( ' + e);
});


//trying to mamke changes//
// mongoose.connect('mongodb://localhost:27017/Kassi', { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{
//   console.log('connected to database locally');
// })
// .catch(() => {
//   console.log('could not connect to database :(');
// });
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use('/api', router);
app.use("/images", express.static("images"));
app.use(express.static(path.join(__dirname, "public")));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.use(pdf);
//allow access to the images folder


//nodebackend\images

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }

})

var upload = multer({ storage: storage });

//come on dfgfddg

app.post("/api/update/:id", multer({storage: storage}).single("image"),(req, res) =>
{
  let url = req.protocol + "://" + req.get('host');
  let id = req.params.id;
  User.findByIdAndUpdate(id,{$set: {image: url + '/images/' + req.file.filename}}).exec().then( image => {
  });
 })
//
module.exports = app;
