'use strict'
const childProcess = require('child_process')
let git_commit_hash = childProcess.execSync("git rev-parse HEAD").toString().trim()
git_commit_hash = "'" + git_commit_hash + "'"
module.exports = {
  NODE_ENV: '"production"',
  GIT_COMMIT_HASH: git_commit_hash
}
