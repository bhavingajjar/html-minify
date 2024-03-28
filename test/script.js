// test/script.js
const HTMLMinifier = require('@bhavingajjar/html-minify');

const minifier = new HTMLMinifier();

const minifiedHTML = minifier.htmlMinify('<html><body>   <p>Hello   World!</p>   </body></html>');
console.log(minifiedHTML);
