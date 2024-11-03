import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Effortless File Transfer</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Transfer files securely and instantly using unique access codes. Simple, fast, and reliable.
        </p>
        <div className='flex justify-center items-center gap-4'>

          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            <Link to="/admin">Upload File</Link>
          </button>
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            <Link to="/user">Fetch File</Link>
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
