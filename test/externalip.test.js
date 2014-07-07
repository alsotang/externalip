var externalip = require('../');
var should = require('should');

describe('externalip.test.js', function () {
  it('should return external ip', function (done) {
    externalip(function (err, ip) {
      ip.should.match(/\d+.\d+.\d+.\d+/);
      done(err);
    });
  });
});