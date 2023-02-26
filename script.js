setTimeout(function() {
    window.location.href = "home.html";
  }, 3000);
  
  // hide splash screen and stop logo animation
  window.addEventListener("load", function() {
    var splashScreen = document.getElementById("splash-screen");
    var logo = document.getElementById("logo");
    splashScreen.style.display = "none";
    logo.style.animation = "none";
  });
  