const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    req.body.avatar = file.originalname;
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const { mimetype } = file;
    if (
      mimetype === "image/png" ||
      mimetype === "image/jpg" ||
      mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    }
    cb(new Error("Only images are allowed"), false);
  },
});

module.exports = upload;
