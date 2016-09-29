// This task will start all tasks in this folder
const gulp = require('gulp');
const organiser = require('gulp-organiser');

module.exports = organiser.register((task) => {
  // Watch files in the watch folder
  const watchTasks = organiser.loadFrom(`./${task.name}`);
  const watchTaskNames = watchTasks.map(t => t.name);
  gulp.task(task.name, watchTaskNames);
});
