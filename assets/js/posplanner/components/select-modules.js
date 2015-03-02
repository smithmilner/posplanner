var React = require('react'),
    _ = require('lodash');

var constants = require('../constants'),
    dispatcher = require('../dispatcher'),
    data = require('../data/modules');

var SelectModules = React.createClass({

  getInitialState: function() {
    return {
      value: 'Cruise Missile Battery',
      faction: false
    };
  },

  toggleFaction: function() {
    this.setState({ 'faction': !this.state.faction });
  },

  addModule: function() {
    dispatcher.dispatch({ type: constants.moduleAdd, content: this.state.value });
  },

  onChange: function(e) {
    this.setState({ value: e.target.value });
  },

  getOptions: function() {
    var modules = _.filter(data, function(module) {
      if (module.meta === 'Faction' && !this.state.faction) { return false; }

      return true;
    }, this);

    modules = _.sortByAll(modules, ['categories', 'typeName']);

    return _.map(modules, function (module) {
      return <option key={module.typeName} value={module.typeName}>{module.typeName}</option>;
    });
  },

  render: function() {
    return <div>
      <div><a href="#" className="faction-toggle" onClick={this.toggleFaction}>toggle faction</a></div>
      <select value={this.state.value} onChange={this.onChange}>{this.getOptions()}</select>
      <a href="#" className="button" onClick={this.addModule}>add</a>
    </div>;
  }

});

module.exports = SelectModules;
