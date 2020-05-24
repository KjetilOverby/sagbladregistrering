const mongoose = require('mongoose');

const K2236Schema = new mongoose.Schema({
  serial: {
    type: String,
    required: true
    
  },
  registDate: {
    type: String,
    
},
  performer: {
    type: [String]
  },
  
  date: {
      type: [String]
  }
});

module.exports = mongoose.models.K2236 || mongoose.model('K2236', K2236Schema);
