const mongoose = require('mongoose');

const K2640Schema = new mongoose.Schema({
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

module.exports = mongoose.models.K2640 || mongoose.model('K2640', K2640Schema);
