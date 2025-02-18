<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />

  <div>a plugin for <a href="https://github.com/spencermountain/wtf_wikipedia/">wtf_wikipedia</a></div>
  
  <!-- npm version -->
  <a href="https://npmjs.org/package/wtf-plugin-html">
    <img src="https://img.shields.io/npm/v/wtf-plugin-html.svg?style=flat-square" />
  </a>
  
  <!-- file size -->
  <a href="https://unpkg.com/wtf-plugin-html/builds/wtf-plugin-html.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/wtf-plugin-html/master/builds/wtf-plugin-html.min.js" />
  </a>
   <hr/>
</div>

<div align="center">
  <code>npm install wtf-plugin-html</code>
</div>

Output all, or part of a wikipedia article in HTML. 

This plugin can reliably convert links, bolds and italics to html - and it tries its best at more complex output like tables, lists, and templates.

```js
const wtf = require('wtf_wikipedia')
wtf.extend(require('wtf-plugin-html'))

let doc = wtf('hello [[world]]')
doc.html()
// 'hello <a href="./world">world</a>'
```

```html
<script src="https://unpkg.com/wtf_wikipedia"></script>
<script src="https://unpkg.com/wtf-plugin-html"></script>
<script defer>
  wtf.plugin(window.wtfHtml)
  wtf.fetch('Radiohead', function (err, doc) {
    console.log(doc.sentences()[0].html())
    // <b>Radiohead</b> are an English <a class="link" href="./Rock_music">rock</a> band ...
  })
</script>
```


MIT
