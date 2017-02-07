var rules = {};

rules.getRows = function (index, board, gridSize) {
  var row = Math.floor(index / gridSize);

  return board.filter(function (cell, i) {
    return Math.floor(i / 3) === row;
  });


},
  rules.getColumn = function (index, board, gridSize) {
    var col = index % gridSize;

    return board.filter(function (cell, i) {
      return i % gridSize === col;
    });

  },

  rules.getDiagTL = function (index, board, gridSize) {
    var diags = [];
    for (var i = 0; i < gridSize; i++) {
      diags.push(board[(gridSize + 1) * i]);
    }
    return diags;
  },

  rules.getDiagBL = function (index, board, gridSize) {
    var diags = [];
    for (var i = 1; i < gridSize + 1; i++) {
      diags.push(board[(gridSize - 1) * i]);
    }
    return diags;
  },

  rules.everyInArray = function (array, check) {
    if(Array.isArray(array)){

      for(var i = 0; i < array.length;i++){
        if(array[i] !== check){
          return false
        }
      }
      return true
    }
  },
  module.exports = rules;
