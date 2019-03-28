var rgbDisplay = document.querySelector("#rgbDisplay");
var header = document.getElementById("header");
var newColBtn = document.querySelector("#newColorsButton")



function rgbGenerator() {
    var min=0; 
    var max=255;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

function colorGenerate(){
    return "("+rgbGenerator()+", "+rgbGenerator()+", "+rgbGenerator()+")"
};

function newColor(rgb){
    var color = colorGenerate();
    header.style.backgroundColor = "rgb"+color;
    rgbDisplay.textContent = color;
}

newColor();

newColBtn.addEventListener("click", function(){
    newColor();
});
