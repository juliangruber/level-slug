var level = require('level');
var withSlug = require('./');
var sub = require('level-sublevel');

var db = sub(level(__dirname + '/db', {
  valueEncoding: 'json'
}));
withSlug('title', db);

db.put('post1', {
  title: 'a little title!'
}, function(err) {
  if (err) throw err;

  db.get('post1', function(err, value) {
    if (err) throw err;
    console.log(value);
  });
});
