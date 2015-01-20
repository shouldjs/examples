it('should work', function() {
  return42().should.be.Number.and.equal(42);

  return42.should.not.throw();
});