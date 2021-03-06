var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var productSchema = mongoose.Schema({

  name : {type: String, require: true},
  price : {type: Number, require: true},
  description: {type: String},
  date: {type: Date, require: false, default: Date.now()},
  quantity: {type: Number, require: false, default: 0}
});


productSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Product', productSchema);
