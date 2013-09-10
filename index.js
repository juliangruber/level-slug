var slugify = require('slugg');

module.exports = withSlug;

function withSlug(prop, db) {
  var put = db.put;
  var batch = db.batch;

  db.put = function(key, value, fn) {
    value.slug = slugify(value[prop]);
    put.call(db, key, value, fn);
  };

  db.batch = function(ops, fn) {
    ops.forEach(function(op) {
      if (op.type != 'put') return;
      op.value.slug = slugify(op.values[prop]);
      return 
    });

    batch.call(db, ops, fn);
  };

  return db;
}

