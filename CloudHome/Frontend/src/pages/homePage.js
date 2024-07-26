import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar/navbar";
import useCreateFolder from "../hooks/useCreateFolder";
import useGetFileFolders from "../hooks/useGetFileFolder";
import useUploadFile from "../hooks/useUploadFile";
import Folder from "../components/folder";
import File from "../components/file";
import useDeleteFolder from "../hooks/useDeleteFolder";
import useRenameFolder from "../hooks/useRenameFolder";
import useRenameFile from "../hooks/useRenameFile";
import useDeleteFile from "../hooks/useDeleteFile";
import styles from "../components/styles";

const HomePage = () => {
  const [newFolder, setNewFolder] = useState("");
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const inputRef = useRef(null);
  const { createFolder } = useCreateFolder();
  const [folderStructure, setFolderStructure] = useState([
    { _id: null, name: "Cloud Home" },
  ]);
  const { getFileFolders, filefolders } = useGetFileFolders();
  const { deleteFolder } = useDeleteFolder();
  const { renameFolder } = useRenameFolder();
  const { renameFile } = useRenameFile();
  const { deleteFile } = useDeleteFile();
  const parentFolder = folderStructure[folderStructure.length - 1];

  const handleDoubleClick = (elem) => {
    if (elem.type === "folder") {
      setFolderStructure([...folderStructure, elem]);
    } else {
      window.open(elem.link);
    }
  };

  const handleAllowCreateFolder = () => {
    setShowCreateFolder(true);
  };

  const handleCreateFolder = async () => {
    if (newFolder.length > 0) {
      await createFolder({
        name: newFolder,
        parentId: parentFolder._id,
      });
      getFileFolders(parentFolder._id);
      setShowCreateFolder(false);
      setNewFolder("");
    }
  };

  const handleGoBack = (folder) => {
    if (folder) {
      const newFolderStructure = folderStructure.slice(0, -1);
      setFolderStructure(newFolderStructure);
      getFileFolders(folder._id);
    }
  };

  const { isUploadAllowed, uploadFile } = useUploadFile();
  const handleFileUpload = async (e) => {
    if (isUploadAllowed) {
      const file = e.target.files;
      await uploadFile({
        file: file[0],
        parentId: parentFolder._id,
      });
      getFileFolders(parentFolder._id);
    } else {
      alert("Uploading is already in progress. Please wait...");
    }
  };

  const [renameId, setRenameId] = useState(null);
  const [newName, setNewName] = useState("");

  const handleRenameClick = (id, currentName) => {
    console.group("Id is on home page--------",id)
    console.group("CurrName is on home page--------",currentName)
    setRenameId(id);
    setNewName(currentName);
  };

  const handleRenameChange = (e) => setNewName(e.target.value);

  const handleRenameSubmit = async (id) => {
    if (newName.trim()) {
      if (
        filefolders.find((item) => item._id === id && item.type === "folder")
      ) {
        await renameFolder(id, newName);
      }
      await renameFile(id, newName);
    }
    getFileFolders(parentFolder._id); 
    setRenameId(null);
    setNewName("");
  };
   
  const handleDeleteClickFolder = async (id) => {
    await deleteFolder(id);
    getFileFolders(parentFolder._id);
  };

  const handleDeleteClickFile = async (id) => {
    await deleteFile(id);
    getFileFolders(parentFolder._id);
  };

  const handleRenameCancel = () => {
    setRenameId(null);
    setNewName("");
  };

  const handleFileDownload = (elem) => {
    if (elem && elem.link) {
      const link = document.createElement('a');
      link.href = elem.link;
      link.download = elem.name || ''; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  useEffect(() => {
    getFileFolders(parentFolder._id);
  }, [folderStructure]);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          {folderStructure.length > 1 && (
            <a
              style={styles.backButton}
              onClick={() =>
                handleGoBack(folderStructure[folderStructure.length - 2])
              }
            >
              &larr; Back
            </a>
          )}
          <h1 style={styles.heading}>Welcome to Our CloudyHome</h1>
          <p style={styles.subheading}>
           This is a simple cloud storage application that allows you to store your files and folders in the cloud.

          </p>
          <button
            style={{ ...styles.button, ...styles.buttonCreate }}
            onClick={handleAllowCreateFolder}
          >
            Create Folder
          </button>

          {showCreateFolder && (
            <div style={styles.createFolderContainer}>
              <input
                style={styles.input}
                type="text"
                value={newFolder}
                onChange={(e) => setNewFolder(e.target.value)}
                placeholder="New Folder Name"
              />
              <button
                style={{ ...styles.button, ...styles.buttonCreate }}
                onClick={handleCreateFolder}
              >
                Create
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonCancel }}
                onClick={() => setShowCreateFolder(false)}
              >
                Cancel
              </button>
            </div>
          )}

          <input
            className="file-upload-input"
            ref={inputRef}
            type="file"
            onChange={handleFileUpload}
            style={styles.uploadInput}
          />

          <ul style={styles.arrowList}>
            {folderStructure.map((folder, index) => (
              <li
                key={index}
                style={styles.arrowItem}
                onClick={() =>
                  index < folderStructure.length - 1 &&
                  handleGoBack(folderStructure[index])
                }
              >
                <a
                  style={{
                    ...styles.folderLink,
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  {folder.name}
                </a>
                {index < folderStructure.length - 1 && (
                  <span style={styles.arrowItemAfter}></span>
                )}
              </li>
            ))}
          </ul>

          <div style={styles.folderContainer}>
            {filefolders.map((elem) =>
              elem.type === "folder" ? (
                <Folder
                  elem={elem}
                  onDoubleClick={handleDoubleClick}
                  onRenameClick={handleRenameClick}
                  onDeleteClick={() => handleDeleteClickFolder(elem._id)}
                />
              ) : (
                <File
                  elem={elem}
                  onDoubleClick={handleDoubleClick}
                  onRenameClick={handleRenameClick}
                  onDeleteClick={() => handleDeleteClickFile(elem._id)}
                  onDownloadClick={() => handleFileDownload(elem)}
                />
              )
            )}
          </div>

          {renameId !== null && (
            <div style={styles.renameBox}>
              <input
                type="text"
                value={newName}
                onChange={handleRenameChange}
                placeholder="Enter new name"
                style={styles.renameInput}
              />
              <button
                onClick={() => handleRenameSubmit(renameId)}
                style={styles.renameButton}
              >
                OK
              </button>
              <button
                onClick={handleRenameCancel}
                style={{ ...styles.renameButton, marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
