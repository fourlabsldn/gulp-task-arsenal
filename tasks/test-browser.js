const os = require('os');
const gulp = require('gulp');
const open = require('gulp-open');
const watch = require('gulp-watch');
const organiser = require('gulp-organiser');
const jasmineBrowser = require('gulp-jasmine-browser');

function browserName() {
  if (os.platform() === 'linux' || os.platform() === 'darwin') {
    return 'google chrome';
  }
  if (os.platform() === 'win32') {
    return 'chrome';
  }
  return 'firefox';
}

module.exports = organiser.register((task) => {
  gulp.task(task.name, () => {
    gulp.src(task.src)
    .pipe(watch(task.src))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 8888 }))
    .pipe(open({
      uri: 'http://localhost:8888',
      app: browserName(),
    }));
  });
});
