var React = require('react');
var _ = require('lodash');

var data = require('../data/towers');
var StatsOutput = require('./stats-output');

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
            <td><StatsOutput type={'power'} output={tower.attributes.powerOutput} modules={this.props.modules} /></td>
            <td><StatsOutput type={'cpu'} output={tower.attributes.cpuOutput} modules={this.props.modules} /></td>
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