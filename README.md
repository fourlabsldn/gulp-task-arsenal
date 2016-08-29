# Gulp Task Arsenal

After spending too much time organising my `gulpfile.js` and reorganising old tasks every time I had a new project, I found out that the best way to organise gulp tasks is to keep them in separate files and use another file to keep all project paths. This way I can just add or remove task files without needing to change anything in the code.

## How does it work?
'Gulpfile.js' loads all tasks in the task folder automatically, and tasks like `watch` load other tasks in their folders too. This way, just by dropping a task file in the tasks folder you can already run `gulp my-task` and it will work.