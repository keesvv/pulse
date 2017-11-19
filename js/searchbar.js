
function search(e) {
  if(e.keyCode == 13) {
    location.href = "https://google.com/search?q=" + document.getElementById("search").value;
  }
}
