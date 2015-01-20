define(['my_code', 'should'], function(return42, should){
  it('should work even with requirejs', function() {
    return42.should.be.a.Function;
  });
});