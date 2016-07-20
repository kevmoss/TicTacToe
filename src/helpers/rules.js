var rules = {};

rules.getRow = function (rownum, tiles) {
    return tiles.filter(function(tile, index){
        return Math.floor(index / 3) === rownum;
    });
};

rules.getCol = function (colnum, tiles) {
    return tiles.filter(function(tile, index){
        return (index % 3) === colnum;
    });
};

// rules.getDiag = function (i, tiles) {
//   var diag = ()  
// };

rules.getDiagonalTB = function (diagnum, tiles) {
    return tiles.filter(function (tile, index) {
        return ((3+1)) === diagnum;
    })
}


module.exports = rules;