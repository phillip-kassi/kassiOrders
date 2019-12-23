var Message = require('../models/message');




exports.createMessage = (req, res) =>
{
  var messageData = req.body;

  let message =  new Message({
    message : messageData.message,
    subject : messageData.subject,
    user : messageData.user
  });

  message.save().then(mess => {
    res.json(mess);
  }).catch(err => {
    res.json(err);
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
  Message.findByIdAndUpdate(id, {$set: {adminmsg: message}}, {new : true, useFindAndModify : true}).then(msg =>{
    if(msg) {
      res.json(msg);
      Message.findByIdAndUpdate(id, {$set: {read: true}}, {new : true, useFindAndModify : true}).then(readMsg => {

      })
    }
  }).then(err => {
    res.json(err);
  })
}



