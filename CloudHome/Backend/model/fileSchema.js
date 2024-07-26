const mongoose = require("mongoose");

const filefolderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    sharedwith: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    type: {
      type: String,
      enum: ["folder", "file"],
      
    },
    link: String,
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Filefolders",
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Filefolders",
      },
    ],
    metaData:{
      type: Object,
      default: {}
    }
  },
  { timestamps: true }
);

const FileModel = mongoose.model("FileFoler", filefolderSchema);
module.exports = FileModel;
