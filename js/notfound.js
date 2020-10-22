function generatecolor(x) {
    var red = Math.floor((Math.random() * 255) + 1); 
    var green = Math.floor((Math.random() * 255) + 1);
    var blue = Math.floor((Math.random() * 255) + 1);
    var color =  "rgb" + "(" + red + "," + green + "," + blue + ")";
    x.style.backgroundColor = color;
    var prop = Math.floor((Math.random() * 80) + 1); 
    x.style.height = prop;
  };
  
var i;
setInterval( function () {
for (i = 0; i < 4; i++) {
  var dot = document.getElementsByClassName("circle")[i];
  generatecolor(dot);
}
} , 300
);

var loader = document.getElementById("loader-wrapper");
var content = document.getElementById("main-content");

function showpage() {
  loader.style.display = "none";
  content.style.display = "block";
}

function loadfunc() {
  setInterval(showpage , 2500);
}