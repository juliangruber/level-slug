var level = require('level');
var withSlug = require('./');
var test = require('tape');

test('slug', function(t) {
  t.plan(3);

  var db = level(__dirname + '/db', {
    valueEncoding: 'json'
  });
  withSlug('title', db);

  db.del('post1', function(err) {
    db.put('post1', {
      title: 'a little title'
    }, function(err) {
      t.error(err);

      db.get('post1', function(err, value) {
        t.error(err);
        t.equal(value.slug, 'a-little-title');
      });
    });
  });
});

