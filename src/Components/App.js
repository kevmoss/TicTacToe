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


      ///flag : true,
      turn : 'x'
    };
  },

  // changeFlag: function () {
  //   this.setState({})
  // },


  tileClick: function(position, player){
    var tiles = this.state.tiles;
    tiles[position] = player;
    this.setState({tiles: tiles, turn: this.state.turn === 'x' ? 'o' : 'x'});



    ///flag: this.state.flag ? false : true,
  },


  render: function() {
    return <div>
      <h3>Noughts and Crosses</h3>
      <div id = "game">
        {this.state.tiles.map(function (tile, position) {
          return (
            <Tile status={tile} pos={position} turn = {this.state.turn} tileClick = {this.tileClick}/>
          );
        }, this) }
      </div>
      <Menu/>
    </div>;
  }
});

// var currentState = React.createClass({
//     render: function () {
//
//     }
// });

module.exports = App;
