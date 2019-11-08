module.exports = function createUser(username) {
  const mongoose = require('mongoose');
  const connectionString = process.env.MONGO_URI;
  const userSchema = require('./user_schema.js');
  const User = mongoose.model(this.fbId, userSchema, 'user');

  mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => e);

  User.findOne({ fbId: username }, (err, fb) => {
    if (err) {
      throw err;
    } else if (fb === null) {
      return new User({
        fbId: username,
        created: Date.now(),
      }).save();
    }
    return true;
  });
};
