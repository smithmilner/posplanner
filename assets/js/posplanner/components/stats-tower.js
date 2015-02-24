var React = require('react');
var _ = require('lodash');

var data = require('../data/towers');

var Stats = React.createClass({

  renderTowerStats: function(tower) {
    return <div className="tower-stats row">
      <strong>{tower.typeName}</strong>
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
  },

  render: function() {
    var tower = _.find(data, 'typeName', this.props.tower);

    if (typeof tower !== 'undefined') {
      return this.renderTowerStats(tower);
    } else {
      return <div><strong>No Tower Selected</strong></div>;
    }

  }
});

module.exports = Stats;