var should = require('should');
var return42 = require('../my_code');

it('should work with build script', function() {
  return42.should.be.a.Function;
});