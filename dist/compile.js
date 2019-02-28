const marked = require('marked')
const os = require('os')
function compile (markdown) {
  const tokens = marked.lexer(markdown).filter(t => {
    return t.type === 'code' && !t.hasOwnProperty('lang')
  })
  const newline = (os.platform() === 'win32') ? '\r\n' : '\n'
  return tokens.map(t => t.text).join(newline)
}

module.exports = compile