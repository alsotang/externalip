var superagent = require('superagent');

var getip = function (callback) {
  superagent
    .get('http://curlmyip.com/')
    .end(function (err, res) {
      if (err) {
        return callback(err);
      }
      var ip = res.text.trim();
      callback(null, ip);
    });
};

module.exports = exports = getip;
