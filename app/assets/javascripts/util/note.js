/* global TONES */

(function(root) {
  'use strict';

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();

  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  var Note = window.Note = function(noteName){
    this.oscillatorNode = createOscillator(TONES[noteName]);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  };

  Note.prototype.start = function () {
    this.gainNode.gain.value = 0.3;
  };

  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };

}(this));
