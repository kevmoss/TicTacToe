/**
 * Created by stephensmith on 19/07/2016.
 */


var React = require('react');
var ReactDOM = require('react-dom');


///THIS IS THE GAME CONTAINER - THE OVERALL PARENT
var App = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Noughts and Crosses</h3>
                <div id = "game">
                    ///make game tiles appear here
                </div>
                <Menu/>
            </div>
        )}
});



ReactDOM.render(<App />,
    document.getElementById('app'));
