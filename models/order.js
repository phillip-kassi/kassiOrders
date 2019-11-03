var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Product = require('./product');

var orderSchema = mongoose.Schema({

  products : [{type: Schema.Types.ObjectId, ref: 'Product'}],
  totalprice: {type: String, require: true},
  orderdate: {type: Date, require: false, default: Date.now()},
  username: {type: String}

});

orderSchema.plugin(deepPopulate,{
  whitelist: [
    'products']
});
orderSchema.plugin(deepPopulate);
module.exports = mongoose.model('Order', orderSchema);
