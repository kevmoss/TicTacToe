var React = require('react');
var Tile = require('./Tile.js');
var Menu = require('./Menu.js');



///THIS IS THE GAME CONTAINER - THE OVERALL PARENT
var App = React.createClass({
  getInitialState: function() {
    return {
      tiles: [
        "", "", "", "", "", "", "", "", ""
      ],

      turn: 'x',
      ///gameIsFinished: false

    };
    // where are the tiles?
    // is there a winning formula?
    // has the game finished/drawn
    // if not, carry on.


    // If there's a winner OR if the tiles are full
    // return;
  },

  toCheck: function(line){
    var firstLine = line [0];
    return _.every(line, function () {
      return val === firstLine

    })
  },


  tileClick: function(position, player, e){
    if(e.target.innerHTML) return;
    var tiles = this.state.tiles;
    tiles[position] = player;
    this.setState({tiles: tiles, turn: this.state.turn === 'x' ? 'o' : 'x'}, function(){
      
    });


  },


  render: function() {
    return <div>
      <div className="header">
      <h1>Noughts and Crosses</h1>
        </div>
      <div id = "game">
        {this.state.tiles.map(function (tile, position) {
          return (
            <Tile status={tile} pos={position} turn = {this.state.turn} tileClick = {this.tileClick}/>
          );
        }, this) }
      </div>
      <Menu />
    </div>;
  }
});


module.exports = App;
