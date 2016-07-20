/**
 * Created by KevinMoss on 19/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');


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




var currentState = React.createClass({
    render: function () {

    }
});

/////THE TILES COMPONENT
var Tile = React.createClass({
    clickHandler: function () {
      this.props.tileClick(this.props.pos, this.props.turn);
    },

  render: function () {
    return <div className = {this.props.status === '' ? 'tile' : 'tile status-' + this.props.status} onClick = {this.clickHandler}>
      {this.props.status}
    </div>;
  }
});


////THIS IS THE MENU, WHERE CURRENT PLAYER TURN, OPTION TO RESET/PLAY AGAIN WILL BE DISPLAYED


var Menu = React.createClass({
  render: function () {
    return <div id="menu"></div>;

  }
});


ReactDOM.render(<App />,
  document.getElementById('app'));