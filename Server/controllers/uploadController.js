// controllers/uploadController.js
const multer = require('multer');
const path = require('path');
const uploadModel = require('../models/uploadModel.js'); 

// Set up Multer storage options
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../Podcasts'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); // File naming with timestamp
  },
});

let upload = multer({ storage: storage });

// File upload controller
exports.uploadFile = (req, res) => {

  // Handle file upload request
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).send({ 
        message: "Error uploading file",
        error: err });
    }

    if (!req.file) {
      return res.status(400).send({ 
        message: "No file uploaded" 
        });
    }

    // Optionally save file data to a database using the model
    uploadModel.saveFileData(req.file);

    return res.send({
      message: `${req.file.originalname} uploaded successfully`,
      file: req.file
    });
  });
};
