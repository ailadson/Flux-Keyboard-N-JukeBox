(function() {
  'use strict';

  var Track = window.Track = function(attr){
    this.name = attr.name || "blank track";
    this.roll = attr.roll || [];
  };

  Track.prototype.startRecording = function(){
    this.roll = [];
    this.startTime = Date.now();
      // debugger;
  };

  Track.prototype.addNotes = function(notes){
    this.roll.push({
      timeSlice: Date.now() - this.startTime,
      notes: notes
    });
  };

  Track.prototype.stopRecording = function(){
    this.addNotes([]);
  };

  Track.prototype.play = function(){
    if(this.interval){ return; }

    var playBackStartTime = Date.now();
    var currentNote = 0;

    this.interval = setInterval(function(){
      if(currentNote < this.roll.length){
        if(Date.now() -  playBackStartTime > this.roll[currentNote].timeSlice){
          KeyActions.reset(this.roll[currentNote].notes);
          currentNote += 1;
        }
      } else {
        clearInterval(this.interval);
        delete this.interval;
      }
    }.bind(this), 20);
  };
}());
