const React = require('react');
var ReactDOM = require('react-dom');
const Cell = require('./Cell');
const rules = require('../rules');

var Grid = React.createClass({
  render: function () {
    var cells = [];
    for (var i = 0; i < 9; i++) {
      cells.push(<Cell display={this.state.board[i]} key={i} passUpClick={this.getCellClick} number={i}></Cell>)
    }
    let winner = this.state.winner;
    let showWinner = winner ? (
      <div className="winner">
        <h1>Player {winner} Wins</h1>
        <button className="button" onClick={this.resetGame}>Reset</button>
      </div>
    ) : null;
    return (
      <div>
        <div className="grid">
          {cells}
        </div>
        {showWinner}
      </div>
    )
  },

  getInitialState: function () {
    return ({
      board: ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
      turn: 'X',
      turnNumber: 0,
      resetting: false,
      gridSize: 3,
      winner: null
    })
  },
  checkForWinner: function (index, board) {
    var gridSize = this.state.gridSize;

    var possibleWins = [
      rules.getRows(index, board, gridSize),
      rules.getColumn(index, board, gridSize),
      rules.getDiagTL(index, board, gridSize),
      rules.getDiagBL(index, board, gridSize)
    ];

    possibleWins = possibleWins.map(function (winArray) {
      return rules.everyInArray(winArray, this.state.turn);
    }.bind(this));


    for (var i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i] === true) {
        this.setState({
          winner: this.state.turn
        });
      }
    }
  },

  incrementTurnNumber: function () {
    var curTurnNumber = this.state.turnNumber;
    this.setState({turnNumber: (curTurnNumber += 1)}, function () {
      if (this.state.turnNumber === 9) {
        alert('Draw!');
        this.resetGame();
      }
    });

  },
  resetGame: function () {
    this.setState(this.getInitialState());
  },
  updateGameBoard: function (cellNum) {
    var currentBoard = this.state.board;
    currentBoard[cellNum] = this.state.turn;
    this.setState({turn: currentBoard});
  },
  togglePlayer: function () {
    var current = this.state.turn;
    var newPlayer = current === 'O' ? 'X' : 'O';
    this.setState({turn: newPlayer});
  },
  getCellClick: function (cellNum) {
    if (!this.state.winner) {
      this.updateGameBoard(cellNum);
      this.checkForWinner(cellNum, this.state.board);
      this.incrementTurnNumber();
      this.togglePlayer()
    }
  },
});

module.exports = Grid;
