const Path = require('path')
const fs = require('fs')
const glob = require("glob").sync
const pug = require('pug')

const execSync = require('child_process').execSync;
const sh = (cmd) => console.log(execSync(cmd).toString())

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const PUGDIR = 'src/pug'
const DEST = 'build'
const ENV = argv.prod ? 'prod' : 'dev'

const relative_without_ext = (base, path) => {
  const pathObj = Path.parse(Path.relative(base, path))
  pathObj.base = Path.basename(pathObj.base, pathObj.ext)
  return Path.format(pathObj)
}

const pugPaths = glob(`${PUGDIR}/**/*.pug`)
for(let pugPath of pugPaths) {
  const page = Path.basename(pugPath, '.pug')
  const rel = relative_without_ext(PUGDIR, pugPath)
  if (page.startsWith('_')) continue
  console.log(`Rendering ${page}`)
  const destPath = `${DEST}/${rel}.html`
  const destDir = Path.dirname(destPath)
  const PATH = rel=='index' ? '/' : `/${rel}`
  const html = pug.renderFile(pugPath, {require, ENV, PATH})
  fs.mkdirSync(destDir, {recursive: true})
  fs.writeFileSync(destPath, html)
}

console.log('Copying static files')
sh(`cp -R src/static ${DEST}/static`)
sh(`du -hd 3 ${DEST}`)
