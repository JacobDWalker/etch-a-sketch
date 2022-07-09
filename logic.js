
const gridContainerDiv = document.getElementById('grid-container');

function createGrid() {
    let gridSize = Number(prompt("How big should each side of the grid be?"));

    if (gridSize > 100 || gridSize < 1) {
        alert("Grid size too large");
    } else {
        gridContainerDiv.textContent = "";
        let gridSide = gridContainerDiv.offsetHeight / gridSize;
        for (let i = 0; i < gridSize * gridSize; i++) {
            let newDiv = document.createElement('div');
            // newDiv.style.outline = 'auto';
            newDiv.style.width = gridSide.toString();
            newDiv.style.height = gridSide.toString();
            gridContainerDiv.appendChild(newDiv);
        }
        console.log("done");
    }



}