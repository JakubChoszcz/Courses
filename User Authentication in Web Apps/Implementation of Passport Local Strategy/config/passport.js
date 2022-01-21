const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;

const custoFields = {
    usernameField: 'uname',
    passwordField: 'pw',
    
}

const verifyCallback = (username, password, done) => {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
}

const strategy = new LocalStrategy();

//   passport.use(new LocalStrategy(
//     function(username, password, done) {
//     }
//   )); 