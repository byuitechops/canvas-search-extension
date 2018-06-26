function enableFixedLeftCourseNav() {
    var body = document.getElementsByTagName('body')[0];
    var leftNavStyle = document.getElementById('left-side').style;
    if(body.classList.contains('primary-nav-expanded')) {
      setOpenGlobalStyles(leftNavStyle);
    }
    else {
        setClosedGlobalStyles(leftNavStyle);
    }
}

function setClosedGlobalStyles(elementStyle) {
    elementStyle.position = "fixed";
    elementStyle.display = "block";
    elementStyle.top = "72px";
    elementStyle.left = "54px";
}

function setOpenGlobalStyles(elementStyle) {
    elementStyle.position = "fixed";
    elementStyle.display = "block";
    elementStyle.top = "72px";
    elementStyle.left = "84px";
}


chrome.storage.sync.get({
  fixedLeftCourseNav: false,
}, function (items) {
  if (items.fixedLeftCourseNav === true) {
    enableFixedLeftCourseNav()
  }
});
