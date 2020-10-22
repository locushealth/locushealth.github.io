function myFunction() {
  x.classList.toggle("change");
}

document.getElementById("sun").onclick = function functionName() {
  document.getElementById("sun").classList.add("sungone");
  document.getElementById("moon").classList.remove("moongone");
  document.body.classList.remove("dark");
  localStorage.setItem("viewMode" , "light");
}

document.getElementById("moon").onclick = function functionName() {
  document.getElementById("moon").classList.add("moongone");
  document.getElementById("sun").classList.remove("sungone");
  document.body.classList.add("dark");
  localStorage.setItem("viewMode" , "dark");
}

var btn = document.getElementById("nav-toggle");

 btn.onclick = function ok() {
   document.getElementById("nav-toggle").classList.toggle("change");
 }

btn.onmouseover = function functionName() {
  document.getElementById("bar11").classList.add("whitebar");
  document.getElementById("bar12").classList.add("whitebar");
  document.getElementById("bar13").classList.add("whitebar");
}

btn.onmouseout = function functionName() {
  document.getElementById("bar11").classList.remove("whitebar");
  document.getElementById("bar12").classList.remove("whitebar");
  document.getElementById("bar13").classList.remove("whitebar");
}
var content;

function loadfunc() {
  content = setTimeout(showPage, 1500);
}

function showPage() {
  var now = new Date().getTime();
  if ((now - localStorage.getItem("lastviewed")) > 28800000){
    modal.style.display = "block";
  }
  if (localStorage.getItem("lastviewed") === null){
    modal.style.display = "block";
  }
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  if (localStorage.getItem("viewMode") == "dark") {
  document.body.classList.add("dark");
  document.getElementById("moon").classList.add("moongone");
  document.getElementById("sun").classList.remove("sungone");
  }
  window.scrollTo(0 , localStorage.getItem("offset"));
  generatemap(localStorage.getItem("mapmode"));
  setTimeout(checkoffset , 1501);
  if (localStorage.getItem("mode") !== null) {
    localStorage.removeItem("mode");
  }
}

function checkoffset() {
  setInterval(function () {
    var oy = window.pageYOffset;
    localStorage.setItem("offset" , oy);
    var lastlog = new Date().getTime();
    localStorage.setItem("lastviewed" , lastlog);
  } , 1);
}

if (window.innerWidth < 770) {
  $("#navbar").slideUp("slow");
  $("#nav-toggle").click(function(){
    $("#navbar").slideToggle("slow");
  });
} else{
  $("#navbar").css("display" , "block");
}

document.getElementById("arrow-up").onclick = function startscroll() {
  var scrollfunc = setInterval(scrollup , 1);
  
  function scrollup() {
      if (pageYOffset > 0) {
          scrollTo(0 , pageYOffset-(pageYOffset/70));
      } else {
          clearInterval(scrollfunc);
      }
  }
  }

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

function generatemap(x){
  switch (x) {
    case "alcohol":
      alcoholmap();
      break;
    case "opioids":
      opioidsmap();
      break;
    case "cannabis":
      cannabismap();
      break;
    case "sedatives":
      sedativesmap();
      break;
    case null:
      alcoholmap();
      break;
  }
  
}

window.onscroll = function () {
  var appear = window.innerHeight - (window.innerHeight/2);
  if (window.pageYOffset >= appear){
    document.getElementById("arrow-up").style.display = "block";
  } else {
    document.getElementById("arrow-up").style.display = "none";
  }
}

var modal = document.getElementsByClassName("modal")[0];

setInterval( function () {
  document.getElementsByClassName("modal-content")[0].style.width = (window.innerWidth-100); }
 , 1);

document.getElementById("close-btn").onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
