const React = require('react');
const ReactDOM = require('react-dom');

var Cell = React.createClass({
  handleClick: function () {
    if(this.props.display !== 'n'){
    }else{
      this.props.passUpClick(this.props.number);
    }
  },
  render: function () {
    var displayObj = {
      n: '',
      O: 'O',
      X: 'X'
    };
    var tile = displayObj[this.props.display];
    return (
      <div className="cell" onClick={this.handleClick}>
        <h1>{tile}</h1>
      </div>
    )
  }
});

module.exports = Cell;