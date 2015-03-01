var React = require('react'),
    _ = require('lodash');

var constants = require('../constants'),
    dispatcher = require('../dispatcher'),
    data = require('../data/towers');

var SelectTower = React.createClass({

  updateTower: function(e) {
    dispatcher.dispatch({ type: constants.towerUpdate, content: e.target.value });
  },

  getOptions: function() {
    var list = _.map(data, function (tower) {
      return <option key={tower.typeID} value={tower.typeName}>{tower.typeName}</option>;
    });

    list.unshift(<option key="_none" value="">- Select a tower -</option>);

    return list;
  },

  render: function() {
    return <select value={this.props.tower} onChange={this.updateTower}>{this.getOptions()}</select>;
  }
});

module.exports = SelectTower;
