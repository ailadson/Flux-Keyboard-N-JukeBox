/* global React */
/* global Track */

(function() {
  'use strict';

  window.Components.Recorder = React.createClass({
    getInitialState: function(){
      return { isRecording: false, track: new Track({}) };
    },

    componentDidMount: function () {

    },

    startRecording: function () {
      this.state.track.startRecording();
      KeyStore.addChangeHandler(this.recordNotes);
      this.setState({isRecording: true});
    },

    stopRecording: function () {
      this.state.track.stopRecording();
      KeyStore.removeChangeHandler(this.recordNotes);
      this.setState({isRecording: false});
    },

    recordNotes: function () {
      this.state.track.addNotes(KeyStore.all());
    },

    play: function () {
      this.state.track.play();
    },

    save: function(){
      TrackActions.add(this.state.track);
      this.setState({ track: new Track({}) });
    },

    changeName: function(e){
      this.state.track.name = e.target.value;
      this.setState({track: this.state.track });
    },

    render: function(){
      return(
        <div>
        {
            !this.state.isRecording ?
              <button onClick={this.startRecording}>Start Recording</button> :
              <button onClick={this.stopRecording}>Stop Recording</button>
        }
        <button onClick={this.play}>Play</button>
        <button onClick={this.save}>Save Track</button>
        <input placeholder="Name your track" val={this.state.track.name} type="text" onChange={this.changeName}/>
        </div>
      );
    }
  });
}());
