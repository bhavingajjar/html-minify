# html-minify

A Node.js package for minifying HTML strings, removing unnecessary whitespace, comments, and other optimizations.

## Installation

You can install `html-minify` using npm:

```bash
npm install @bhavingajjar/html-minify

const HTMLMinifier = require('node-html-minifier');
const minifier = new HTMLMinifier();
const minifiedHTML = minifier.htmlMinify('<html><body>   <p>Hello   World!</p>   </body></html>');
console.log(minifiedHTML);
