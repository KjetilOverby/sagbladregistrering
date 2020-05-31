const mongoose = require('mongoose');

const K3246Schema = new mongoose.Schema({
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

module.exports = mongoose.models.K3246 || mongoose.model('K3246', K3246Schema);
