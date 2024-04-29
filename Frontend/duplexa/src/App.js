import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleFile2Change = (event) => {
    setFile2(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output_folder.zip');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Data Redundancy Removal</h1>
      <form onSubmit={handleSubmit}>
        <h2>Upload Folders</h2>
        <div>
          <label htmlFor="file1">Upload Folder 1:</label>
          <input type="file" id="file1" name="file1" accept=".zip,.rar,.tar,.gz" onChange={handleFile1Change} />
        </div>
        <div>
          <label htmlFor="file2">Upload Folder 2:</label>
          <input type="file" id="file2" name="file2" accept=".zip,.rar,.tar,.gz" onChange={handleFile2Change} />
        </div>
        <button type="submit">Process and Download</button>
      </form>
    </div>
  );
};

export default App;
