// module.exports = function findUser(username) {
//   // require ('custom-env').env('staging');
//
//   const mongoose = require('mongoose');
//   const connectionString = process.env.MONGO_URI;
//   const userSchema = require('./user_schema.js');
//   const User = mongoose.model(this.fbId, userSchema, 'user');
//   mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => e);
//   User.findOne({ fbId: username }, (err, fb) => {
//     if (err) {
//       return err;
//     } if (fb !== null) {
//       return fb;
//     }
//   });
// };
