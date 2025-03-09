

const fs = require('fs');
const path = require('path');

module.exports = {
  saveFileData: (file) => {
    if (!file) {
      console.error("No file provided to saveFileData");
      return;
    }

    const fileData = {
      originalname: file.originalname,
      filename: file.filename,
      size: file.size,
      path: file.path, // Use multer-generated path
    };

    console.log('File uploaded:', fileData);

    // Ensure log file exists before appending
    const logFile = 'upload-log.json';
    if (!fs.existsSync(logFile)) {
      fs.writeFileSync(logFile, ''); 
    }

    // Append file info to log
    fs.appendFileSync(logFile, JSON.stringify(fileData) + '\n', 'utf8');
  }
};

