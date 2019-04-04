var rgbDisplay = document.querySelector("#rgbDisplay");
var header = document.getElementById("header");
var newColorBtn = document.querySelector("#newColorsButton");
var activeDiff = document.querySelector(".diff-active");
var squares = document.querySelectorAll(".square");



function rgbGenerator() {
    var min=0; 
    var max=255;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

function colorGenerate(){
    return "("+rgbGenerator()+", "+rgbGenerator()+", "+rgbGenerator()+")"
};

function randomSquares(){
    for (var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = "rgb"+colorGenerate();
    }
};

function newColor(){
    var color = colorGenerate();
    header.style.backgroundColor = "rgb"+color;
    rgbDisplay.textContent = color;
    activeDiff.style.backgroundColor = "rgb"+color;
    randomSquares();
    
}

newColor();

newColorBtn.addEventListener("click", function(){
    newColor();
});
newColorBtn.addEventListener("mouseOver", function(){

});
