var Merge = require('broccoli-merge-trees');

module.exports = new Merge(['public', 'bower_components/font-awesome', 'bower_components/normalize-css'], {overwrite: true});
