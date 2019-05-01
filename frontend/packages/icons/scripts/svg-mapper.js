const path = require('path')
const sh = require('shelljs')
const chokidar = require('chokidar')
const svgr = require('@svgr/core').default
const svgoPlugin = require('@svgr/plugin-svgo').default
const jsxPlugin = require('@svgr/plugin-jsx').default

function getJsPath(svgPath, outDir) {
  const fileName = path.basename(svgPath, '.svg')
  const folders = svgPath.split('/')
  const folderIndex = folders.findIndex(f => f === 'svg')
  folders.splice(0, folderIndex + 1)
  const fPath = folders.slice(0, -1).join('/')
  return `${outDir}/${fPath ? `${fPath}/` : ''}${fileName}.js`
}

function map(file, outDir) {
  const fileName = path.basename(file, '.svg')
  const svgCode = sh.cat(file)
  const options = {
    semi: false,
    singleQuote: true,
    title: false,
    plugins: [svgoPlugin, jsxPlugin],
    svgProps: {
      id: 'resource-' + path.basename(file),
      name: path.basename(file, '.svg')
    },
    expandProps: 'end',
    svgo: true,
    svgoConfig: {
      removeViewBox: false,
      plugins: [
        {
          prefixIds: {
            prefix: fileName
          }
        }
      ]
    },
    template: ({ template }, opts, { imports, componentName, props, jsx, exports }) => {
      const displayName = `Svg(${fileName})`
      return template.ast`${imports}
      class ${componentName} extends React.PureComponent {
        constructor() {
          super()
          this.state = {
            ready: false
          }
        }
        componentDidMount() {
          this.setState({ready: true})
        }
        render() {
          const props = this.props;
          if ( this.state.ready ) {
            return ${jsx};
          } else {
            return null;
          }
        }
      }

      ${componentName}.displayName = '${displayName}'

      ${exports}`
    }
  }

  return svgr(svgCode, options)
    .then(jsCode => {
      const outFile = getJsPath(file, outDir)
      try {
        sh.touch(outFile)
      } catch (e) {
        sh.mkdir(
          '-p',
          `${outFile
            .split('/')
            .slice(0, -1)
            .join('/')}`
        )
        sh.touch(outFile)
      }
      sh.ShellString(jsCode).to(outFile)
      sh.echo(file, '->', outFile)
    })
    .catch(e => console.log(file, e))
}

function mapDir(svgsPath, outDir) {
  sh.echo('Recreating', outDir)
  sh.rm('-rf', outDir)
  sh.mkdir(outDir)

  sh.echo('Running SVGR for', svgsPath)
  const promises = sh.ls(svgsPath).reduce((p, f) => [...p, map(f, outDir)], [])

  return Promise.all(promises)
}

function watchDir(svgsPath, outDir) {
  sh.echo('Watching', svgsPath)

  const options = {
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 50,
      pollInterval: 10
    }
  }

  chokidar
    .watch(svgsPath, options)
    .on('add', path => map(path, outDir))
    .on('change', path => map(path, outDir))
    .on('unlink', path => {
      const mappedFile = getJsPath(path, outDir)
      sh.echo('Removing', mappedFile)
      sh.rm(mappedFile)
    })
}

module.exports = {
  getJsPath,
  map,
  mapDir,
  watchDir,
  icon: {
    svgsPath: './src/icon/svg/*/*.svg',
    outDir: './src/icon/svgr'
  },
  colored: {
    svgsPath: './src/colored/svg/**/*.svg',
    outDir: './src/colored/svgr'
  }
}
