var React = require('react'),
    _ = require('lodash');

var constants = require('../constants'),
    dispatcher = require('../dispatcher'),
    data = require('../data/modules');

var SelectModules = React.createClass({

  getInitialState: function() {
    return { value: 'Cruise Missile Battery' }
  },

  onChange: function(e) {
    this.setState({ value: e.target.value });
  },

  addModule: function() {
    dispatcher.dispatch({ type: constants.moduleAdd, content: this.state.value });
  },

  getOptions: function() {
    return _.map(data, function (module) {
      return <option key={module.typeName} value={module.typeName}>{module.typeName}</option>;
    });
  },

  render: function() {
    return <div>
      <select value={this.state.value} onChange={this.onChange}>{this.getOptions()}</select>
      <a href="#" className="button" onClick={this.addModule}>add</a>
    </div>;
  }

});

module.exports = SelectModules;
