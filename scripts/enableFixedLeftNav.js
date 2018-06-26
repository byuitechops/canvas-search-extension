function enableFixedLeftNav() {
    var body = document.getElementsByTagName('body')[0];
    var leftNavStyle = document.getElementById('left-side').style;
    if(body.classList.contains('primary-nav-expanded')) {
      console.log('open');
      setOpenGlobalStyles(leftNavStyle);
    }
    else {
        setClosedGlobalStyles(leftNavStyle);
    }
}

function setClosedGlobalStyles(elStyle) {
    elStyle.position = "fixed";
    elStyle.display = "block";
    elStyle.top = "70px";
    elStyle.left = "55px";
}

function setOpenGlobalStyles(elStyle) {
    elStyle.position = "fixed";
    elStyle.display = "block";
    elStyle.top = "70px";
    elStyle.left = "70px";
}


chrome.storage.sync.get({
  fixedLeftNav: false,
}, function (items) {
  if (items.fixedLeftNav === true) {
    enableFixedLeftNav()
  }
});
