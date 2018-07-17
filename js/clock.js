
function startClock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  minutes = appendZeros(minutes);

  document.getElementById("clock").innerHTML = hours + ":" + minutes;
  var timeout = setTimeout(startClock, 500);
}

function appendZeros(i) {
  if (i < 10) i = "0" + i;
  return i;
}
