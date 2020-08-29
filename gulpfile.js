const { watch } = require('gulp');
const server = require('browser-sync').create();

const startServer = () => {
  server.init({
    server: '',
    notify: false,
    open: false
  });

  watch('index.html', reload);
  watch('css/style.css', reload);
}

const reload = (done) => {
  server.reload();
  done();
}

exports.dev = startServer
