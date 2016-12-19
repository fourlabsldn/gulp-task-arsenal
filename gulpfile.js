/* eslint-disable quote-props */
// List all available tasks

const src = 'src';
const dest = 'dist';
const path = require('path');

const organiser = require('gulp-organiser');
organiser.registerAll('./gulp-tasks', {
  'watch': {
    src: '.',
    taskNames: ['sass'],
  },
  'sass': {
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
  'build': {
    src: './',
    tasks: ['link-dependencies', 'modify-timekit-booking', 'transpile-to-es5', 'concat'],
  },
  'karma-test': {
    src: [
      // Libraries
      'http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
      './dist/fl-booking.js',
      // Mockups
      './examples/fake-events-creator.js',
      // Test files
      './tests/*-spec.js',
    ],
    // Whether to close the browser after the tests or not.
    singleRun: false,
  },
});
