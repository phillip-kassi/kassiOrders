var express =  require('express');
var router = express.Router();
var userController = require('./controllers/user.controller');
var orderController = require('./controllers/order.controller');
var productController = require('./controllers/product.controller');
var messageController = require('./controllers/message.controller');


router.post('/signup', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/user/:username/:password', userController.getValidUser);
router.post('/users/update/:id', userController.updateUser2);
router.post('/users/role/:id', userController.updateRole);


router.get('/orders', orderController.getOrders);
router.get('/orders/:id', orderController.getOrder);
router.post('/orders/accept', orderController.acceptOrder);
router.delete('/orders/:id', orderController.deleteOrder);
router.get('/users/:id/orders', orderController.getUserOrders);
router.post('/users/:id/order', orderController.createOrder);


//product
router.post('/product', productController.createProduct);
router.get('/products', productController.getProducts);
router.delete('/products/:id', productController.deleteProduct);
router.put('/products/:id', productController.updateProduct);
//Order


//message controller
router.post('/message', messageController.createMessage);
router.get('/messages', messageController.getMessages);
router.delete('/messages/:id', messageController.deleteConvo);
router.post('/message/reply/:id', messageController.replyMessage);










module.exports = router;
