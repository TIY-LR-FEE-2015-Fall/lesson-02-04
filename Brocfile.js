var Merge = require('broccoli-merge-trees');
var Sass = require('broccoli-sass');

var styles = new Sass(['sass'], 'app.scss', 'app.css');

module.exports = new Merge(['public', styles, 'bower_components/font-awesome', 'bower_components/normalize-css'], {overwrite: true});
