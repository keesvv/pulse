
function closeCurrentTab() {
  window.close();
}

function getBookmarks() {
  chrome.bookmarks.getRecent(12, updateAppBar)
}

function getScreenResolution() {
  var x = window.screen.width;
  var y = window.screen.height;
  return [x, y];
}

function showContextMenu(e) {
  e.preventDefault();
  $(function() {
    $(".contextMenu").finish().toggle(100);
    $(".contextMenu").contextMenu("#contextMenu");
  })
}

function updateAppBar(bookmarks) {
  var appBar = document.getElementById("appBar");
  for (var i = 0; i < bookmarks.length; i++) {
    var itemLink = document.createElement("a");
    var itemDiv = document.createElement("div");
    var itemCenter = document.createElement("center");
    var itemImage = document.createElement("img");
    var itemText = document.createElement("p");

    itemLink.setAttribute("href", bookmarks[i].url);

    itemDiv.setAttribute("class", "appBarItem");
    itemDiv.setAttribute("style", "animation-delay='" + i / 4 + "s';");

    itemImage.setAttribute("class", "appBarImage");
    itemImage.setAttribute("src", "chrome://favicon/" + bookmarks[i].url);
    itemImage.setAttribute("title", bookmarks[i].title);

    itemText.innerText = bookmarks[i].title.substring(0, 20);

    itemLink.appendChild(itemDiv);
    itemDiv.appendChild(itemCenter);
    itemCenter.appendChild(itemImage);
    itemCenter.appendChild(itemText);

    appBar.appendChild(itemLink);
  }
}
