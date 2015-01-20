function return42(fail) {
  if(fail) throw new Error('boom');

  return 42;
}

if(typeof module != 'undefined') {
  module.exports = return42;
}
