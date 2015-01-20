
define(['should', 'my_code'], function() {
  it('should work', function() {
    return42.should.be.a.Function;
  });

  it('should work really', function() {
    return42.should.not.throw();
  });
});