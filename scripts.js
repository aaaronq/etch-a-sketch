// Define Variables
grid = document.getElementById('grid');
colorPicker = document.getElementById('colorPicker');
rainbow = document.getElementById('rainbow');
eraser = document.getElementById('eraser');
clear = document.getElementById('clear');
slider = document.getElementById('slider')
slideroutput = document.getElementById('slideroutput')
checkbox = document.getElementById('checkbox');


// Default size of grid 8x8
let size = 8;

// Continous mode
let continuousmode = true;
checkbox.addEventListener('change', () => {
    if (checkbox.checked == true) continuousmode = true;
    else continuousmode = false;
});

// Determine whether mouse is clicked down
let mousedown = false;
document.body.onmousedown = () => mousedown = true;
document.body.onmouseup = () => mousedown = false;

function createDiv(size) {
    const div = document.createElement('div');
    div.style.backgroundColor = "white";
    div.style.width = `${size}px`;
    div.style.width = `${size}px`;
    div.classList.add('box');
    
    return div;
}

function createGrid(size) {
    if (grid.children.length > 0) deleteGrid();
    for (let i = 0; i < size * size; i++) {
        grid.appendChild(createDiv(grid.clientWidth / size));  
    }
    addHover("#333333")
}

function addHover(color) {
    divs = document.querySelectorAll('.box');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
                if (continuousmode == false && mousedown !== true) return;
                if (color === "rainbow") {
                    let r = Math.floor(Math.random() * 256);
                    let g = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    div.style.backgroundColor = `rgb(${r},${b},${g})`
                }
                else div.style.backgroundColor = color;
        });
    });
}

function deleteGrid() {
    let length = grid.children.length;
    if (length === 0) return;
    for (let i = 0; i < length; i++) {
        grid.children[0].remove();
    }
}

// Create grid for first time
createGrid(size);

// Event Listeners
colorPicker.oninput = (e) => addHover(e.target.value);
clear.onclick = () => createGrid(size);
eraser.onclick = () => addHover("white");
rainbow.onclick = () => addHover("rainbow");
slider.oninput = (e) => {
    size = e.target.value;
    slideroutput.textContent =  `${size}x${size}`;
    createGrid(size);
}