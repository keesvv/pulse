
function closeCurrentTab() {
  window.close();
}

function getBookmarks() {
  chrome.bookmarks.getRecent(12, updateAppBar)
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

    itemLink.setAttribute("href", bookmarks[i].url);

    itemDiv.setAttribute("class", "appBarItem");
    itemDiv.setAttribute("style", "animation-delay='" + i / 4 + "s';");

    itemImage.setAttribute("class", "appBarImage");
    itemImage.setAttribute("src", "chrome://favicon/" + bookmarks[i].url);
    itemImage.setAttribute("title", bookmarks[i].title);

    itemLink.appendChild(itemDiv);
    itemDiv.appendChild(itemCenter);
    itemCenter.appendChild(itemImage);

    appBar.appendChild(itemLink);
  }
}
