(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Jukebox = React.createClass({

    getInitialState: function () {
      return {tracks: TrackStore.all()};
    },

    componentDidMount: function () {
      TrackStore.addChangeHandler(this._updateTracks);
    },

    componentWillUnmount: function(){
      TrackStore.removeChangeHandler(this._updateTracks);
    },

    _updateTracks: function(){
      this.setState({ tracks: TrackStore.all() })
    },

    render: function(){
      return(
        <div className="jukebox">
          <h2> Juke Box</h2>
          {
            this.state.tracks.map(function(track, i){
              return <Components.TrackPlayer track={track} key={"track"+i} />
            })
          }
        </div>
      );
    }
  });

}());
