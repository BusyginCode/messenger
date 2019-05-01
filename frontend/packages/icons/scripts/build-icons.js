const { mapDir, icon, colored } = require('./svg-mapper')

mapDir(icon.svgsPath, icon.outDir)
mapDir(colored.svgsPath, colored.outDir)
