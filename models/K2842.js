const mongoose = require('mongoose');

const K2842Schema = new mongoose.Schema({
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

module.exports = mongoose.models.K2842 || mongoose.model('K2842', K2842Schema);
