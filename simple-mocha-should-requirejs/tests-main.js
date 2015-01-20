requirejs.config({
  shim: {
    my_code: {
      exports: 'return42'
    }
  },
  paths: {
    my_code: '../my_code',
    should: './node_modules/should/should'
  }
});

requirejs(['./tests'], function() {
  mocha.run();
});