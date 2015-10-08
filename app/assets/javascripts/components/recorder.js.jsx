/* global React */
/* global Track */
/* global TrackActions */
/* global KeyStore */

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
      var rollJSON = JSON.stringify(this.state.track.roll);
      TrackActions.create({name: this.state.track.name, roll: rollJSON});
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
              <button onClick={this.startRecording}
                      onFocus={this.props.isTyping.bind(null, false)}>Start Recording</button> :
              <button onClick={this.stopRecording}
                      onFocus={this.props.isTyping.bind(null, false)}>Stop Recording</button>
        }
        <button onClick={this.play}>Play</button>
        {
          (this.state.track.roll.length > 0) ?
            <span>
              <button onClick={this.save}
                      onFocus={this.props.isTyping.bind(null, false)}>Save Track</button>
              <input placeholder="Name your track"
                  val={this.state.track.name}
                  type="text"
                  onChange={this.changeName}
                  onFocus={this.props.isTyping.bind(null, true)}/>
            </span> :
            <span></span>
        }
        </div>
      );
    }
  });
}());
