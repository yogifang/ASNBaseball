const mongoose = require('mongoose');

const schemaBaseballInfo = new mongoose.Schema({
  ChineseName: String,
  Gender: String,
  GradDate: { type: Date, default: Date.now },
  Height: Number,
  LeftRightHand: String,
  PassportName: String,
  PriPosition: String,
  SecPosition: String,
  Weight: Number,
  bFilled: Boolean,
  currentGrad: String,
  member: String,
});

module.exports = mongoose.models.baseballinfos || mongoose.model('baseballinfos', schemaBaseballInfo);
