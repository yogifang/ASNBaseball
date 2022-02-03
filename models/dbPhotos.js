const mongoose = require("mongoose");
const schemaPhotos = new mongoose.Schema(
  {
    member: String,
    image: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.photos || mongoose.model("photos", schemaPhotos);
