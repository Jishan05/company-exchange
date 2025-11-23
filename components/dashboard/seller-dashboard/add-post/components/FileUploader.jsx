'use client';

import { useState } from "react";

const FileUploader = ({ onFilesChange }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
  const maxSizeMB = 5;

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    console.log("uploadedFiles ", uploadedFiles);

    const validatedFiles = [];

    for (let file of uploadedFiles) {
      if (!allowedTypes.includes(file.type)) {
        setError(`❌ ${file.name} is not allowed`);
        return;
      }
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`❌ ${file.name} exceeds ${maxSizeMB}MB`);
        return;
      }

      validatedFiles.push({
        file,
        preview: file.type === "application/pdf" ? null : URL.createObjectURL(file),
      });
    }

    setError("");
    const updated = [...files, ...validatedFiles];
    setFiles(updated);
    onFilesChange?.(updated.map(f => f.file));
  };


  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesChange?.(updated.map(f => f.file));
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">

      {/* Upload Button */}
      <div className="col-auto">
        <label htmlFor="fileUpload" className="cursor-pointer">
          <div className="w-200 d-flex ratio ratio-1:1">
            <div className="flex-center flex-column bg-blue-2 rounded-4">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Files</div>
            </div>
          </div>
        </label>

        <input
          id="fileUpload"
          type="file"
          multiple
          accept="image/png,image/jpeg,application/pdf"
          className="d-none"
          onChange={handleFileUpload}
        />
      </div>

      {/* Previews */}
      {files.map((item, index) => (
        <div key={index}>
          <p>{item.file.name}</p>
          <button onClick={() => removeFile(index)}>Remove</button>
        </div>
      ))}

      {/* Error */}
      {error && (
        <div className="col-12 text-red-1 fw-600 text-15 mt-10">
          {error}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
