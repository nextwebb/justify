const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/users');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


passport.use('local.register', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    await User.findOne({ 'email': email }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (user) {
            req.flash('userExist', `${email} has been used`)
            console.log(`${email} has been used`)
            return done(null, false);
        }

        let newUser = new User();
        // const hash = newUser.hashPassword(req.body.password);

        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.role = req.body.role;
        newUser.password = newUser.hashPassword(req.body.password);

        console.log(newUser);

       newUser.save().then((err) => {
           if(err) {

            console.log(err)
               return done(err)
           }
           console.log('here',newUser)
           return done(null, newUser)
           
       })
    })
}))

passport.use('local.login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    User.findOne({ 'email': email }, function (err, user) {
        // console.log(user.password, user.email)
        if (err) {
            return done(err);

        }
        if (!user) {
            return done(null, false);
        }

        if (!user.validatePassword(req.body.password, user.password)) {
            console.log(req.body.password)
            return done(null, false)
        }
        return done(null, user)
    })
}))

