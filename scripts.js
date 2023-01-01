grid = document.getElementById('grid');

function createDiv(size) {
    const div = document.createElement('div');
    div.style.backgroundColor = "red";
    div.style.width = `${size}px`;
    div.style.width = `${size}px`;
    
    return div;
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        grid.appendChild(createDiv(grid.clientWidth / size));  
    }
}

createGrid(32);