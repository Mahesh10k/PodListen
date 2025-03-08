// models/uploadModel.js

const fs = require('fs');
const path = require('path');

// Function to save file metadata (e.g., to a database or log file)
// Currently, it just logs the file metadata to the console.
module.exports = {
  saveFileData: (file) => {
    // If you decide to use a database in the future, this is where the file info would be saved.
    console.log('File uploaded:', {
      originalname: file.originalname,
      filename: file.filename,
      size: file.size,
      path: path.join(__dirname, '../Podcasts', file.filename), 
    });

    // Example of storing metadata in a file (for future usage or logging purposes)
    const fileData = {
      originalname: file.originalname,
      filename: file.filename,
      size: file.size,
      path: path.join(__dirname, '../Podcasts', file.filename),
    };

    // Save file info into a JSON file (you could replace this with a database call)
    fs.appendFileSync('upload-log.json', JSON.stringify(fileData) + '\n');
  }
};
