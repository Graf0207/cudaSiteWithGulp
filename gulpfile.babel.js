'use strict'

import styles from './config/tasks/styles'
import js from './config/tasks/js'
import clean from './config/tasks/clean'
import fonts from './config/tasks/fonts'
import images from './config/tasks/images'
import watch from './config/tasks/watch'
import build from './config/tasks/build'
import remote from './config/tasks/remote'
import remoteStyles from './config/tasks/remoteStyles'
import remoteJs from './config/tasks/remoteJs'


exports.styles = styles()
exports.js = js()
exports.clean = clean()
exports.fonts = fonts()
exports.images = images()
exports.watch = watch()
exports.default = build()
exports.remote = remote()
exports.remoteStyles = remoteStyles()
exports.remoteJs = remoteJs()