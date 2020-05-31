const mongoose = require('mongoose');

const K3044Schema = new mongoose.Schema({
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

module.exports = mongoose.models.K3044 || mongoose.model('K3044', K3044Schema);
