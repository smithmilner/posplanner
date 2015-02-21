var React = require('react');

var SelectTower = require('./select-tower');

var Selectors = React.createClass({

  render: function() {
    return <div className="one-half column">
      <SelectTower tower={this.props.tower} />
    </div>;
  }

});

module.exports = Selectors;