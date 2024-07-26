const express = require("express");
const { createFolder, renameFolder, deleteFolder } = require("../controller/folderController");

const folderRouter = express.Router();

folderRouter.post("/create", createFolder);
folderRouter.patch("/rename", renameFolder);
folderRouter.delete("/delete", deleteFolder);

module.exports = folderRouter;
