const FileFolderModel = require("../model/fileSchema");
const getfilefolders = async (req, res) => {
    try {
      const { _id } = req.user;
      const {parentId} = req.body;
      console.log(parentId)
      const filefolders = await FileFolderModel.find({ userId: _id, parentId });
      res.status(200).json({
        status: "success",
        message: "File Found Successfully",
        data: filefolders,
      });
    } catch (err) {
      console.log("Error in folder controller getfilefolders controllers", err);
      res.status(500).json({
        status: "fail",
        message: "Internal server error",
      });
    }
  };
  module.exports = {
    getfilefolders,
  };