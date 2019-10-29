var Prouct = require('../models/product');


exports.createProduct = (req, res) =>
{
  let product = new Prouct({
    price : req.body.price,
    name : req.body.name
  })

  product.save().then(product => {
    res.json(product);
  }).catch(err => {
    console.log(err);
    res.json({message:'could not create produt'});
  })
}

exports.getProducts = (req, res) =>
{
var page =  req.query.page;
var perPage = req.query.perPage;
  const options = {
    page: parseInt(page),
    limit: parseInt(perPage)
  };

  console.log(options)

Prouct.find().then(products => {
    res.json(products);
    console.log(products);
  }).catch(err => {
    console.log(err);
    res.json({message:'could not retrieve products'});
  })
}
exports.deleteProduct = (req, res) =>
{
  var id = req.params.id;
  Prouct.findByIdAndDelete(id).then(product =>{
    res.json(product);
  }).catch(err => {
    res.json({message:'could not delete product'})
    console.log(err);

  })

}
exports.updateProduct =  (req, res) => {
  var id = req.params.id.trim();
  Prouct.findByIdAndUpdate(id,{$set: {name: req.body.name, price:req.body.price}}, {new : true, useFindAndModify : true}).exec().then(product => {
    res.json(product);
  }).catch(err => {
    console.log(err);
    res.json({message:'could not update product'});
  })
}
