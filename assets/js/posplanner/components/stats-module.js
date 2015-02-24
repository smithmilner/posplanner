var React = require('react');

var constants = require('../constants'),
    dispatcher = require('../dispatcher');

var ModuleStats = React.createClass({

  toggle: function() {
    this.props.module.online = !this.props.module.online;
    dispatcher.dispatch({ type: constants.moduleUpdate, content: this.props.module });
  },

  render: function() {
    var online = this.props.module.online ? 'online' : 'offline';
    return <li><a href="#" onClick={this.toggle}>{this.props.module.name} - {online}</a></li>
  }

});

module.exports = ModuleStats;