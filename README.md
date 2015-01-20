# Examples of tests

All examples assume you have node and npm, and you know what is it. 

First do in root of repo:

```
npm i
```

## Most simple way - include all <script>'s

Look in `simple-mocha-should` directory to look on most basic way to run tests with `mocha` and `should`. To repeat such steps:

Assume you in project folder

```shell
//if it is not inited before, provide some answers
npm init

// install dependencies
npm i --save-dev mocha should

./node_modules/.bin/mocha init folder_with_browser_tests
```

This will create basic structure you can see in `simple-mocha-should`, now you need to add script tags 
for should **before** your tests (mocha will add tests.js file by default). That is all, simple and practically useless.
//if it is not inited before, provide some answers
To run this example run `npm run browser` and open http://localhost:8080/simple-mocha-should/index.html
 
## The same simple way but load tests with requirejs

In this example we load everything with requirejs, you can see simple-mocha-should-requirejs to understand how it works.

To run this example run `npm run browser` and open http://localhost:8080/simple-mocha-should-requirejs/index.html

## Build test scripts with browserify

To run build of tests `npm run build` in folder `browserify-mocha-should` and then run as before:

`npm run browser` and open http://localhost:8080/browserify-mocha-should/index.html

## Adding zuul

zuul allow automatically build tests in bundle and have good integration with sauce-labs. 
But you still need locally open each browser by hands for tests

## Launch browsers with karma

Karma allow to run browser (also it sauce labs integration). All configuration happen in karma.conf.js files. 
To run tests just `npm test`.

`karma-browserify-mocha-should` contain example of using browserify to bundle files.

`karma-requirejs-mocha-should` contain example of using requirejs to load files





