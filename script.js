document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  var mouseX = e.clientX;
  var mouseY = e.clientY;

  document.addEventListener('mousemove', function(e) {
    if (e.clientX !== mouseX || e.clientY !== mouseY) {
      document.removeEventListener('mousemove', this, false);
      return false;
    }
  }, false);
});