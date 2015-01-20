var should = require('should');
var return42 = require('../my_code');

it('should work', function() {
  return42.should.be.a.Function;
});