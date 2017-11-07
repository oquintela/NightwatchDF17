var fridge = require ('./loadjson');

module.exports = {
  globalVar : fridge.loadjson(),
  // for development environment have a different value set
  development : {
    globalVar : 'dev-value'
  },

  acceptance : {
    globalVar : 'other-value'
  }
}
