import config        from '../config';
import gulp          from 'gulp';
import merge         from 'merge-stream';
import templateCache from 'gulp-angular-templatecache';

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  const indexFile = gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir));

  const callbackFile = gulp.src(config.views.callback)
    .pipe(gulp.dest(config.buildDir));

  //This really doesn't belong here, but putting the libs folder in the build directory'
  const libDirectory = gulp.src('app/libs/**/*')
    .pipe(gulp.dest(config.buildDir + '/libs'));  

  // Process any other view files from app/views
  const views = gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest));

  return merge(indexFile, views);

});
