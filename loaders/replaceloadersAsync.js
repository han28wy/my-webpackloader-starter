
module.exports = function(source){
    callback = this.async();
    setTimeout(()=>{
        const result = source.replace('Hello', 'HHHHH')
        callback(null, result)
    }, 1000)
}