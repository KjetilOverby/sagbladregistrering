const mongoose = require('mongoose');

const K2438Schema = new mongoose.Schema({
  serial: {
    type: String,
    required: true,
    unique: true
    
  },
  registDate: {
    type: String,
    
},
  performer: {
    type: [String]
  },
  
  date: {
      type: [String]
  },
  comment: {
    type: [String]
  },
  commentDate: {
    type: [String]
  }
});

module.exports = mongoose.models.K2438 || mongoose.model('K2438', K2438Schema);
