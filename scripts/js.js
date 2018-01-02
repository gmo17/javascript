function loadEvents(){
  var display = document.getElementById("bTop");

  window.onscroll = function() {scrollDown()};
  function scrollDown() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
      display.style.display = "block";
    } else{
      display.style.display = "none";
    }
  }

  function overTop(){
    var display = document.getElementById("bTop");
    display.style.opacity = 0.5;
  }

  function outTop(){
    var display = document.getElementById("bTop");
    display.style.opacity = 1;
  }
}

window.onload = function(){
  loadEvents();
};
