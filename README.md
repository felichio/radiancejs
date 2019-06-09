# radiancejs
Functional Programming in Javascript 

**_This library was built for educational purposes._**

Briefly, it does 4 things:
1. It contains a bunch of helper higher-order functions (eg. compose, pipe, curry) with more than one implementation (Of course, one is exported by default, but you can study the source code to view the others).
2. It transformes some of the array methods to their curried functional equivalents.
3. It produces a list data structure. It is a recursively defined data structure (purely functional) that resembles a linked list with cons cells.
4. It produces a stream data structure. Stream is a lazy equivalent of the list data structure. It utilizes thunks to simulate the laziness (Nothing new here, you can achieve the same behaviour through js generators)


Installation
------------
#### Using it whith Node.js

```bash
$ npm install radiancejs
```

#### Using it directly in the browser:
Firsty navigate to a newly created folder for your project and run the command
```bash
$ npm install radiancejs
```
You can find the distribution files inside the path ./node_modules/radiancejs/dist

```html
<script src="path/to/distributionFiles/radiancejs.js"></script>
```

If for some reason you need the unminified version you have to manually build in development (see building instructions)

Building
--------

Navigate to the node_modules folder of your project and find the radiancejs package. Inside it run the command
```bash
$ npm install
```
to install the development dependencies. Now you can manually add functions to the library. Just create the new file in the source folder and add a record to the exporter.js file (view it to see the pattern).

You can build in production mode with the command

```bash
$ npm run build
```

or in development mode (unminified version)
```bash
$ npm run build-dev
```
Development building creates test/radiance.html. It is preloaded with the library so you can expreriment with it in the browser.

Testing
--------

Navigate to the node_modules folder of your project and find the radiancejs package. Inside it run the command
```bash
$ npm install jest
```
to install the testing suite. You can manually add tests inside the test folder (be sure to adhere to the naming pattern)

To run the test suite
```bash
$ npm run test
```

Usage
--------
