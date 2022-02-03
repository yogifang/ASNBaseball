const mongoose = require('mongoose');
const schemaSubjects = new mongoose.Schema({
  member: String,
  GPA: Number,
  AVG: Number,
  TOFEL: Number,
  IELTS: Number,
  TOEIC: Number,
  SAT: Number,
  ACT: Number,
  IntentMajor: String,
  bFilled: Boolean,
});

module.exports = mongoose.models.achievements || mongoose.model('achievements', schemaSubjects);
