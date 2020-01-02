var Order = require('../models/order');
var User = require('../models/user');
var Product = require('../models/product');

//mail services
var nodemailer = require('nodemailer');
var password = 'Dopeboi234**';
var kassiordersEmail = 'kassiorders@gmail.com';

//create order
try {
  exports.createOrder = (req, res) => {

    var userID = req.params.id;
    //split the concatinated('#') string of IDs(products)
    var productIDs  = req.body.products.split('#');
    var quantityList = req.body.quantitylist.split('#');
    var products = [];

    let order = new Order({
       totalprice: req.body.totalprice,
       products :productIDs,
       userid: userID
    });


    var count = -1;
    productIDs.forEach(element => {
      Product.findById(element).then(product => {
        if(product) {
          count++;
          let obj = {
            productname: product.name,
            productprice: product.price + ' x ' + quantityList[count],
           };
           products.push(obj);
        }
      })
    });

    order.save().then(order =>{
      //if the order created successfully
      if(order)
      {
        User.findById(userID).then(user =>{
          Order.findByIdAndUpdate(order._id, {$set: {username: user.username}}, {new : true, useFindAndModify : true}).then(order =>{
          })
         user.orders.push(order._id);
         user.save().then(user =>{

          var transport = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: kassiordersEmail,
              pass: password
            }
          })

          var admin = 'philliphlapa2015@gmail.com';
          var info = '';
          products.forEach(element => {
            info += '<br><tr><td>Product</td><td>-</td><td>' + element.productname + '</td></td>' +
                    '<tr><td>Product Price</td><td>-</td><td>' + 'R' + element.productprice + '</td></td>'
          });

          var receipients = [user.email, admin];

          for(i = 0; i < 2; i++)
          {

          }

          var mailOptions =
          {
            from: kassiordersEmail,
            to: user.email,
            subject: 'Your Order',
            text: 'Order Summary:',
            html: '<h1>Your Order ' + user.username + ' </h1>' +
            ' <br>' +
            '<table>' +

            '<tr><td>Contact</td><td>-</td><td>kassiorders@gmail.com' +      '</td></tr>' +
            '<tr><td>Order ID</td><td>-</td><td><a href="http://kassi-orders.herokuapp.com/signin">' + order._id + '</a></td></tr>' +
             info +
            '<tr><td><h4>Order Total</h4></td><td>-</td><td><h4>'+ 'R'+order.totalprice +'</h4></td></tr>' +
            '</table>' + '<br><br>'+


            'THANK YOU! <br>' +
            'Kassi Orders!'
          }

            transport.sendMail(mailOptions, function(err, info) {
              if(err)
              {
                res.json(err);
              } else
              {

                var info = '';
                products.forEach(element => {
                  info += '<br><tr><td>Product</td><td>-</td><td>' + element.productname + '</td></td>' +
                          '<tr><td>Product Price</td><td>-</td><td>' + 'R' + element.productprice + '</td></td>'
                });

                var mailOptions =
                {
                  from: kassiordersEmail,
                  to: 'kassiorders@gmail.com',
                  subject: 'Order',
                  text: 'Order By: ' + user.username,
                  html: '<h1>New Order Alert! <br> Order By: ' + user.username + '</h1>' +
                  ' <br>' +
                  '<table>' +

                  '<tr><td>Time</td><td>-</td>' +  order.orderdate +   '</td></tr>' +
                  '<tr><td>Contact</td><td>-</td>' +  user.email +   '</td></tr>' +
                  '<tr><td>Cell</td><td>-</td>' +  user.cellnumber +   '</td></tr>' +
                  '<tr><td>Username</td><td>-</td>' +  user.username +   '</td></tr>' +
                  '<tr><td>Order ID</td><td>-</td><td><a href="http://kassi-orders.herokuapp.com/signin">' + order._id + '</a></td></tr>' +
                   info +
                  '<tr><td><h4>Order Total</h4></td><td>-</td><td><h4>'+ 'R'+order.totalprice +'</h4></td></tr>' +
                  '</table>' + '<br><br>'+


                  'Regards! <br>' +
                  'Kassi Orders!'
                }
                transport.sendMail(mailOptions, function(err, info) {
                  if(info) {
                    res.json(info)
                  } else {
                    res.json(err);
                  }
                })
              }
            });
          res.json(user);
         })
        }).catch(err =>{
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
} catch (error) {
console.log("ERROR PHILLIP " + error);
}


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

exports.acceptOrder = (req, res) =>
{
  var data = req.body;

  Order.findByIdAndUpdate(data.orderid, {$set: {status: true}}, {new : true, useFindAndModify : true}).then(order =>{
    if(order) {
      res.json(order);
      User.findById(data.userid).then(user => {
        if(user) {
          var transport = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: kassiordersEmail,
              pass: password
            }
          })

           //mail options, set the json object up
      var mailOptions =
      {
        from: kassiordersEmail,
        to: user.email,
        subject: 'Order Acknowledgement',
        text: 'Order Acknowledgement',
        html: '<h1>Your Order</h1>' +
        ' <br>' +
        "Your Order has been recieved and it is on it's Way!" +
       '<br>' +
        "Please keep cash on you to pay for the order." +
        '<br><br>'+

        'Regards! <br>' +
        'Kassi Orders!'
      }

      //now send the mail
      transport.sendMail(mailOptions, function(err, info) {
        if(err)
        {
          console.log(err);
        } else
        {
         console.log(info);
        }
      });

        }
      }).catch(err => {res.json(err);})
    }
  }).catch(err => {res.json(err);});
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

  User.findById(req.params.id).deepPopulate('orders, orders.products').then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
    res.json({message:'could not get/find orders made by users'})
  })

}
