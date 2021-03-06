
# level-slug

Add slugs to your data.

[![build status](https://secure.travis-ci.org/juliangruber/level-slug.png)](http://travis-ci.org/juliangruber/level-slug)

## Example

```js
var level = require('level');
var sub = require('level-sublevel');
var withSlug = require('level-slug');

var db = sub(level(__dirname + '/db', {
  valueEncoding: 'json'
}));
withSlug('title', db);

db.put('post1', {
  title: 'a little post!'
}, function(err) {
  if (err) throw err;

  db.get('post1', function(err, value) {
    if (err) throw err;

    console.log(value);
    // => {
    //      title: 'a little post!',
    //      slug: 'a-little-post'
    //    }
  });
});
```

## API

### withSlug(prop, db)

For every record created or updated, make sure it has a `slug` created
from `prop`.

`db` needs to have
[level-sublevel](https://github.com/dominictarr/level-sublevel) installed
on it.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install level-slug
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
