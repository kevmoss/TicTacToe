var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('./Grid');

var Table = React.createClass({
  render: function () {
    return(
      <div className="table">
        <Grid></Grid>
      </div>
    )
  }
});


module.exports = Table;