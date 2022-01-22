//Declaring variables
const gridContainer = document.querySelector('.grid-container');
const buttonContainer = document.querySelector('.buttons');
const topButtons = document.querySelector('.top-buttons');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRainbow = document.createElement('button');
//const btnColor = document.createElement('button');
const btnEraser = document.createElement('button');
const btnClear = document.createElement('button');
const btnGridSize = document.createElement('button');
const btnGridlines = document.createElement('button');

//Makes a grid of divs
function makeTable (cols, rows){
    for (let i = 0; i < (cols * rows); i++){
        const div = document.createElement('div');
        div.style.border = '1px solid gray';
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        gridContainer.appendChild(div).classList.add('box');
    }
}
makeTable(16,16);

//Button that promps user for desired grid dimension
function changeGridSize() {
    btnGridSize.textContent = "Change Grid Size"
    btnGridSize.addEventListener('click', () => {
        let x = prompt("How many rows and columns would you like the grid to have?");
        if (x === null || x < 1 || x > 100) {
            reset();
            makeTable(16,16);
        }
        else {
            makeTable(x,x);
        }
    })
    topButtons.appendChild(btnGridSize).classList.add('btn');
}

changeGridSize();

//Button that lets the user draw in grayscale
function grayColor() {
    const boxes = gridContainer.querySelectorAll('.box');
    btnGray.textContent = 'Grey';
    btnGray.addEventListener('click', () =>{ 
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let random = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${random},${random},${random})`
        }))
    })
    buttonContainer.appendChild(btnGray).classList.add('btn');
}

grayColor();

//Button that lets the user draw in "rainbow"
function rainbowColor() {
    const boxes = gridContainer.querySelectorAll('.box');
    btnRainbow.textContent = 'Rainbow';
    btnRainbow.addEventListener('click', () =>{ 
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let random = Math.floor(Math.random() * 16777215).toString(16);
            box.style.background = `#${random}`
        }))
    })
    buttonContainer.appendChild(btnRainbow).classList.add('btn');
}

rainbowColor();

//Button that lets the user draw in black
function blackColor() {
    const boxes = gridContainer.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () =>{ 
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })
    buttonContainer.appendChild(btnBlack).classList.add('btn');
}

blackColor();

//Button that allows the user to erase what's on the grid (really just coloring in white)
function eraser() {
    const boxes = gridContainer.querySelectorAll('.box');
    btnEraser.textContent = 'Eraser';
    btnEraser.addEventListener('click', () =>{ 
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'white';
        }))
    })
    buttonContainer.appendChild(btnEraser).classList.add('btn');
}

eraser();

//Button that clears the grid
function clear() {
    const boxes = gridContainer.querySelectorAll('.box');
    btnClear.textContent = 'Clear';
    btnClear.addEventListener('click', () =>{ 
        boxes.forEach(box => box.style.background = 'white');
        }
    )
    topButtons.appendChild(btnClear).classList.add('btn')
}

clear();

function reset() {
    const boxes = gridContainer.querySelectorAll('.box');
    boxes.forEach(box => box.remove())
}

    //Trying to make the border white so the grid disappers ///Not functioning yet

    /*
function toggleGridLines() {
    const boxes = gridContainer.querySelectorAll('.box');
    btnGridlines.textContent = 'Toggle Gridlines';
    btnGridlines.addEventListener('click', () => {
        boxes.style.border = 'white';
    })
    topButtons.appendChild(btnGridlines).classList.add('btn');
}

toggleGridLines();
    */