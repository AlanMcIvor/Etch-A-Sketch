let color = 'black';

// set color to black when black button clicked
let blackBtn = document.querySelector(".black-btn");
blackBtn.addEventListener('click', function(){
    color = "black";
})

// set color to white when black button clicked
let whiteBtn = document.querySelector(".white-btn");
whiteBtn.addEventListener('click', function(){
    color = "white";
})

// set color to a random color when black button clicked
let randomBtn = document.querySelector(".random-btn");
randomBtn.addEventListener('click', function(){
    color = "random";
})

// set color to a random color when black button clicked
let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener('click', function(){
    let board = document.querySelector(".container");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = '#8C8C8C');
})

// set the size of the grid
let populateBoard = size => {
// grab the container and create grid elements
let board = document.querySelector(".container");
let squares = board.querySelectorAll("div");
// remove each previous square
squares.forEach((div) => {
    div.remove;
})
// create a grid based on the size input
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

// loop through and insert a div with the class of square 
let amount = size * size;
for(i=0; i<amount ; i++){
        let square = document.createElement('div');
        // when user hovers over each square, call the change colour function
        square.addEventListener("mouseover", squareColor);
        square.style.backgroundColor = '#8C8C8C';

        board.insertAdjacentElement('beforeend', square);
    }
}

// get the value of the size input when the set size button is clicked and pass it to the change size function
let inputBtn = document.querySelector(".input-btn");
inputBtn.addEventListener("click", function(){
    let inputVal = document.querySelector(".grid-size").value;
    inputVal = parseInt(inputVal);
    changeSize(inputVal)
})

// default the board size to 16 squares
populateBoard(16);


// chnage the size of the grid based upon the users input
let changeSize = input => {
    if(input >=2 && input <=100){
    populateBoard(input);
    }else{
        console.log("Error, to many or to little squares")
    }
}

// change teh colour of each square upon hover
function squareColor(){
    if(color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}


function changeColor(choice){
    color = choice;
}

