const cloudinary = require("../config/cloudinary");
const FileFolderModel = require("../model/fileSchema");
const fsPromises = require('fs').promises;

const createFileDocInMongoDB = async (req, res) => {
  try {
    const data = req.file;
    const { _id } = req.user;
    const { parentId } = req.body;

    const file = await FileFolderModel.create({
      name: data.originalname,
      userId: _id,
      parentId: parentId === "null" ? undefined : parentId,
      type: "file",
      metaData: {
        multer: data,
      },
    });

    res.status(200).json({
      message: "File upload in progress",
      data: {
        file: file,
      },
    });
    return file;
  } catch (err) {
    console.log("error in createFileDocInMongoDB", err);
    res.status(500).json({
      message: "Internal Server Error",
      status: "fail",
    });
    return false;
  }
};

const uploadFileToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.metaData.multer.path, {
      folder: `CloudHome/${file.userId}/${file.parentId}`,
      timeout: 60000,
    });
    try {
      await FileFolderModel.findByIdAndUpdate(file._id, {
        link: result.secure_url || result.url,
        "metaData.cloudinary": result,
      });
      return true;
    } catch (err) {
      console.log("error in uploadFileToCloudinary inside try", err);
      return false;
    }
  } catch (err) {
    console.log("error in uploadFileToCloudinary", err);
    return false;
  }
};

const deletefilefromServer = async (file) => {
  try {
    await fsPromises.rm(file.metaData.multer.path);
    console.log("File Deleted Successfully");
  } catch (err) {
    console.log("error in deletefilefromServer", err);
    return false;
  }
};

const renameFile = async (req, res) => {
  try {
    const { id, newName} = req.body;
    const { _id } = req.user;
    console.log("ID IS back ------------", id);
    console.log("NewName IS back ------------", newName);
    const file = await FileFolderModel.findOne({ _id: id, userId: _id });

    if (!file) {
      return res
        .status(404)
        .json({ status: "fail", message: "File not found." });
    }

    const isFileNameExist = await FileFolderModel.findOne({
      name: newName,
      userId: _id,
      parentId: file.parentId,
    });

    if (isFileNameExist) {
      return res
        .status(400)
        .json({ status: "fail", message: "File name already exists." });
    }

    file.name = newName;
    await file.save();

    res.status(200).json({
      status: "success",
      message: "File renamed successfully.",
    });
  } catch (err) {
    console.log("Error in renameFile controller", err);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { id } = req.body;
    const { _id } = req.user;
    const file = await FileFolderModel.findOne({ _id: id, userId: _id });

    if (!file) {
      return res
        .status(404)
        .json({ status: "fail", message: "File not found." });
    }

    await FileFolderModel.deleteOne({ _id: id, userId: _id });

    res.status(200).json({
      status: "success",
      message: "File deleted successfully.",
    });
  } catch (err) {
    console.log("Error in deleteFile controller", err);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};



const handleFile = async (req, res) => {
  try {
    const DocumentCreated = await createFileDocInMongoDB(req, res);
    if (DocumentCreated) {
      const isFileUploadToCloudinary = await uploadFileToCloudinary(
        DocumentCreated
      );
      if (isFileUploadToCloudinary) {
        deletefilefromServer(DocumentCreated);
      }
    }
  } catch (err) {
    console.log("error in handleFileController", err);
    res.status(500).json({
      message: "Internal Server Error",
      status: "fail",
    });
  }
};

module.exports = {
  handleFile,
  renameFile,
  deleteFile,
};
