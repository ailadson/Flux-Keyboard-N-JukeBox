/* global AppDispatcher */

(function() {
  'use strict';

  window.WebAPI = {
    _fetch: function(url,actionType, parseCB){
      $.getJSON(url, function(resources){
        AppDispatcher.dispatch({ actionType: actionType, resources: parseCB(resources) });
      });
    },

    _create: function(url, data, actionType, parseCB){
      $.post(url, data, function(resource){
        AppDispatcher.dispatch({ actionType: actionType, resource: parseCB(resource) });
      });
    },

    _destroy: function(){

    }
  };
}());
