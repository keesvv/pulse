
function loadStartFunctions() {
  startClock();
  changeBackdrop();
  getBookmarks();
}

// Register event handlers
window.addEventListener("load", loadStartFunctions);
document.addEventListener("contextmenu", showContextMenu);
document.getElementById("search").addEventListener("keypress", search);
document.getElementById("closeTab").addEventListener("click", closeCurrentTab);
