const express = require("express");
const uploadFileMulter = require("../config/uploadFileMulter");
const {handleFile, renameFile,deleteFile} = require("../controller/fileControllers.js");

const fileRouter = express.Router();
fileRouter.route('/').post(uploadFileMulter.single('file'), handleFile);
fileRouter.route('/rename').patch(renameFile);
fileRouter.route('/delete').delete(deleteFile);

module.exports = fileRouter;
