var React = require('react'),
    _ = require('lodash'),
    numeral = require('numeral');;

var data = require('../data/modules');

var StatsOutput = React.createClass({

  render: function() {
    var usage = 0;

    _.forEach(this.props.modules, function(module) {

      if (module.online) {
        usage += parseInt(data[module.name].attributes[this.props.type]);
      }

    }.bind(this));

    var output = this.props.output - usage;

    return <span className={"tower-" + this.props.type + "-output"}>{numeral(output).format('0,0')}</span>;
  }

});

module.exports = StatsOutput;