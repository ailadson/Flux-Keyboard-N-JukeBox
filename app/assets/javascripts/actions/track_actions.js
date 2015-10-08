/* global AppDispatcher */
/* global TrackConstants */
/* global Track */
/* global WebAPI */

(function() {
  'use strict';

  var _makeTrack = function(data){
    return new Track({name: data.name, roll: JSON.parse(data.roll)});
  };

  var _makeTracks = function(datas){
    return datas.map(function(data){ return _makeTrack(data); });
  };

  window.TrackActions = $.extend({}, WebAPI, {
    add: function(track){
      AppDispatcher.dispatch({
        actionType: TrackConstants.ADD_TRACK,
        resource: track
      });
    },

    fetch: function(){
      this._fetch('/tracks', TrackConstants.FETCH_TRACKS, _makeTracks);
    },

    create: function(data){
      this._create('tracks', { track: data }, TrackConstants.ADD_TRACK, _makeTrack);
    }
  });
}());
