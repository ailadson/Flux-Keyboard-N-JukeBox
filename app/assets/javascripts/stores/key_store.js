/* global EventEmitter */
/* global AppDispatcher */
/* global KeyConstants */

(function() {
  'use strict';

  var _keys = [];

  var addKey = function(noteName){
    var noteIndex = _keys.indexOf(noteName);
    if(noteIndex === -1) {
      _keys.push(noteName);
      KeyStore.change();
    }
  };

  var removeKey = function(noteName){
    var noteIndex = _keys.indexOf(noteName);
    if(noteIndex !== -1) {
      _keys.splice(noteIndex, 1);
      KeyStore.change();
    }
  };

  var resetKeys = function(notes) {
    _keys = notes;
    KeyStore.change();
  };

  var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _keys.slice();
    },

    addChangeHandler: function(cb){
      this.on("CHANGE", cb);
    },

    removeChangeHandler: function(cb){
      this.removeListener("CHANGE", cb);
    },

    change: function(){
      this.emit("CHANGE");
    },

    dispatchID: AppDispatcher.register(function(action){
      switch(action.actionType) {
        case KeyConstants.ADD_KEY:
          addKey(action.noteName);
          break;
        case KeyConstants.REMOVE_KEY:
          removeKey(action.noteName);
          break;
        case KeyConstants.RESET_KEYS:
          resetKeys(action.notes);
          break;
      }
      console.log(_keys);
    })
  });

}());
