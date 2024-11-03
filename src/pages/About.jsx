import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About FileShare</h1>
        <p className="text-gray-700 text-lg mb-4">
          FileShare is a modern, secure, and easy-to-use platform that allows you to transfer files using unique access codes. 
          Designed with simplicity and security in mind, FileShare ensures that your files are shared safely without any hassle.
        </p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Choose FileShare?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li className="mb-2">Quick and secure file transfers</li>
          <li className="mb-2">Unique code-based access for added privacy</li>
          <li className="mb-2">No sign-up required for easy sharing</li>
          <li className="mb-2">Supports a variety of file formats</li>
        </ul>
        <p className="text-gray-700 text-lg">
          We believe that file sharing should be as simple as possible. Whether you're sharing documents, photos, or any other 
          type of file, FileShare is designed to make the process effortless. Get started today and experience the ease of secure file sharing!
        </p>
      </div>
    </div>
  );
};

export default About;
