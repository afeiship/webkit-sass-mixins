(function () {
  'use strict';

  var gulp = require('gulp');
  var fs = require('fs');
  //import
  fs.readdirSync('./build').map(function (file) {
    require('./build/' + file);
  });

  gulp.task('default', gulp.series(['clean', 'styles']));
})();
