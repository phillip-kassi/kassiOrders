const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
//include those modes to succeed populations
const Order = require('../models/order');
const Product = require('../models/product');
var mongoosePaginate = require('mongoose-paginate');




const  userSchema = mongoose.Schema({

  username: { type: String, require: true },
  password: {type: String, require: true},
  cellnumber: {type: String, require: false, default: "000 0000 000"},
  email: {type: String, require: true},
  streetname: {type: String, require: false, default: "Street Name Needed"},
  housenumber:{type: String, require: false, default: "House Number Needed"},
  orders:[{type: Schema.Types.ObjectId, ref: 'Order'}],
  signupdate:{type: Date, require: false, default: Date.now()},
  role:{type:String, require: false, default:"normal"},
  image: {type: String, require: false, default: 'https://kassi-orders.herokuapp.com/images/default.jpg'},
  zone: {type: String, require: false, default: 'ZONE 4'}
});

userSchema.plugin(mongoosePaginate);
userSchema.plugin(deepPopulate,{
  whitelist: [
    'orders',
    'orders.products',
  ]
});


module.exports = mongoose.model('User', userSchema);
