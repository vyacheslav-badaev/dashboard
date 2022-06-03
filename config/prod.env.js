'use strict'
const childProcess = require('child_process')
let commit_hash = childProcess.execSync("git rev-parse HEAD").toString().trim()
commit_hash = "'" + commit_hash + "'"
let unix_timestamp = Date.now().toString()
unix_timestamp = "'" + unix_timestamp + "'"
module.exports = {
  NODE_ENV: '"production"',
  API_URL: `"https:
  BUILD_TIME_COMMIT_HASH: commit_hash,
  BUILD_TIME_UNIX_TIMESTAMP: unix_timestamp
}
