const HttpError = (status, msg) => {
  const err = new Error(msg);
  console.log('err:', err);
  err.status = status;
  console.log('err:', err);
  return err;
};

module.exports = HttpError;
