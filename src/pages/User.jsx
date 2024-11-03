import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
  const [code, setCode] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    if (!code) {
      setError('Please enter a valid code');
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/fetch`, { code });
      setData(res.data.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('File not found or an error occurred');
      setData(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white p-6">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Retrieve Your File</h2>

        <label htmlFor="code" className="text-lg">Enter Unique Code:</label>
        <input
          id="code"
          type="number"
          className="border border-gray-600 rounded-md p-2 text-black"
          placeholder="e.g., 123456"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition duration-200 p-2 rounded-md font-semibold"
        >
          Submit Code
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>

      {
        data && (
          <div className="mt-8 p-6 w-full max-w-md bg-green-600 rounded-lg text-white shadow-lg">
            <h3 className="text-xl font-bold mb-2">File Details:</h3>
            <p><span className="font-semibold">Unique Code :</span> {data.uniqueCode}</p>
            <p><span className="font-semibold">File URL :</span> <a href={data.fileUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-200 hover:text-blue-300">Download File</a></p>
          </div>
        )
      }
    </div>
  );
};

export default User;
