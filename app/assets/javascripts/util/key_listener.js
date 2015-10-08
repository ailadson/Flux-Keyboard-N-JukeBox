/* global KeyActions */

window.addEventListener("keydown", function(e){
  console.log(e);
  KeyActions.keyPressed(e);
});

window.addEventListener("keyup", function(e){
  KeyActions.keyReleased(e);
});
