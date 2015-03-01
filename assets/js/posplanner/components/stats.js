var React = require('react');
var _ = require('lodash');

var StatsTower = require('./stats-tower');
var StatsModule = require('./stats-module');

var Stats = React.createClass({


  renderList: function(list) {
    return _.map(list, function(module) {
      return <StatsModule key={module.id} module={module} />;
    });
  },

  renderOnlineModules: function() {
    var online = _.filter(this.props.modules, 'online', true);
    var list = online.length > 0 ? <ul>{this.renderList(online)}</ul> : <p>no online modules...</p>;

    return <div className="online-modules">
      <strong>Online:</strong>
      {list}
    </div>;
  },

  renderOfflineModules: function() {
    var offline = _.filter(this.props.modules, 'online', false);
    var list = offline.length > 0 ? <ul>{this.renderList(offline)}</ul> : <p>no offline modules...</p>;

    return <div className="offline-modules">
      <strong>Offline:</strong>
      {list}
    </div>;
  },

  render: function() {
    return <div className="one-half column">
        <StatsTower {...this.props} />
        {this.renderOnlineModules()}
        {this.renderOfflineModules()}
      </div>;
  }
});

module.exports = Stats;
