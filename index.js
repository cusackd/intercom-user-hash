const crypto = require('crypto');

module.exports = function (secret, data) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(data);
  console.log(hmac.digest('hex'));
  return hmac.digest('hex');
};
