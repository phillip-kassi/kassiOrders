var User = require('../models/user');
var jwt =  require('jsonwebtoken');
//create new user
exports.createUser = (req, res) =>
  {
    let user = new User({
      username : req.body.username,
      cellnumber : req.body.cellnumber,
      housenumer : req.body.housenumer,
      email : req.body.email,
      streetname : req.body.streetname,
      password : req.body.password
    });

    user.save().then(user => {
      res.json(user);
    }).catch(err =>{
      res.json({err:err});
    });

  }

  //get users
  exports.getUsers = (req, res) =>
  {

    var pageSize = +req.query.pageSize;
    var page = +req.query.currentPage;
    console.log(pageSize, page);
    var findUsers = User.find();

    if(page && pageSize)
    {
      findUsers.skip(pageSize * (page - 1)).limit(pageSize);
    }

    findUsers.then(users =>{
      res.json(users);
    }).catch(err => {
      res.json({message:'could not find users'});
    });

  }

  //get single user
  exports.getUser = (req, res) =>
  {
    var id = req.params.id;
    if(id !== null)
    {
      User.findById(id).then(user =>{
        res.json(user);
      }).catch(err =>{
        res.json({message:'could not find user'});
      })
    }
  }

  exports.deleteUser = (req, res) =>
   {
    var id = req.params.id;
    User.findByIdAndDelete(id).then(deletedUser =>{
      res.json({'success': deletedUser});
    }).catch(err => {
    res.json({message:'could not find and delete user'});
    console.log(err);
    })

  }

  exports.getValidUser = (req, res) =>
  {
    var password = req.params.password;
    var username = req.params.username;
     User.find({username: username, password:password}).then( user => {
        if(user.length !== 0)
        {
          const token = jwt.sign({email:user[0].email, userId:user[0]._id, username:user[0].username}, "1234**Dopeboi", {expiresIn:'1h'});
          return res.json({user:user});
        }
        else {
          res.json({message:'not found'});
        }
     }).catch(err => {
       console.log(err);
       res.json({'message':'could not log in/find User: ' + username});
     });

  },

  exports.updateUser2 = (req, res) =>
  {
    let user = req.body;
    let id = req.params.id;
    User.findByIdAndUpdate(id, {$set: {username: user.username, cellnumber: user.cellnumber,housenumber: user.housenumber, streetname: user.streetname, email: user.email}}, {new : true, useFindAndModify : true}).then(user => {
      res.json({username: user.username, email: user.email});
    }).catch(err => {res.json({message: 'could not update'})});
  },

  exports.updateRole = (req, res) => {
    let role = req.body.role;
    let id = req.params.id;

    User.findByIdAndUpdate(id, {$set: {role:role}}, {new : true, useFindAndModify : true}).then(user => {
      res.json({role});
    }).catch(err => {res.json({message: 'could not update Role'})});
  }


