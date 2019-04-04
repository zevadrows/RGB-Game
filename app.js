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

function randomNumber6(){
    var min=0; 
    var max=5;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
};

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
    rgbDisplay.textContent = color;
    //take out this code later
    //activeDiff.style.backgroundColor = "rgb"+color;
    randomSquares();
    var randNum = randomNumber6();
    var rightSquare = squares[randNum];
    rightSquare.style.backgroundColor = "rgb"+color;
    for (var i = 0; i<squares.length; i++){
        if (squares[i] == rightSquare){
            squares[i].addEventListener("click", function(){
                rgbDisplay.textContent = "SUCCESS";
            });
        }
        else {
            squares[i].addEventListener("click", function(){
                rgbDisplay.textContent = "NOT!!!";
            });
        }
    }
}

newColor();

newColorBtn.addEventListener("click", function(){
    newColor();
});



