var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Product = require('./user');

var messageSchema = mongoose.Schema({

  user : {type: Schema.Types.ObjectId, ref: 'User'},
  message: {type: String, require: true},
  date: {type: Date, require: false, default: Date.now()},
  subject: {type: String},
  category: {type: String, require: false, default: 'General'},
  adminmsg: {type: String, require: false, default: 'Admin will reply soon Thanks for your patience'},
  read: {type: Boolean, require: false, default: false}
});

messageSchema.plugin(deepPopulate,{
  whitelist: [
    'user']
});
messageSchema.plugin(deepPopulate);
module.exports = mongoose.model('Message', messageSchema);
