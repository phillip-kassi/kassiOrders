var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes');
var pdf = require('express-pdf')
var path = require('path');

//when i'm conneting to remote database
mongoose.connect('mongodb://admin:admin1234%2A%2A@cluster0-shard-00-00-xbnnw.mongodb.net:27017,cluster0-shard-00-01-xbnnw.mongodb.net:27017,cluster0-shard-00-02-xbnnw.mongodb.net:27017/kassApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true }).then(() =>{
  console.log('connected to database');
})
.catch(() => {
  console.log('could not connect to database :(');
});
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
app.use(express.static(path.join(__dirname, "kass-order-app")));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "kass-order-app/index.html"));
})
app.use(pdf);




// app.use('/api/all', (req, res) => {
//   User.findById('5da7771780e8903148298354').populate('orders').exec().then(doc =>{
//     doc.orders.push("5da775e9820e2d2ba8057aa5");
//     doc.save().then(doc1 => {res.json(doc1)}).catch(err =>{res.json({'something went wrong': err})});
//     res.json(doc);
//   }).catch( err =>{
//     res.json({err:err});
//   });
// })

// app.use('/api/user', (req, res) =>{

//   let user = new User({
//     username: "PHILLIP",
//     cellnumber: "12222222222222222222",
//     streetname : "4444444444444444444",
//     housenumber: "EEEEEEEEEEEEEEEEEEEEE",
//     password: "123456",
//     email: "philliphlapa2013@gmail.com",
//     orders: [
//       "5da775e9820e2d2ba8057aa5"
//     ]

//   })

//   user.save().then( doc => {
//     res.json(doc);
//   }).catch(err =>{
//     res.json({err:err});
//   });

// })


// app.use('/api/order', (req, res) => {
//   let order = new Order({
//     products : ['5da7747f929c2e36a40e42b4'],
//     totalprice : 'R3999',
//   })

//   order.save().then( doc =>{
//     res.json(doc);
//   }).catch( err => {
//     res.json({err:err});
//   });
// });












// app.use('/api/product', (req, res) => {
//   let product = new Product({
//     name: "Vodka",
//     price : 249
//   });

//   product.save().then(doc => {
//     res.json(doc);
//   }).catch(err => {
//     res.json({err:err})
//   })
// });

// app.use('/api/users', (req, res) =>{
//   User.findById('5da7660492950313dcdbb74c').populate('orders').exec().then(doc => {
//     res.json(doc);
//   } ).catch(err => {
//     res.json({err : err});
//   });
// });





module.exports = app;
