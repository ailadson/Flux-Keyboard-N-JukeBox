/* global EventEmitter */
/* global AppDispatcher */
/* global TrackConstants */

(function() {
  'use strict';

  var _tracks = [];

  var addTrack = function(track){
    _tracks.push(track);
    TrackStore.changed();
  };

  var TrackStore = window.TrackStore = $.extend({}, EventEmitter.prototype,{
    all: function(){
      return _tracks.slice();
    },

    addChangeHandler: function(cb){
      this.on("CHANGE", cb);
    },

    removeChangeHandler: function(cb){
      this.removeListener("CHANGE", cb);
    },

    changed: function(){
      this.emit("CHANGE");
    },

    dispatchID: AppDispatcher.register(function(action){
      switch(action.actionType){
        case TrackConstants.ADD_TRACK:
          addTrack(action.track);
          break;
      }
    })
  });
}());
