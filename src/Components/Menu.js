
var React = require('react');


////THIS IS THE MENU, WHERE CURRENT PLAYER TURN, OPTION TO RESET/PLAY AGAIN WILL BE DISPLAYED

var Menu = React.createClass({
    render: function () {
        return <div id="menu">
            <button>Play Again?</button>
            
        </div>;

    }
});

module.exports = Menu;