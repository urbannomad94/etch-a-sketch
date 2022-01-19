const gridContainer = document.querySelector('.grid-container');
const buttonContainer = document.querySelector('.buttons');
const topButtons = document.querySelector('.top-buttons');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRainbow = document.createElement('button');
//const btnColor = document.createElement('button');
const btnGridSize = document.createElement('button');
const btnEraser = document.createElement('button');
const btnReset = document.createElement('button');
const btnGridLines = document.createElement('button');

function makeTable (cols, rows){
    for (let i = 0; i < (cols * rows); i++){
        const div = document.createElement('div');
        div.style.border = '1px solid gray';
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        gridTemplateRows = `repeat(${rows}, 1fr)`
        gridContainer.appendChild(div).classList.add('box');
    }
}
makeTable(16,16);

function changeGridSize() {
    btnGridSize.textContent = "Change Grid Size"
    btnGridSize.addEventListener('click', () => {
        let x = prompt("How many rows and columns would you like the grid to have?");
        makeTable(x,x);
    })
    topButtons.appendChild(btnGridSize).classList.add('btn');
}

changeGridSize();

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

function reset() {
    const boxes = gridContainer.querySelectorAll('.box');
    btnReset.textContent = 'Reset';
    btnReset.addEventListener('click', () =>{ 
        boxes.forEach(box => box.style.background = 'white');
        }
    )
    topButtons.appendChild(btnReset).classList.add('btn');
}

reset();