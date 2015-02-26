var React = require('react'),
    _ = require('lodash');

var data = require('../data/modules');

var StatsOutput = React.createClass({

  render: function() {
    var usage = 0;

    _.forEach(this.props.modules, function(module) {
      usage += parseInt(data[module.name].attributes[this.props.type]);
    }.bind(this));

    console.log(this.props.output - usage);

    return this.props.output - usage;
  }

});

module.exports = StatsOutput;