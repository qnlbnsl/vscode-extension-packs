const fs = require('fs');
const data = require('/home/qnlbnsl/.vscode-server/extensions/extensions.json')
const existing_data = require('./package.json')
const id = []
const extensionPack = []
data.forEach((item) => {
  // console.log(item.identifier.id, ",")
  id.push(item.identifier.id)
})
existing_data.extensionPack.forEach((item) => {
  extensionPack.push(item)
})
id.sort()
extensionPack.sort()
const missing = []
id.forEach((item) => {
  if (!extensionPack.includes(item)) {
    missing.push(item)
  }
})
console.log(missing)
