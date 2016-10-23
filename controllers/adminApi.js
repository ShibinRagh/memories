var session = require('express-session');
var user = require('../models/user.js');

module.exports = {
    login: function(req, res){
        user.findOne({username:req.body.username, password: req.body.password }, function(err, user){
            if(!err){
                console.log(user);
                req.session.user = user;
                console.log(req.session.user);
                res.send(req.session.user.id)
            }else{
                console.log('error');
            }
        })
    },
    register: function(req, res){
        newUser = new user(req.body);
        newUser.save(function(err, user){
            console.log(user);
        }); 
    },
    dashboard: function(req, res){
        console.log( req.session.user + user.userSchemas );
        //res.send(user);
    },
    //check signIn
    checkSignIn: function(req, res){
        if(req.session.user){
            next();
        }else{
            var err = new Error('Not logged in');
            console.log(req.session.user);
            next(err);
        }
    }
};

