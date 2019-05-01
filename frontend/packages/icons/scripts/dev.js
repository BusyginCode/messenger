const sh = require('shelljs')

const { mapDir, icon, colored, watchDir } = require('./svg-mapper')

const tasks = [mapDir(icon.svgsPath, icon.outDir), mapDir(colored.svgsPath, colored.outDir)]

Promise.all(tasks).then(() => {
  watchDir(icon.svgsPath, icon.outDir)
  watchDir(colored.svgsPath, colored.outDir)

  sh.exec('yarn build:components --watch', { async: true })
})
