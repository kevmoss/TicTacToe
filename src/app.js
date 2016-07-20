/**
 * Created by KevinMoss on 19/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./Components/App.js');
var Tile = require('./Components/Tile.js');
var Menu = require('./Components/Menu.js');

ReactDOM.render(<App />,
  document.getElementById('app'));