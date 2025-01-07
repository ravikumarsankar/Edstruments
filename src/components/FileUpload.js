import React from "react";
import AnimationContainer from "./AnimationContiner";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const LoadSystemFile = ({ label, handleFileUpload, className }) => {
  return (
    <>
      <label className={className} for="invoiceFile">
        {label}
      </label>
      <input
        type="file"
        id="invoiceFile"
        className="upload-file"
        onChange={handleFileUpload}
      />
    </>
  );
};
const FileUpload = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("File uploaded:", file);
  };

  return (
    <div className="file-upload-container">
      <div className="upload-area">
        <div className="file-title-container">
          <span className="upload-title">Upload Your Invoice</span>

          <span className="upload-subtitle">
            To auto-populate fields and save time
          </span>
        </div>

        <AnimationContainer />
        <div className="upload-btn">
          <LoadSystemFile
            label={"Upload File"}
            handleFileUpload={handleFileUpload}
            className=""
          />
          <FileUploadOutlinedIcon className="upload-icon" />
        </div>
        <div className="drag-container">
          <LoadSystemFile
            label={"Click here"}
            handleFileUpload={handleFileUpload}
            className="drag-click"
          />
          <span className="drag-label">or Drag and drop</span>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
