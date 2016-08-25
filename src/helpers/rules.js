const _ = require('underscore');
var rules = {};

rules.getRow = function (rownum, tiles) {
  return tiles.filter(function (tile, index) {
    return Math.floor(index / 3) === rownum;
  });
};

rules.getCol = function (colnum, tiles) {
  return tiles.filter(function (tile, index) {
    return (index % 3) === colnum;
  });
};

rules.getDiagTB = function (diag, tiles) {
  return tiles.filter(function (tile, index) {
    return (index % 4) === diag;
  });
};

rules.getDiagBT = function (diag, tiles) {
  return tiles.filter(function (tile, index) {
    var result = index * 2;
    if (result < 13 && result !== 0) return (result % 4) === diag;
  });
};


rules.getLineWinner = function (line) {
  var uniqValues = _.uniq(line);
  if (uniqValues.length === 1) {
    return uniqValues[0];
  }
};

rules.getHorizontalWinner = function (tiles) {
  var winner;
  var i = 0;
  do {
    var row = this.getRow(i, tiles);
    winner = this.getLineWinner(row);
    i++;
  } while (!winner && i < 3);
  return winner;
};

rules.getVerticalWinner = function(tiles) {
  var winner;
  var i = 0;
  do {
    var col = this.getCol(i, tiles);
    winner = this.getLineWinner(col);
    i++;
  } while (!winner && i < 3);
  return winner;
};

rules.getDiagonalTBWinner = function(tiles){
  var winner;
  var i = 0;
  do {
    var diagTB = this.getDiagTB(i, tiles);
    winner = this.getLineWinner(diagTB);
    i++;
  } while (!winner && i < 3);
  return winner;
};

rules.getDiagonalBTWinner = function(tiles){
  var winner;
  var i = 0;
  do {
    var diagBT = this.getDiagBT(i, tiles);
    winner = this.getLineWinner(diagBT);
    i++;
  } while (!winner && i < 3);
  return winner;
};

module.exports = rules;