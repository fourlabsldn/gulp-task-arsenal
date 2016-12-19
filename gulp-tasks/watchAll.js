// Watch all tasks in gulpfile
const gulp = require('gulp');
const organiser = require('gulp-organiser');

const subTaskName = mainTask => t => `${mainTask.name}:${t.tasks[0].name}`;


module.exports = organiser.register((task, allTasks) => {
  const watchTaskName = subTaskName(task);

  allTasks.forEach(t => {
    gulp.task(watchTaskName(t), () => {
      gulp.watch(t.tasks[0].watch || t.tasks[0].src, [t.name]);
      console.log(`watching ${t.tasks[0].name}`);
    });
  });

  gulp.task(task.name, allTasks.map(watchTaskName));
});
