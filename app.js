var rgbDisplay = document.querySelector("#rgbDisplay");
var header = document.getElementById("header");




function rgbGenerator() {
    var min=0; 
    var max=255;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    document.write("Random Number Generated : " + random ); 
    return random;
}

function colorGenerate(){
    return "("+rgbGenerator()+", "+rgbGenerator()+", "+rgbGenerator()+")"
};

var color = colorGenerate();

rgbDisplay.textContent = color;


function newColor(rgb){
    rgb = "rgb"+colorGenerate;
    header.style.backgroundColor = rgb;    
}