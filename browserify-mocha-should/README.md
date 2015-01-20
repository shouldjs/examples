`Browserify` require that you build test first, for automation you can use `watchify` module.

To build tests:
```
npm i
npm run build
```
Now you can open this index.html in browser. Don't forget to look on package.json to see how browserify called.
As an additional step you will need to combine you tests in some way (e.g. require each from one file, or concat them).