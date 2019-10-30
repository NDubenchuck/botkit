const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
  userName: {
    type: String,
  },
  fbId: {
    type: Number,
  },
  created: {
    type: Date,
    required: [true, 'Created date is required']
  }
});

module.exports = user_schema;
