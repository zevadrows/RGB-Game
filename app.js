var rgbDisplay = document.querySelector("#rgbDisplay");
var header = document.getElementById("header");
var newColorBtn = document.querySelector("#newColorsButton");
var activeDiff = document.querySelector(".diff-active");
var squares = document.querySelectorAll(".square");



function rgbGenerator() {
    var min = 0;
    var max = 255;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

function randomNumber6() {
    var min = 0;
    var max = 5;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
};
function randomNumber3() {
    var min = 0;
    var max = 2;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
};

function colorGenerate() {
    return "(" + rgbGenerator() + ", " + rgbGenerator() + ", " + rgbGenerator() + ")"
};

function randomSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "rgb" + colorGenerate();
    }
};

function newColor() {
    setDifficulty();
    var color = colorGenerate();
    rgbDisplay.textContent = color;
    randomSquares();
    var randNum = randomNumber6();
    var rightSquare = squares[randNum];
    rightSquare.style.backgroundColor = "rgb" + color;
    for (var i = 0; i < squares.length; i++) {
        if (squares[i] == rightSquare) {
            squares[i].addEventListener("click", function () {
                /* Trying to make every square turn into rightSquare color
                for (var i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = rightSquare.style.backgroundColor;
                }
                */
                rgbDisplay.textContent = "SUCCESS";
            });
        }
        else {
            squares[i].addEventListener("click", function () {
                //trying to make wrong  square[i] disappear
                //squares[i].style.opacity = "0";

                rgbDisplay.textContent = "WRONG!!!";
            });
        }
    }
}

//difficulty session
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");
var difficultyEasy = false;
function setDifficulty() {
    if (difficultyEasy == false) {
        easyBtn.addEventListener("click", function () {
            easyBtn.classList.add("diff-active");
            hardBtn.classList.remove("diff-active");
            difficultyEasy = true;
        });
    }
    else {
        hardBtn.addEventListener("click", function () {
            hardBtn.classList.add("diff-active");
            easyBtn.classList.remove("diff-active");
            difficultyEasy = false;
        });
    }
}


newColor();


newColorBtn.addEventListener("click", function () {
    newColor();
});



