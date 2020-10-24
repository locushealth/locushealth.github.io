var browser;

function myFunction() {
  x.classList.toggle("change");
}

document.getElementById("moon").setAttribute("onclick" , "darkMode()");
document.getElementById("sun").setAttribute("onclick" , "lightMode()");

function lightMode() {
  document.getElementById("sun").classList.add("sungone");
  document.getElementById("moon").classList.remove("moongone");
  document.body.classList.remove("dark");
  localStorage.setItem("viewMode" , "light");
  document.getElementById("logo").setAttribute("src" , "img/8.png");
}

function darkMode() {
  document.getElementById("moon").classList.add("moongone");
  document.getElementById("sun").classList.remove("sungone");
  document.body.classList.add("dark");
  localStorage.setItem("viewMode" , "dark");
  document.getElementById("logo").setAttribute("src" , "img/10.png");
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
    darkMode();
  } else {
    lightMode();
  }
  window.scrollTo(0 , localStorage.getItem("offset"));
  generatemap(localStorage.getItem("mapmode"));
  setTimeout(checkoffset , 1501);
  if (localStorage.getItem("mode") !== null) {
    localStorage.removeItem("mode");
  }
  checkBrowser();
  if (browser == 3) {
    chromfunc();
  }
  if (browser == 1) {
    safarifunc();
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

function startscroll(object) {
  var scrollfunc = setInterval(scrolldown , 1);
  var end = object.offsetTop - document.getElementById("mainfooter").offsetHeight-50;
  if (object == document.getElementById("contact")) {
    end = document.body.scrollHeight - document.documentElement.clientHeight;
    return end;
  }
  function scrolldown() {
      if (pageYOffset > end) {
        clearInterval(scrollfunc);
      } else if (pageYOffset == document.body.offsetHeight) {
        clearInterval(scrollfunc);
      } else {
        window.scrollTo(0 , pageYOffset+28);
    }
  }
}


function startscrollup() {
  var scrollupfunc = setInterval(scrollup , 1);
  function scrollup() {
      if (pageYOffset > 0) {
          scrollTo(0 , pageYOffset-(pageYOffset/50));
      } else {
          clearInterval(scrollupfunc);
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

function checkBrowser() { 
  let userAgentString =  
      navigator.userAgent; 

  let chromeAgent =  
      userAgentString.indexOf("Chrome") > -1; 

  let IExplorerAgent =  
      userAgentString.indexOf("MSIE") > -1 ||  
      userAgentString.indexOf("rv:") > -1; 

  let safariAgent =  
      userAgentString.indexOf("Safari") > -1; 
         
  if ((chromeAgent) && (safariAgent))  
      safariAgent = false; 

  if (safariAgent == true) {
      console.log("Browser Detected : Safari");
      browser = 1;
      return browser;
  } else if (IExplorerAgent == true) {
      console.log("Browser Detected : Internet Explorer");
      browser = 2;
      return browser;
  } else {
      console.log("Browser Detected : Chrome/Opera/Edge/Firefox/Other");
      browser = 3;
      return browser;
  }
}

function goup() {
  window.scrollTo(0 , 0);
};

function chromfunc() {
  document.documentElement.style.scrollBehavior = "smooth";
  document.getElementById("arrow-up").setAttribute("onclick" , "goup()");
  document.getElementsByClassName("nav1")[0].setAttribute("href" , "#vision");
  document.getElementsByClassName("nav1")[1].setAttribute("href" , "#whatwedo");
  document.getElementsByClassName("nav1")[2].setAttribute("href" , "#about");
  document.getElementsByClassName("nav1")[3].setAttribute("href" , "#contact");

}

function safarifunc() {
  document.getElementById("arrow-up").setAttribute("onclick" , "startscrollup()");
  document.getElementsByClassName("nav1")[0].setAttribute("onclick" , "startscroll(document.getElementById(\"vision\"))");
  document.getElementsByClassName("nav1")[1].setAttribute("onclick" , "startscroll(document.getElementById(\"whatwedo\"))");
  document.getElementsByClassName("nav1")[2].setAttribute("onclick" , "startscroll(document.getElementById(\"about\"))");
  document.getElementsByClassName("nav1")[3].setAttribute("onclick" , "startscroll(document.getElementById(\"contact\"))");
  
}