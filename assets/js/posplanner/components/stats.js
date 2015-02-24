var React = require('react');
var _ = require('lodash');

var StatsTower = require('./stats-tower');
var StatsModule = require('./stats-module');

var Stats = React.createClass({

  renderModules: function() {
    return _.map(this.props.modules, function(module) {
      return <StatsModule module={module} />
    });
  },

  render: function() {
    return <div className="one-half column">
        <StatsTower {...this.props} />
        <ul>{this.renderModules()}</ul>
      </div>;
  }
});

module.exports = Stats;