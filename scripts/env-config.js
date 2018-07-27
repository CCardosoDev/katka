const serialize = require('serialize-javascript');
const fs = require('fs')
const env = require('react-scripts/config/env')(process.env.PUBLIC_URL || '')

// we only need to know the value of dir argument
const args = process.argv.slice(2)
const dir = /dir=/i
const pathToWrite = args
  .filter(key => dir.test(key))
  .slice(0, 1)
  .reduce((prev, curr) => prev + curr.replace(dir, ''), '')

const fileToWrite = `${pathToWrite}/env-config.js`
const content = `window.katkaEnv=${serialize(env.raw, {isJSON: true})}`

try {
  fs.writeFileSync(fileToWrite, content, 'utf8')
} catch (err) {
  console.log('Error while writing env-config file:', err.message)
  process.exit(1)
}
