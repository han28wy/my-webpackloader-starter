const loaderUtils = require('loader-utils')

module.exports = function(source){
    const options = loaderUtils.getOptions(this);
    const result = source.replace('word', options.name)
    this.callback(null, result)
}
