const path = require('path');
const multer = require('multer');

const tmpDir = path.join(__dirname, '../', 'temp');

const multiConfig = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({
  storage: multiConfig,
})

module.exports = upload;