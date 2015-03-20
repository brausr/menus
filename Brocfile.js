/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    'ember-cli-bootstrap-sassy': {
        'js': false,
        'glyphicons': false
    }
});

// snackbarjs
app.import('bower_components/snackbarjs/dist/snackbar.min.css');
app.import('bower_components/snackbarjs/themes-css/material.css');
app.import('bower_components/snackbarjs/dist/snackbar.min.js');

module.exports = app.toTree();
