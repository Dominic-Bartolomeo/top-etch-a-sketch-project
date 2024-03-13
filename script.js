const btn = document.querySelector("#btn");

let input = 16;

// Create grid
function createGrid(input) {
    // Create input,input grid
    const gridContainer = document.querySelector("#container");
    let gridHW = (960 / input);
    for (let i = 0; i < input; i++){
        const gridDiv = document.createElement("div");
        gridDiv.id = "grid";
        gridDiv.style.backgroundColor = "blue";
        gridDiv.style.width = ""+gridHW+"px";
        gridDiv.style.minHeight = ""+gridHW+"px";
        gridContainer.appendChild(gridDiv);
    }
}

btn.addEventListener("click", () => {
    let input = prompt("Enter number of squares on each side (max 100).");
    while (input > 100 || input < 2 || isNaN(input)) {
        input = prompt("The number must be between 2-100. Try again.");
    }
    createGrid(input);
});

