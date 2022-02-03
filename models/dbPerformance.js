const mongoose = require('mongoose');

const schemaPerformances = new mongoose.Schema({
  member: String,
  TenYardSplit: Number,
  SixtyYardSplit: Number,
  Throwing: Number,
  BlockPitch: Number,
  ERA: Number,
  gamesP: Number,
  AVG: Number,
  ER: Number,
  EXIT: Number,
  HB: Number,
  HR: Number,
  IP: Number,
  K: Number,
  OPS: Number,
  gamesH: Number,
  BB: Number,
  BBB: Number,
  BH: Number,
  BHR: Number,
  BK: Number,
  BRUN: Number,
  RUN: Number,
  Hit2B: Number,
  Hit3B: Number,
  Hits: Number,
  lAVG: Number,
  lBB: Number,
  lBBB: Number,
  lBH: Number,
  lBHR: Number,
  lBK: Number,
  lBRUN: Number,
  lER: Number,
  lERA: Number,
  lHB: Number,
  lHit2B: Number,
  lHit3B: Number,
  lHitHR: Number,
  lHits: Number,
  lIP: Number,
  lK: Number,
  lOPS: Number,
  lRUN: Number,
  AB: Number,
  latestGameDate: { type: Date, default: Date.now },
  latestGameName: String,
  bFilled: Boolean,
});

module.exports = mongoose.models.baseballPerformances || mongoose.model('baseballPerformances', schemaPerformances);
