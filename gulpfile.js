// List all available tasks

const src = 'src';
const dest = 'dist';
const path = require('path');

const organiser = require('gulp-organiser');
organiser.registerAll('./tasks', {
  sass: {
    src: path.join(src, 'styles/**/*.scss'),
    dest: path.join(dest, 'styles'),
  },
  'copy-static': {
    src,
    dest,
    map: {
      [path.join(src, 'js_static/**/*')]: 'public/js',
    },
  },
  'transpile-react': {
    watch: path.join(src, 'js', '/**/*.js'),
    src: path.join(src, 'js', 'main.js'),
    dest: './public/js',
    config: {
      external: ['react', 'react-dom'],
      exports: 'named',
      format: 'cjs',
    },
  },
  'link-dependencies': {
    dest: './public/js',
  },
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['transpile-react'], // reload page when these tasks happen
    startPath: 'example',
    baseDir: './',
  },
  'test-browser': {
    src: './tests/unit/unit.js',
  },
  'test-headless': {
    src: './tests/unit/unit.js',
  },
  'build-elm': {
    src: 'src/Main.elm',
    dest: 'dist',
    moduleName: 'ModalRouter',
    ext: 'js',
  },
});
