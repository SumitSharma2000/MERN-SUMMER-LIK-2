const FileFolderModel = require("../model/fileSchema");

// Create a new folder
const createFolder = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const { _id } = req.user;

    const isFileNameExist = await FileFolderModel.findOne({
      name,
      userId: _id,
      parentId,
    });

    if (isFileNameExist) {
      return res
        .status(400)
        .json({ status: "fail", message: "Folder name already exists." });
    }

    await FileFolderModel.create({
      name,
      userId: _id,
      type: "folder",
      parentId,
    });

    res.status(200).json({
      status: "success",
      message: "Folder created successfully.",
    });
  } catch (err) {
    console.log("Error in createFolder controller", err);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

// Rename an existing folder
const renameFolder = async (req, res) => {
  try {
    const { id, newName} = req.body;
    const { _id } = req.user;
    console.log("ID IS back ------------", id);
    console.log("NewName IS back ------------", newName);
    const folder = await FileFolderModel.findOne({ _id: id, userId: _id });

    if (!folder) {
      return res
        .status(404)
        .json({ status: "fail", message: "Folder not found." });
    }

    const isFileNameExist = await FileFolderModel.findOne({
      name: newName,
      userId: _id,
      parentId: folder.parentId,
    });

    if (isFileNameExist) {
      return res
        .status(400)
        .json({ status: "fail", message: "Folder name already exists." });
    }

    folder.name = newName;
    await folder.save();

    res.status(200).json({
      status: "success",
      message: "Folder renamed successfully.",
    });
  } catch (err) {
    console.log("Error in renameFolder controller", err);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

// Delete a folder
const deleteFolder = async (req, res) => {
  try {
    const { id } = req.body;
    const { _id } = req.user;
    const folder = await FileFolderModel.findOne({ _id: id, userId: _id });

    if (!folder) {
      return res
        .status(404)
        .json({ status: "fail", message: "Folder not found." });
    }

    await FileFolderModel.deleteOne({ _id: id, userId: _id });

    res.status(200).json({
      status: "success",
      message: "Folder deleted successfully.",
    });
  } catch (err) {
    console.log("Error in deleteFolder controller", err);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

module.exports = {
  createFolder,
  renameFolder,
  deleteFolder,
};
