var React = require('react'),
    _ = require('lodash');

var data = require('../data/modules');

var StatsOutput = React.createClass({

  render: function() {
    var usage = 0;

    _.forEach(this.props.modules, function(module) {

      if (module.online) {
        usage += parseInt(data[module.name].attributes[this.props.type]);
      }

    }.bind(this));

    return <span className={"tower-" + this.props.type + "-output"}>{this.props.output - usage}</span>;
  }

});

module.exports = StatsOutput;