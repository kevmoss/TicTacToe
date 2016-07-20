var React = require('react');


/////THE TILES COMPONENT
var Tile = React.createClass({
    clickHandler: function (e) {
        this.props.tileClick(this.props.pos, this.props.turn, e);
    },

    render: function () {
        return <div className = {this.props.status === '' ? 'tile' : 'tile status-' + this.props.status} onClick = {this.clickHandler}>
            {this.props.status}
        </div>;
    }
});

module.exports = Tile;