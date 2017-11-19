
function loadStartFunctions() {
  startClock();
  changeBackdrop();
  getBookmarks();
  getScreenResolution();
}

// Register event handlers
window.addEventListener("load", loadStartFunctions);
document.addEventListener("contextmenu", showContextMenu);
document.getElementById("search").addEventListener("keypress", search);

// Fix margins on screen
document.getElementById("clock").style.marginTop = getScreenResolution()[1] / 2 - 256 + "px";
