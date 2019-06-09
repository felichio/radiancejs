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
Firsty navigate to a newly created folder and run the command
```bash
$ npm install radiancejs
```
You can find the distribution files inside the path ./node_modules/radiancejs/dist

```html
<script src="path/to/distributionFiles/radiancejs.js"></script>
```

or the minified version:

```html
<script src="path/to/distributionFiles/radiancejs.min.js"></script>
```

