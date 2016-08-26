var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./components/Table');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className="message">Noughts and Crosses</h3>
        <Table></Table>
      </div>

    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));