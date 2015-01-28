var flatMerge = require('flat-merge');

function flatMergeN(){
    var args = Array.prototype.slice.call(arguments),
        result = {};

    while(args.length){
        result = flatMerge(result, args.shift());
    }

    return result;
}

module.exports = flatMergeN;