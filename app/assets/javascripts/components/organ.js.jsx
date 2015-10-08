(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Organ = React.createClass({
    getInitialState: function() {
      return {activeKeys: KeyStore.all()};
    },

    componentDidMount: function(){
      KeyStore.addChangeHandler(this._changeActiveKeys);
    },

    componentWillUnmount: function(){
      KeyStore.removeChangeHandler(this._changeActiveKeys);
    },

    _changeActiveKeys: function(){
      this.setState({ activeKeys: KeyStore.all() });
    },

    render: function(){
      var keys = [];
      for(var key in TONES) {
        var active = (this.state.activeKeys.indexOf(key) === -1) ? false : true;
        keys.push(<Components.Key noteName={key} active={active} key={key}/>);
      }
      return(
          <div className="organ">
            {keys}
            <br/>
            <Components.Recorder />
          </div>
      );
    }
  });
}());
