function createGrid(userGridSize) {
    gridContainerDiv.textContent = "";
    let gridSide = gridContainerDiv.offsetHeight / userGridSize;
    let gridArea = userGridSize * userGridSize;
    for (let i = 0; i < gridArea; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.width = gridSide.toString();
        newDiv.style.height = gridSide.toString();
        newDiv.ondragstart = () => false;
        newDiv.addEventListener('mousedown', () => changeColor(newDiv));
        newDiv.addEventListener('mouseover', () => {
            if (mouseDown) {
                changeColor(newDiv)
            }
        })
        gridContainerDiv.appendChild(newDiv);
    }
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${blue}, ${green})`;
}


function changeColor(div) {
    if (selectedColor === 'black') {
        div.style.backgroundColor = 'black';
    } else if ( selectedColor === 'rainbow') {
        div.style.backgroundColor = getRandomColor();
    } else {
        div.style.backgroundColor = 'white';
    }
}
let selectedColor = 'black';
const colorSelector = document.getElementById('color-select');
colorSelector.addEventListener('change', () => selectedColor = colorSelector.value);

// Clear grid button
document.getElementById('clear-grid').addEventListener('click', () => createGrid(slider.value));

let mouseDown = false;
const slider = document.getElementById('slider');
const sliderDisplay = document.getElementById('slider-value-display');
sliderDisplay.textContent = `${slider.value} X ${slider.value}`
const gridContainerDiv = document.getElementById('grid-container');

createGrid(slider.value);

// Event listeners to allow dragging stencil
gridContainerDiv.onmousedown = () => mouseDown = true;
gridContainerDiv.onmouseup = () => mouseDown = false;

// Allow user to set grid via slider
slider.addEventListener('click', () => {
    sliderDisplay.textContent = `${slider.value} X ${slider.value}`;
    createGrid(slider.value);
})
