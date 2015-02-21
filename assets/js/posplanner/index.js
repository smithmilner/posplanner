var React = require('react'),
    constants = require('./constants'),
    dispatcher = require('./dispatcher'),
    emitter = require('./emitter')
    require('./store');

var Selectors = require('./components/selectors'),
    Stats = require('./components/stats');

var POSPlanner = React.createClass({

  getInitialState: function() {
    return {
      tower: 'Amarr Control Tower',
      modules: [
        {
          id: 1,
          name: 'Ammunition Assembly Array',
          online: true
        }
      ]
    };
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
    // JSX spread attributes to pass all the props.
    return <div className="row">
      <Selectors {...this.state} />
      <Stats {...this.state} />
    </div>;
  }

});

module.exports = POSPlanner;