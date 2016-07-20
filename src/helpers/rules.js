var rules = {};

rules.getRow = function (i, tiles) {
    var row = Math.floor(i / 3);
    return tiles.filter(function(tile, index){
        return Math.floor(index / 3) === row;
    });
}

module.exports = rules;