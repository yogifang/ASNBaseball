const mongoose = require('mongoose');
const schemaMembers = new mongoose.Schema({
  email: String,

  password: String,

  bEUcitizen: Boolean,

  bPrivacy: Boolean,

  bFilled: Boolean,

  sportItem: String,

  summitDate: { type: Date, default: Date.now },
});

module.exports = mongoose.models.members || mongoose.model('members', schemaMembers);
