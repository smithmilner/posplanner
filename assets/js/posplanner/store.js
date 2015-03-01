var constants = require('./constants'),
    dispatcher = require('./dispatcher'),
    emitter = require('./emitter'),
    _ = require('lodash');

class Store {

  constructor() {
    this.id = 1;

    this.data = {
      'tower': '',
      'modules': []
    };

    dispatcher.register(function(payload) {
      switch (payload.type) {

        case constants.all:
          this.all();
          break;

        case constants.towerUpdate:
          this.updateTower(payload.content);
          break;

        case constants.moduleAdd:
          this.addModule(payload.content);
          break;

        case constants.moduleUpdate:
          this.updateModule(payload.content);
          break;

        case constants.moduleRemove:
          this.removeModule(payload.content);
          break;

      }
    }.bind(this));

  }

  // update tower
  updateTower(tower) {
    this.data.tower = tower;
    this.notify();
  }

  // add module
  addModule(module) {
    this.data.modules.push({ id: this.id++, name: module, online: true });
    this.notify();
  }

  // update module
  updateModule(module) {
    var index = _.findIndex(this.data.modules, 'id', module.id);

    this.data.modules[index] = module;
    this.notify();
  }

  // remove module
  removeModule(module) {
    _.remove(this.data.modules, function(n) {
      return n.id === module.id;
    });

    this.notify();
  }

  all() {
    this.notify();
  }

  notify() {
    emitter.emit(constants.changed, this.data);
  }
}

module.exports = new Store();
