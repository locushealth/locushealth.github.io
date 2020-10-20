
var databox = document.getElementById("data-p");

function generatealcholvalue(c){
    databox.innerHTML = c + "%";
}

function alcoholmap() {
    function generatealcoholcolor(alcohol){
        var blue = 255-((alcohol/35.6)*205); 
        var red = 255;
        var green = 255;
        var color =  "rgb" + "(" + red + "," + green + "," + blue + ")";
        x.style.fill = color;
        x.setAttribute("onmouseover" , "generatealcholvalue(" + alcohol + ")");
    }
    document.getElementById("scale-low").innerHTML = "0%";
    document.getElementById("scale-high").innerHTML = "35.6%";
    document.getElementById("scale").classList.add("alcohol");
    document.getElementById("scale").classList.remove("cannabis");
    document.getElementById("scale").classList.remove("sedatives");
    document.getElementById("scale").classList.remove("opioids");
    document.getElementById("map-head").innerHTML = "Percentage of People Consuming Alcohol In India (Aged 10-75 years)";
    localStorage.setItem("mapmode" , "alcohol");
    document.getElementById("data-p").innerHTML = "All India: 14.6%";
    document.getElementById("alcohol-btn").classList.add("active-map");
    document.getElementById("cannabis-btn").classList.remove("active-map");
    document.getElementById("sedatives-btn").classList.remove("active-map");
    document.getElementById("opioids-btn").classList.remove("active-map");
    var i;
    
    for (i = 0; i < 36; i++) {
    var x = document.getElementsByTagName("path")[i];
    switch (x.id) {
        case "IN-CT":
            generatealcoholcolor(35.6);
            break;
        case "IN-HR":
            generatealcoholcolor(21.6);
            break;
        case "IN-RJ":
            generatealcoholcolor(2.1);
            break;
        case "IN-PB":
            generatealcoholcolor(28.5);
            break;
        case "IN-DL":
            generatealcoholcolor(21.3);
            break;
        case "IN-UP":
            generatealcoholcolor(23.8);
            break;
        case "IN-TR":
            generatealcoholcolor(34.7);
            break;
        case "IN-AR":
            generatealcoholcolor(28);
            break;
        case "IN-GA":
            generatealcoholcolor(26.4);
            break;
        case "IN-AN":
            generatealcoholcolor(25.4);
            break;
        case "IN-MP":
            generatealcoholcolor(17.7);
            break;
        case "IN-TN":
            generatealcoholcolor(14.2);
            break;
        case "IN-MN":
            generatealcoholcolor(22.4);
            break;
        case "IN-UT":
            generatealcoholcolor(18.8);
            break;
        case "IN-CH":
            generatealcoholcolor(17.5);
            break;
        case "IN-TG":
            generatealcoholcolor(16.8);
            break;
        case "IN-WB":
            generatealcoholcolor(16.7);
            break;
        case "IN-OR":
            generatealcoholcolor(16.4);
            break;
        case "IN-SK":
            generatealcoholcolor(15.7);
            break;
        case "IN-AP":
            generatealcoholcolor(13.7);
            break;
        case "IN-KL":
            generatealcoholcolor(12.4);
            break;
        case "IN-DD":
            generatealcoholcolor(18.3);
            break;
        case "IN-DN":
            generatealcoholcolor(11.6);
            break;
        case "IN-PY":
            generatealcoholcolor(9.5);
            break;
        case "IN-HP":
            generatealcoholcolor(8.9);
            break;
        case "IN-AS":
            generatealcoholcolor(8.8);
            break;
        case "IN-NL":
            generatealcoholcolor(8.1);
            break;
        case "IN-MZ":
            generatealcoholcolor(7.8);
            break;
        case "IN-JH":
            generatealcoholcolor(6.5);
            break;
        case "IN-KA":
            generatealcoholcolor(6.4);
            break;
        case "IN-MH":
            generatealcoholcolor(5.7);
            break;
        case "IN-GJ":
            generatealcoholcolor(3.9);
            break;
        case "IN-JK":
            generatealcoholcolor(3.5);
            break;
        case "IN-ML":
            generatealcoholcolor(3.4);
            break;
        case "IN-BR":
            generatealcoholcolor(0.9);
            break;
        case "IN-LD":
            generatealcoholcolor(0.2);
            break;
        }
}
};

function cannabismap() {
    function generatecannabiscolor(cannabis){
        var red = 255-((cannabis/7.3)*205); 
        var blue = 255;
        var green = 255;
        var color =  "rgb" + "(" + red + "," + green + "," + blue + ")";
        x.style.fill = color;
        x.setAttribute("onmouseover" , "generatealcholvalue(" + cannabis + ")");
    }

    document.getElementById("scale-low").innerHTML = "0%";
    document.getElementById("scale-high").innerHTML = "7.3%";
    document.getElementById("map-head").innerHTML = "Percentage of People Consuming Cannabis In India (Aged 10-75 years)";
    document.getElementById("scale").classList.remove("alcohol");
    localStorage.setItem("mapmode" , "cannabis");
    document.getElementById("scale").classList.add("cannabis");
    document.getElementById("scale").classList.remove("sedatives");
    document.getElementById("scale").classList.remove("opioids");
    document.getElementById("alcohol-btn").classList.remove("active-map");
    document.getElementById("cannabis-btn").classList.add("active-map");
    document.getElementById("sedatives-btn").classList.remove("active-map");
    document.getElementById("opioids-btn").classList.remove("active-map");
    document.getElementById("data-p").innerHTML = "All India: 1.2%";

    var i;
    
    for (i = 0; i < 36; i++) {
    var x = document.getElementsByTagName("path")[i];
    switch (x.id) {
        case "IN-CT":
            generatecannabiscolor(2.1);
            break;
        case "IN-HR":
            generatecannabiscolor(2.9);
            break;
        case "IN-RJ":
            generatecannabiscolor(0.1);
            break;
        case "IN-PB":
            generatecannabiscolor(1.3);
            break;
        case "IN-DL":
            generatecannabiscolor(3.8);
            break;
        case "IN-UP":
            generatecannabiscolor(3.2);
            break;
        case "IN-TR":
            generatecannabiscolor(0.7);
            break;
        case "IN-AR":
            generatecannabiscolor(4.2);
            break;
        case "IN-GA":
            generatecannabiscolor(0.7);
            break;
        case "IN-AN":
            generatecannabiscolor(0.1);
            break;
        case "IN-MP":
            generatecannabiscolor(0.5);
            break;
        case "IN-TN":
            generatecannabiscolor(0.1);
            break;
        case "IN-MN":
            generatecannabiscolor(2.8);
            break;
        case "IN-UT":
            generatecannabiscolor(1.4);
            break;
        case "IN-CH":
            generatecannabiscolor(0.4);
            break;
        case "IN-TG":
            generatecannabiscolor(0.2);
            break;
        case "IN-WB":
            generatecannabiscolor(0.6);
            break;
        case "IN-OR":
            generatecannabiscolor(4.5);
            break;
        case "IN-SK":
            generatecannabiscolor(7.3);
            break;
        case "IN-AP":
            generatecannabiscolor(0.2);
            break;
        case "IN-KL":
            generatecannabiscolor(0.1);
            break;
        case "IN-DD":
            generatecannabiscolor(1.3);
            break;
        case "IN-DN":
            generatecannabiscolor(0.1);
            break;
        case "IN-PY":
            generatecannabiscolor(0.1);
            break;
        case "IN-HP":
            generatecannabiscolor(3.2);
            break;
        case "IN-AS":
            generatecannabiscolor(0.5);
            break;
        case "IN-NL":
            generatecannabiscolor(4.7);
            break;
        case "IN-MZ":
            generatecannabiscolor(3.2);
            break;
        case "IN-JH":
            generatecannabiscolor(0.3);
            break;
        case "IN-KA":
            generatecannabiscolor(0.4);
            break;
        case "IN-MH":
            generatecannabiscolor(0.5);
            break;
        case "IN-GJ":
            generatecannabiscolor(0.1);
            break;
        case "IN-JK":
            generatecannabiscolor(0.7);
            break;
        case "IN-ML":
            generatecannabiscolor(1.7);
            break;
        case "IN-BR":
            generatecannabiscolor(1.1);
            break;
        case "IN-LD":
            generatecannabiscolor(0.1);
            break;
        }
}
};

function opioidsmap() {
    function generateopioidscolor(opioids){
        var green = 255-((opioids/6.9)*355); 
        var blue = 255;
        var red = 250;
        var color =  "rgb" + "(" + red + "," + green + "," + blue + ")";
        x.style.fill = color;
        x.setAttribute("onmouseover" , "generatealcholvalue(" + opioids + ")");
    }

    document.getElementById("scale-low").innerHTML = "0%";
    document.getElementById("scale-high").innerHTML = "6.9%";
    document.getElementById("map-head").innerHTML = "Percentage of People Consuming Opioids In India (Aged 10-75 years)";
    document.getElementById("scale").classList.remove("alcohol");
    localStorage.setItem("mapmode" , "opioids");
    document.getElementById("scale").classList.remove("cannabis");
    document.getElementById("scale").classList.remove("sedatives");
    document.getElementById("scale").classList.add("opioids");
    document.getElementById("alcohol-btn").classList.remove("active-map");
    document.getElementById("opioids-btn").classList.add("active-map");
    document.getElementById("sedatives-btn").classList.remove("active-map");
    document.getElementById("cannabis-btn").classList.remove("active-map");
    document.getElementById("data-p").innerHTML = "All India: 0.7%";

    var i;
    
    for (i = 0; i < 36; i++) {
    var x = document.getElementsByTagName("path")[i];
    switch (x.id) {
        case "IN-CT":
            generateopioidscolor(0.6);
            break;
        case "IN-HR":
            generateopioidscolor(2.5);
            break;
        case "IN-RJ":
            generateopioidscolor(0.5);
            break;
        case "IN-PB":
            generateopioidscolor(2.8);
            break;
        case "IN-DL":
            generateopioidscolor(2.3);
            break;
        case "IN-UP":
            generateopioidscolor(0.6);
            break;
        case "IN-TR":
            generateopioidscolor(1.5);
            break;
        case "IN-AR":
            generateopioidscolor(5.7);
            break;
        case "IN-GA":
            generateopioidscolor(1.5);
            break;
        case "IN-AN":
            generateopioidscolor(0.5);
            break;
        case "IN-MP":
            generateopioidscolor(0.6);
            break;
        case "IN-TN":
            generateopioidscolor(0.2);
            break;
        case "IN-MN":
            generateopioidscolor(4);
            break;
        case "IN-UT":
            generateopioidscolor(0.8);
            break;
        case "IN-CH":
            generateopioidscolor(0.9);
            break;
        case "IN-TG":
            generateopioidscolor(0.7);
            break;
        case "IN-WB":
            generateopioidscolor(0.4);
            break;
        case "IN-OR":
            generateopioidscolor(0.8);
            break;
        case "IN-SK":
            generateopioidscolor(5.1);
            break;
        case "IN-AP":
            generateopioidscolor(0.8);
            break;
        case "IN-KL":
            generateopioidscolor(0.4);
            break;
        case "IN-DD":
            generateopioidscolor(2.5);
            break;
        case "IN-DN":
            generateopioidscolor(0.5);
            break;
        case "IN-PY":
            generateopioidscolor(0.6);
            break;
        case "IN-HP":
            generateopioidscolor(1.7);
            break;
        case "IN-AS":
            generateopioidscolor(0.9);
            break;
        case "IN-NL":
            generateopioidscolor(6.5);
            break;
        case "IN-MZ":
            generateopioidscolor(6.9);
            break;
        case "IN-JH":
            generateopioidscolor(0.3);
            break;
        case "IN-KA":
            generateopioidscolor(0.5);
            break;
        case "IN-MH":
            generateopioidscolor(0.5);
            break;
        case "IN-GJ":
            generateopioidscolor(0.4);
            break;
        case "IN-JK":
            generateopioidscolor(1.5);
            break;
        case "IN-ML":
            generateopioidscolor(2);
            break;
        case "IN-BR":
            generateopioidscolor(0.1);
            break;
        case "IN-LD":
            generateopioidscolor(0.6);
            break;
        }
}
};

function sedativesmap() {
    function generatesedativescolor(sedatives){
        var green = 255-((sedatives/2.91)*585); 
        var blue = 00;
        var red = 255;
        var color =  "rgb" + "(" + red + "," + green + "," + blue + ")";
        x.style.fill = color;
        x.setAttribute("onmouseover" , "generatealcholvalue(" + sedatives + ")");
    }

    document.getElementById("scale-low").innerHTML = "0%";
    document.getElementById("scale-high").innerHTML = "2.91%";
    document.getElementById("map-head").innerHTML = "Percentage of People Consuming Sedatives In India (Aged 10-75 years)";
    document.getElementById("scale").classList.remove("alcohol");
    document.getElementById("scale").classList.remove("opioids");
    document.getElementById("scale").classList.remove("cannabis");
    localStorage.setItem("mapmode" , "sedatives");
    document.getElementById("scale").classList.add("sedatives");
    document.getElementById("alcohol-btn").classList.remove("active-map");
    document.getElementById("sedatives-btn").classList.add("active-map");
    document.getElementById("opioids-btn").classList.remove("active-map");
    document.getElementById("cannabis-btn").classList.remove("active-map");
    document.getElementById("data-p").innerHTML = "All India: 0.2%";

    var i;
    
    for (i = 0; i < 36; i++) {
    var x = document.getElementsByTagName("path")[i];
    switch (x.id) {
        case "IN-CT":
            generatesedativescolor(0.27);
            break;
        case "IN-HR":
            generatesedativescolor(0.52);
            break;
        case "IN-RJ":
            generatesedativescolor(0.06);
            break;
        case "IN-PB":
            generatesedativescolor(0.80);
            break;
        case "IN-DL":
            generatesedativescolor(0.55);
            break;
        case "IN-UP":
            generatesedativescolor(0.20);
            break;
        case "IN-TR":
            generatesedativescolor(0.12);
            break;
        case "IN-AR":
            generatesedativescolor(1.02);
            break;
        case "IN-GA":
            generatesedativescolor(0.25);
            break;
        case "IN-AN":
            generatesedativescolor(0.16);
            break;
        case "IN-MP":
            generatesedativescolor(0.18);
            break;
        case "IN-TN":
            generatesedativescolor(0.06);
            break;
        case "IN-MN":
            generatesedativescolor(1.43);
            break;
        case "IN-UT":
            generatesedativescolor(0.39);
            break;
        case "IN-CH":
            generatesedativescolor(0.28);
            break;
        case "IN-TG":
            generatesedativescolor(0.22);
            break;
        case "IN-WB":
            generatesedativescolor(0.13);
            break;
        case "IN-OR":
            generatesedativescolor(0.31);
            break;
        case "IN-SK":
            generatesedativescolor(2.91);
            break;
        case "IN-AP":
            generatesedativescolor(0.31);
            break;
        case "IN-KL":
            generatesedativescolor(0.09);
            break;
        case "IN-DD":
            generatesedativescolor(0.03);
            break;
        case "IN-DN":
            generatesedativescolor(0.05);
            break;
        case "IN-PY":
            generatesedativescolor(0.74);
            break;
        case "IN-HP":
            generatesedativescolor(0.39);
            break;
        case "IN-AS":
            generatesedativescolor(0.15);
            break;
        case "IN-NL":
            generatesedativescolor(1.75);
            break;
        case "IN-MZ":
            generatesedativescolor(1.26);
            break;
        case "IN-JH":
            generatesedativescolor(0.10);
            break;
        case "IN-KA":
            generatesedativescolor(0.09);
            break;
        case "IN-MH":
            generatesedativescolor(0.21);
            break;
        case "IN-GJ":
            generatesedativescolor(0.23);
            break;
        case "IN-JK":
            generatesedativescolor(0.29);
            break;
        case "IN-ML":
            generatesedativescolor(0.17);
            break;
        case "IN-BR":
            generatesedativescolor(0.01);
            break;
        case "IN-LD":
            generatesedativescolor(0.21);
            break;
        }
}
};

