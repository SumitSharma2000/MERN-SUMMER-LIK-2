const express = require("express");
const {getfilefolders} = require("../controller/filefolderController.js");

const filefolderRouter = express.Router();
filefolderRouter.route("/").post(getfilefolders);

module.exports = filefolderRouter;
