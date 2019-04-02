var rgbDisplay = document.querySelector("#rgbDisplay");
var header = document.getElementById("header");
var newColorBtn = document.querySelector("#newColorsButton");
var activeDiff = document.querySelector(".diff-active");



function rgbGenerator() {
    var min=0; 
    var max=255;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

function colorGenerate(){
    return "("+rgbGenerator()+", "+rgbGenerator()+", "+rgbGenerator()+")"
};

function newColor(){
    var color = colorGenerate();
    header.style.backgroundColor = "rgb"+color;
    rgbDisplay.textContent = color;
    //esse comando não tá funcionando:
    // active.style.backgroundColor = "rgb"+color;
    
    
}

newColor();

newColorBtn.addEventListener("click", function(){
    newColor();
});
newColorBtn.addEventListener("mouseOver", function(){

});
