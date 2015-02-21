var React = require('react');
var _ = require('lodash');

var data = require('../data/towers');

var Stats = React.createClass({

  render: function() {
    var tower = _.find(data, 'typeName', this.props.tower);

    return <div className="row">
      <strong>{this.props.tower}</strong>
      <table>
        <thead>
          <tr>
            <th>Power</th>
            <th>CPU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tower.attributes.powerOutput}</td>
            <td>{tower.attributes.cpuOutput}</td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
});

module.exports = Stats;