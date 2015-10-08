/* global AppDispatcher */
/* global TrackConstants */

(function() {
  'use strict';

  window.TrackActions = {
    add: function(track){
      AppDispatcher.dispatch({
        actionType: TrackConstants.ADD_TRACK,
        track: track
      });
    }
  };
}());
