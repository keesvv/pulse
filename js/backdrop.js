
var backdropCount = 10;
function changeBackdrop() {
  var backdrop = Math.ceil(Math.random() * backdropCount);
  document.body.background = "../backdrop/" + backdrop + ".jpg";
}
