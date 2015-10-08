/* global AppDispatcher */
/* global KeyConstants */

(function() {
  'use strict';

  var _getNote = function(keyCode){
    var note;

    switch (keyCode) {
      case 65:
        note = "C5";
        break;
      case 83:
        note = "D5";
        break;
      case 68:
        note = "E5";
        break;
      case 70:
        note = "F5";
        break;
      case 71:
        note = "G5";
        break;
      case 72:
        note = "A5";
        break;
      case 74:
        note = "B5";
        break;
      case 75:
        note = "C6";
        break;
      case 87:
        note = "C5sharp";
        break;
      case 69:
        note = "D5sharp";
        break;
      case 84:
        note = "F5sharp";
        break;
      case 89:
        note = "G5sharp";
        break;
      case 85:
        note = "A5sharp";
        break;

    }
    return note;
  };

  window.KeyActions = {
    keyPressed: function(e){
      AppDispatcher.dispatch({
        actionType: KeyConstants.ADD_KEY,
        noteName: _getNote(e.keyCode)
      });
    },

    reset: function(notes){
      AppDispatcher.dispatch({
        actionType: KeyConstants.RESET_KEYS,
        notes: notes
      });
    },

    keyReleased: function(e){
      AppDispatcher.dispatch({
        actionType: KeyConstants.REMOVE_KEY,
        noteName: _getNote(e.keyCode)
      });
    }
  };

}());
