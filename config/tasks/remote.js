import gulp from 'gulp'
// import plumber from 'gulp-plumber'
// import gif from 'gulp-if'
// import sourcemaps from 'gulp-sourcemaps'
// import babel from 'gulp-babel'
// import terser from 'gulp-terser'
// import concat from 'gulp-concat'
// import rollup from 'gulp-better-rollup'
// import resolve from 'rollup-plugin-node-resolve'
// import globals from 'rollup-plugin-node-globals'
// import commonjs from 'rollup-plugin-commonjs'
// import builtins from 'rollup-plugin-node-builtins'
// import sass from 'gulp-sass'
// import autoprefixer from 'gulp-autoprefixer'

// import { handleError, liveEnv, targets, project } from '../index'


// const scssPaths = project.sourceDirectory + '/src/remote-widget/style/**.s+(a|c)ss'
// const scssPaths = project.sourceDirectory + '/src/remote-widget/js/**.js'



export default function () {
    return function (done) {
      return gulp
        .series(
          'remoteJs', 'remoteStyles'
        )(done)
    }
}
