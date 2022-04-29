const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (_, file, cb) => cb(null, "./public"),
  filename: (_, file, cb) => cb(null, "image.jpg"),
});
function fileFilter(req, file, cb) {
  const acceptedType = ["image/png", "image/jpeg", "image/jpg"];
  if (acceptedType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
const upload = multer({ storage, fileFilter });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.status(201).json({
      message: "File uploaded successfully",
    });
  } else {
    res.status(400).json({
      message: "File upload failed",
    });
  }
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/image.jpg");
});

app.listen(3000, () => console.log("Server started" + 3000));
