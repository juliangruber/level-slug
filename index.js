var slugify = require('slugg');

module.exports = withSlug;

// TODO: pre hook syntax

function withSlug(prop, db) {
  db.pre(function(change) {
    if (change.type != 'put') return;
    change.value.slug = slugify(change.value[prop]);
  });
}

