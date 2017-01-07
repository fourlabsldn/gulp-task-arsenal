# Gulp Task Arsenal

After spending too much time organising my `gulpfile.js` and reorganising old tasks every time I had a new project, I found out that the best way to organise gulp tasks is to keep them in separate files and use another file to keep all project paths. This way I can just add or remove task files without needing to change anything in the code.

In this repository I keep tasks that make my life easier, and that I often find myself using again and again. Being able to just drag and drop them is particularly sweet. Please feel free to contribute with tasks that you also find useful.  

I found copying and pasting the task files to be betten than adding them to NPM. By just copying the files, if I need the task to be slightly different I can just go to the file and change it. By posting it on NPM we lose the ability to change it.  

## How does it work?
It's all done using `gulp-organiser` a super simple organisation module. Keep your task files in the `gulp-tasks` folder and invoke them in the command line with `gulp <filename>`.

## Configuration
Some tasks require some configuration.
The configuration of all tasks is kept in the gulpfile.
In your gulpfile you will need to invoke gulp organiser using the `registerAll` method, which has this signature:

``` javascript
/*
  @method registerAll
  @param {String} folderPath - path to the folder containing the task files
  @param {Object} tasksConfig - each key is the name of a task file and each value its configuration
  @return {void}
*/
```
Here is an example of a `gulpfile` containing the configuration for the `sass` task.

``` javascript
const organiser = require('gulp-organiser');
organiser.registerAll('./gulp-tasks', {
  'sass': {
    src: 'src/styles/**/*.scss',
    dest: 'dest/styles',
  },
});
```

Here is the file structure for that to work

```
.
├── gulp-tasks
│   └── sass.js
├── gulpfile.js

```

Now you can just type `gulp sass` in the terminal and the magic will happen.
