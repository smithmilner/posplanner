var constants = require('./constants'),
    dispatcher = require('./dispatcher'),
    emitter = require('./emitter'),
    _ = require('lodash');

class Store {
  constructor() {
    this._id = 1;

    this._data = {
      tower: 'Amarr Control Tower',
      modules: [
        {
          id: 1,
          name: 'Ammunition Assembly Array',
          online: true
        }
      ]
    };

    dispatcher.register(function(payload) {
      switch (payload.type) {

        case constants.all:
          this._all();
          break;

        case constants.towerUpdate:
          this._updateTower(payload.content);
          break;

        case constants.moduleAdd:
          this._addModule(payload.content);
          break;

        case constants.moduleUpdate:
          this._updateModule(payload.content);
          break;

        case constants.moduleRemove:
          this._removeModule(payload.content);
          break;

      }
    }.bind(this));

  }

  // update tower
  _updateTower(tower) {
    this._data['tower'] = tower;
    this._notify();
  }

  // add module
  _addModule(module) {
    this._data['modules'].push({ id: this._id++, name: module, online: true });
    this._notify();
  }

  // update module
  _updateModule(module) {
    var index = _.findIndex(this._data['modules'], 'id', module.id);

    this._data['modules'][index] = module;
    this._notify();
  }

  // remove module
  _removeModule(module) {

    this._notify();
  }

  _all() {
    this._notify();
  }

  _notify() {
    emitter.emit(constants.changed, this._data);
  }
}

module.exports = new Store;