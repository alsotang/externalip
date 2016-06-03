var externalip = require('../');
var should = require('should');

describe('externalip.test.js', function () {
  this.timeout(10 * 1000);
  it('should return external ip', function (done) {
    externalip(function (err, ip) {
      console.log('your ip', ip)
      ip.should.match(/^\d+.\d+.\d+.\d+$/);
      done(err);
    });
  });
});
