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


rules.getDiagonal = function (player, tiles){
    
    var arr = ['x', 'o', '', 'o', 'x', '', '', '', 'x'];

    var diagonalArr = [arr[0], arr[4], arr[8]];

    //return diagonalArr.every(function(elm){
        //return elm === player;
    });
};

//
// ////top left to bottom right
// rules.getDiagonalTB = function (diagnum, tiles) {
//     return tiles.filter(function (tile, index) {
//         return (index % 4) === diagnum;
//     })
// };
//

/////bottom right to top left
// rules.getDiagonalBT = function (diagnum, tiles) {
//     return tiles.filter(function (tile,index) {
//         return (index % 2) === diagnum
//     })
//}
module.exports = rules;