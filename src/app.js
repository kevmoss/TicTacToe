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
        "", "", "",
        "", "", "",
        "", "", "",
      ],
    };
  },

  render: function() {
    return (
      <div>
        <h3>Noughts and Crosses</h3>
        <div id = "game">
          {this.state.tiles.map(function () {
          return (
            <Tile/>
          );
          }, this) }
        </div>
        <Menu/>
      </div>
    )}
});


////THIS IS THE MENU, WHERE CURRENT PLAYER TURN, OPTION TO RESET/PLAY AGAIN WILL BE DISPLAYED
var Menu = React.createClass({
  render: function () {
    return <div id="menu"></div>;

  }
});



/////THE TILES COMPONENT
var Tile = React.createClass({
  render: function () {
    return <div className = 'tile'></div>;
  }
});



ReactDOM.render(<App />,
  document.getElementById('app'));