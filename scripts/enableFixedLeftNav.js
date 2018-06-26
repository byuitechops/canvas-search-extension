function enableFixedLeftNav() {
  var leftNavStyle = document.getElementById('left-side').style;
  leftNavStyle.position = "fixed";
  leftNavStyle.display = "block";
  leftNavStyle.top = "70px";
  leftNavStyle.left = "55px";
}

chrome.storage.sync.get({
  fixedLeftNav: false,
}, function (items) {
  if (items.fixedLeftNav === true) {
    enableFixedLeftNav()
  }
});
