import React from 'react';
import { MdOutlineDriveFileRenameOutline, MdDelete} from 'react-icons/md';
import { FaCloudDownloadAlt } from "react-icons/fa";

const styles = {
  file: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "#105c5b",
    borderRadius: "5px",
    fontSize: "1em",
    width: "120px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
  },
  folderTab: {
    width: "100%",
    height: "20px",
    backgroundColor: "#ffeb3b",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  fileIconContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    gap: "10px",
  },
  icon: {
    cursor: "pointer",
    fontSize: "1.4em",
    color: "white",
    transition: "color 0.3s",
  },
  fileName: {
    marginTop: "10px",
    fontSize: "0.9em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  },
};

const File = ({ elem, onDoubleClick, onRenameClick, onDeleteClick, onDownloadClick }) => (
  <div
    key={elem._id}
    style={styles.file}
    onDoubleClick={() => onDoubleClick(elem)}
  >
    <div style={styles.folderTab}></div>
    <div style={styles.fileName}>{elem.name}</div>
    <div style={styles.fileIconContainer}>
      <MdOutlineDriveFileRenameOutline
        style={styles.icon}
        title="Rename"
        onClick={() => onRenameClick(elem._id, elem.name)}
      />
      <MdDelete
        style={styles.icon}
        title="Delete"
        onClick={() => onDeleteClick(elem._id)}
      />
      <FaCloudDownloadAlt
        style={styles.icon}
        title="Download"
        onClick={() => onDownloadClick(elem)}
      />
    </div>
  </div>
);

export default File;
