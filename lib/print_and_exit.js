// print_and_exit.js
// A wrapper of print for the CLI that exits with a non-zero code
// in case of errors
const print = require('./print')

module.exports = (err, val) => {
  print(err, val)
  const exitCode = err == null ? 0 : 1
  process.exit(exitCode)
}
