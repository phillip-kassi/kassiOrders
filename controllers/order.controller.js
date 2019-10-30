var Order = require('../models/order');
var User = require('../models/user');

//mail services
var nodemailer = require('nodemailer');
var password = 'Dopeboi234**';
var kassiordersEmail = 'kassiorders@gmail.com';

//create order

exports.createOrder = (req, res) => {

  var userID = req.params.id;
  console.log(req.body.products.split('#'));
  //split the concatinated('#') string of IDs(products)
  var productIDs  = req.body.products.split('#');

  let order = new Order({
     totalprice: req.body.totalprice,
     products :productIDs
  });
  order.save().then(order =>{
    //if the order created successfully
    if(order)
    {
      User.findById(userID).then(user =>{
       user.orders.push(order._id);
       user.save().then(user =>{

        var transport = nodemailer.createTransport({
          service:'gmail',
          auth: {
            user: kassiordersEmail,
            pass: password
          }
        })


        var mailOptions = {
          from: kassiordersEmail,
          to: user.email,
          subject: 'Your Order',
          text: 'Order Summary:',
          html: '<h1>Your Order ' + user.username + ' </h1>' +
          ' <br>' +
          '<table>' +
          '<tr><td>Order Total</td><td>-</td><td>'+ 'R'+order.totalprice +'</td></tr>' +
          '<tr><td>Order Date</td><td>-</td><td>' + Date.now()  +     '</td></tr>' +
          '<tr><td>Contact</td><td>-</td><td>'+ user.cellnumber+      '</td></tr>' +
          '<tr><td>Order ID</td><td>-</td><td>'+'order' + Date.now() + user.username + '</td></tr>' +
          '</table>' + '<br><br>' +
          'THANK YOU! <br>' +
          'Kassi Orders!'
        }
//'order-' + Date.now() + "-" + user.username
        transport.sendMail(mailOptions, function(err, info) {
          if(err)
          {
            console.log(err);
          } else
          {
            console.log(info);
          }
        })

        res.json(user);
       })
      }).catch(err =>{
        console.log(err);
        res.json({message:'Order could not be placed for user: ' + user.username});
      })
    }
    else
    {
      res.json({'message':'could not create order'});
    }
//if the order could not create
  }).catch(err => {
    res.json({message:'Error! create order'})
    console.log("ORDER ERR: " + err);
  })


};

exports.getOrders = (req, res) => {

  Order.find().populate('products').then(orders => {
    if(orders)
    {
      res.json(orders);
    }
  }).catch(err => {
    console.log(err);
    res.json({message:'error trying to retrive orders'})
  })

}

//we can delete existing order
exports.deleteOrder = (req, res) =>
{
  var id = req.params.id;
  Order.findByIdAndDelete(id).then(deletedOrder => {
    res.json(deletedOrder);
  }).catch(err => {
    res.json({message: 'could not find and delete the order'});
  })
}

//get a single order using a known ID

exports.getOrder = (req, res) =>
{
  var id =  req.params.id;
  Order.findById(id).deepPopulate('products').then(order => {
    res.json(order);
  }).catch(err =>{
    console.log(err);
    res.json({message: 'could not find order'})
  });
}

exports.getUserOrders = (req, res) => {
  console.log('eish eish')
  User.findById(req.params.id).deepPopulate('orders, orders.products').then(data => {
    res.json(data);
    console.log(data);
  }).catch(err => {
    console.log(err);
    res.json({message:'could not get/find orders made by users'})
  })

}
