const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../Config/Cloudinary.js");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "podcasts",
    resource_type: "auto"
  }
});

const upload = multer({ storage });

module.exports = upload;
