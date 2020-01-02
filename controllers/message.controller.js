var Message = require('../models/message');
var User = require('../models/user');
var nodemailer = require('nodemailer');
var password = 'Dopeboi234**';
var kassiordersEmail = 'kassiorders@gmail.com';



exports.createMessage = (req, res) =>
{
  var messageData = req.body;

  let message =  new Message({
    message : messageData.message,
    subject : messageData.subject,
    user : messageData.user
  });

  var userEmail = '';
  var userName = '';

  User.findById(message.user).then(user => {
    if(user) {
      userEmail = user.email;
      userName = user.username;
    }
  });

  message.save().then(mess => {
    var transport = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: kassiordersEmail,
        pass: password
      }
    })

    var mailOptions =
    {
      from: kassiordersEmail,
      to: kassiordersEmail,
      subject: 'New Message',
      text: 'Order',
      html: '<h1>Message From ' + userName + ' </h1>' +
      '<br>' +
      '<h4>SUBJECT: ' + message.subject + '</h4><br>'
      +'<p>' +message.message+ '</p>'
      +
      '<br><br>'+

      'Regards' + message.user + '<br>' +
      'Kassi Orders!'
    }
    setTimeout(() => {
      transport.sendMail(mailOptions, function(err, info) {
        res.json(mess);
        console.log(info);
        console.log(err);
    })
    }, 500);

  }).catch(err => {
    res.json(err);
    console.log(err);
  });
},

exports.getMessages = (req, res) =>
{
  Message.find().deepPopulate('user').then(messages => {
    res.json(messages);
  }).catch(err => {
    res.json(err);
  })
},


exports.deleteConvo = (req, res)  =>
{
  Message.findByIdAndDelete(req.params.id).then(deleted => {
    res.json(deleted);
  }).catch(err => {
    res.json(err);
  });
},

exports.replyMessage = (req, res) => {
  var id = req.params.id;
  var message = req.body.message;
  var replyToUser = '';
  var replyToUser2 = '';

  Message.findByIdAndUpdate(id, {$set: {adminmsg: message}}, {new : true, useFindAndModify : false}).then(msg =>{
    if(msg) {
      res.json(msg);
      replyToUser = msg.user._id;
      Message.findByIdAndUpdate(id, {$set: {read: true}}, {new : true, useFindAndModify : false}).then(readMsg => {
        if(readMsg) {
          User.findById(replyToUser).then(userFound => {
            replyToUser2 = userFound.email;
          }).catch(err =>{
            console.log(err);
          });

          var transport = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: kassiordersEmail,
              pass: password
            }
          })

          var mailOptions = {};

          setTimeout(() => {
             mailOptions =
            {
              from: kassiordersEmail,
              to: replyToUser2,
              subject: 'Message From KassiOrders',
              text: 'Message From KassiOrders',
              html: '<h1>A Reply To Your Message</h1>' +
              ' <br>' +
              '<p>' + message + '</p>'
              + '<br><br>'+

              'Regards! <br>' +
              'Kassi Orders!'
            }
          }, 2000);

          setTimeout(() => {
            transport.sendMail(mailOptions, function(err, info) {
              if(err)
              {
                console.log(err);
              } else
              {
                // do nothing if there is no error!!!!!!!!!
              }
            });
          }, 4000);
        }
      })
    }
  }).then(err => {
    res.json(err);
  })
}



