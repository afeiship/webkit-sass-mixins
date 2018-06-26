(function () {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('styles', function () {
    return gulp.src([
      // priority:
      'src/flexbox.scss',

      // no matter the priority:
      'src/animation.scss',
      'src/appearance.scss',
      'src/backface-visibility.scss',
      'src/background.scss',
      'src/border-radius.scss',
      'src/box-shadow.scss',
      'src/box-sizing.scss',
      'src/box.scss',
      'src/clearfix.scss',
      'src/content-columns.scss',
      'src/dib-grid.scss',
      'src/enlarge.scss',
      'src/filter.scss',
      'src/flexbox-gid.scss',
      'src/flip.scss',
      'src/grid.scss',
      'src/height.scss',
      'src/margin.scss',
      'src/padding.scss',
      'src/placeholder.scss',
      'src/size.scss',
      'src/square.scss',
      'src/tap-highlight-transparent.scss',
      'src/text-size-adjust.scss',
      'src/touch-callout.scss',
      'src/transformation.scss',
      'src/transition.scss',
      'src/triangle.scss',
      'src/user-select.scss',
    ])
      .pipe($.concat('webkit-sass-mixins.scss'))
      .pipe(gulp.dest('dist'));
  });

}());
