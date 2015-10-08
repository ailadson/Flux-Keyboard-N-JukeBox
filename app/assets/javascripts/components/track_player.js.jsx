(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.TrackPlayer = React.createClass({
    play: function(){
      this.props.track.play();
    },

    render: function(){
      return(
        <div className="track">
            <h3>{this.props.track.name}</h3>
            <button onClick={this.play}>Play Track</button>
        </div>
      );
    }
  });
}());
