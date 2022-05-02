// Основной модуль
import gulp from 'gulp'
//Импорт путей
import { path } from './gulp/config/path.js'
//Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

//Передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Импорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { server } from './gulp/tasks/server.js'

//Наблюдатель за файлами
function watcher() {
    gulp.watch(path.watch.files, copy),
    gulp.watch(path.watch.img, copy),
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
}

const mainTasks = gulp.parallel(copy, html, scss, js)

//Построение сценариев
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher))

//Сценарий по умолчанию
gulp.task('default', dev)