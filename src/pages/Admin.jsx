import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

const Admin = () => {
    const [file, setFile] = useState(null); // State to store selected file
    const text = "HARSH"; // Example text
    const [code, setCode] = useState(0);
    const [url, setUrl] = useState("");
    const [flag, setFlag] = useState(false);

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('text', text); // Add text to the form data
        formData.append('file', file); // Add file to the form data

        const res = await axios.post(`${BASE_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct header for form data
            },
        });
        console.log("RESPONSE ", res);
        setCode(res.data.uniqueCode);
        setUrl(res.data.cloudinaryUrl);
        setFlag(true);

    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-800 p-4">
        <h1 className="text-3xl font-bold text-white mb-6">Admin - Upload Files</h1>
        <form 
          onSubmit={submitHandler} 
          className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white shadow-lg rounded-md w-full max-w-md"
        >
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])} 
            className="border border-gray-300 rounded-md p-2 w-full sm:w-auto"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
            Upload
          </button>
        </form>
  
        {flag && (
          <div className="mt-8 bg-green-500 p-6 rounded-lg text-white w-full max-w-lg text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">File uploaded successfully!</h2>
            <p className="text-lg mb-2">Unique Code: <span className="font-mono font-semibold">{code}</span></p>
            <p className="text-lg">
              File URL: <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-blue-200 hover:text-blue-300">{url}</a>
            </p>
          </div>
        )}
      </div>
    )
}

export default Admin