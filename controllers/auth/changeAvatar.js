const fs = require('fs/promises');
const path = require('path');
const jimp = require('jimp');

const { User } = require('../../models');

const newDir = path.join(__dirname, '../../', 'public', 'avatars');

const changeAvatar = async (req, res) => {
  const { path: tmpUpload, originalname } = req.file;
  const { _id } = req.user;

  const filename = `${_id}_${originalname}`;
  const result = path.join(newDir, filename);
  await fs.rename(tmpUpload, result);

  const file = await jimp.read(result);
  const resizedFile = await file.resize(250, 250);
  await resizedFile.write(result);

  const avatarURL = path.join('avatars', filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = changeAvatar;
