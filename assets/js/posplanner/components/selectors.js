var React = require('react');

var SelectTower = require('./select-tower');
var SelectModules = require('./select-modules');

var Selectors = React.createClass({

  render: function() {
    return <div className="one-half column">
      <div><SelectTower tower={this.props.tower} /></div>
      <div><SelectModules /></div>
    </div>;
  }

});

module.exports = Selectors;
