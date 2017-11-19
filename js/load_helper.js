
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
document.getElementById("closeTab").addEventListener("click", closeCurrentTab);

// Margin helpers
document.getElementById("clock").style.marginTop = getScreenResolution()[1] - 600 + "px";  
