import { MdOutlineDriveFileRenameOutline, MdDelete } from "react-icons/md";

const styles = {
  folder: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "rgb(137 124 175)",
    borderRadius: "5px",
    fontSize: "1em",
    width: "120px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  folderName: {
    marginTop: "23px",
    fontSize: "1.2em",
    color: "black",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  },
  folderTab: {
    width: "100%",
    height: "20px",
    backgroundColor: "#ffeb3b",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    gap: "23px",
  },
  icon: {
    margin: "0 5px",
    cursor: "pointer",
    fontSize: "1.4em",
    color: "white",
    transition: "color 0.3s",
  },
};

const Folder = ({ elem, onDoubleClick, onRenameClick, onDeleteClick }) => (
  <div
    style={styles.folder}
    onDoubleClick={() => onDoubleClick(elem)}
  >
    <div style={styles.folderTab}></div>
    <div style={styles.folderName}>{elem.name}</div>
    <div style={styles.iconContainer}>
      <MdOutlineDriveFileRenameOutline
        style={styles.icon}
        title="Rename"
        onClick={() => onRenameClick(elem._id, elem.name)}
        aria-label={`Rename ${elem.name}`}
      />
      <MdDelete
        style={styles.icon}
        title="Delete"
        onClick={() => onDeleteClick(elem._id)}
        aria-label={`Delete ${elem.name}`}
      />
    </div>
  </div>
);

export default Folder;
