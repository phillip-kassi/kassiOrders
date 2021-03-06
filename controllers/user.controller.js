var User = require('../models/user');
var jwt =  require('jsonwebtoken');
//create new user

//mailing service
var nodemailer = require('nodemailer');
var password = 'Dopeboi234**';
var kassiordersEmail = 'kassiorders@gmail.com';


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

      var transport = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: kassiordersEmail,
          pass: password
        }
      })


      var admin = 'kassiorders@gmail.com';

      //mail options, set the json object up
      var mailOptions =
      {
        from: kassiordersEmail,
        to: admin,
        subject: 'Sign Up',
        text: 'New User Alert!',
        html: '<h1>A new user Has been Created! ' +  ':-)' + ' </h1>' +
        ' <br>' +
        '<table>' +
        //signupdate
        '<tr><td>Username</td><td>-</td><td>' + user.username +      '</td></tr>' +
        '<tr><td>Contact</td><td>-</td><td>' + user.email +      '</td></tr>' +
        '<tr><td>User ID</td><td>-</td><td><a href="">' + user._id + '</a></td></tr>' +
        '<tr><td>Sign Up Date</td><td>-</td><td>' + user.signupdate +      '</td></tr>' +

        '</table>' + '<br><br>'+

        'Regards! <br>' +
        'Kassi Orders!'
      }

      //now send the mail
      transport.sendMail(mailOptions, function(err, info) {
        if(err)
        {
          res.json(err);
        } else
        {
          res.json(info);
        }
      });
      ///////////////////////////////////////

    }).catch(err =>{
      res.json({err:err});
    });

  }

  //get users
  exports.getUsers = (req, res) =>
  {

    var pageSize = +req.query.pageSize;
    var page = +req.query.currentPage;
    var findUsers = User.find();
    var filter = req.query.filter;

    const options = {
      page: parseInt(page),
      limit: 5,
      sort: {username :'asc'}
    };

    if(page && pageSize && !filter)
    {
      findUsers.skip(pageSize * (page - 1)).limit(pageSize);
    }

    else if(filter !== '')
    {
      //when filtering, set options to ignore the upper or lower cases and to accept incomplete words
      const query = {};

      query.username = {$regex: filter, $options: '-i'};
      console.log(query);
      User.paginate(query, options).then(users => {
        res.json(users.docs);
      }).catch(err => {
        res.json(err)
      });
    }


    if(!filter)
    {
      findUsers.then(users =>{
        res.json(users);
      }).catch(err => {
        res.json({message:'could not find users'});
      });
    }


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


