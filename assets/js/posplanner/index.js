var React = require('react'),
    constants = require('./constants'),
    dispatcher = require('./dispatcher'),
    emitter = require('./emitter')
    require('./store');

var POSPlanner = React.createClass({

  getInitialState: function() {
    return {};
  },

  // add tower event listener
  componentWillMount: function() {
    emitter.on(constants.changed, function(data) {
      this.setState({ 
        tower: data['tower'],
        modules: data['modules']
      });
    }.bind(this));
  },

  // When we're done loading send request to store.
  componentDidMount: function() {
    dispatcher.dispatch({ type: constants.all });
  },

  componentWillUnmount: function() {
    // unhook event listeners
    emitter.removeAllListeners(constants.changed);
  },

  render: function() {
    return <span>hello world</span>;
  }

});

module.exports = POSPlanner;