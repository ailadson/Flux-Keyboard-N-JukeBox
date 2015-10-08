/* global React */
/* global Note */

(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Key = React.createClass({
    componentDidMount: function(){
      this.note = new Note(this.props.noteName);
    },

    componentDidUpdate: function(){
      if(this.props.active){
        this.note.start();
      } else {
        this.note.stop();
      }
    },

    render: function () {
      var isSharp = (this.props.noteName.indexOf("sharp") !== -1) ? " sharp" : "";
      var keyName = isSharp ? (this.props.noteName.slice(0,1) + "#") : this.props.noteName.slice(0,1);
      var isActive = this.props.active ? " active" : "";
      return(
        <div className={"key" + isSharp + isActive}>
            {keyName}
        </div>
      )
    }
  });
}());
