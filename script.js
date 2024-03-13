const btn = document.querySelector("#btn");

// Create grid
function createGrid(input) {
    // Setting Parameters for Grid
    let realInput = input++;    
    const gridContainer = document.querySelector("#container");
    let gridWidth = (960 / input);

    // while(document.querySelector("#grid")){
    //     gridContainer.removeChild(gridContainer.gridDiv);
        
    // }
    
    // Create grid
    for(let i = 0; i<realInput;i++){
        for (let j = 0; j < realInput; j++){
            const gridDiv = document.createElement("div");
            gridDiv.id = "grid";
            gridDiv.style.backgroundColor = "blue";
            gridDiv.style.width = ""+gridWidth+"px";
            gridDiv.style.border = "1px solid";
            gridDiv.style.borderColor = "black";
            gridContainer.appendChild(gridDiv);
        }
    }
}

function deleteGrid() {
    // Use this to delete the grid....
    if(document.querySelector("#grid")){
        while(document.querySelector("#grid")){
            const delGrid = document.querySelector("#grid");
            const gridContainer = document.querySelector("#container");
            delGrid.remove();
        }
    }
}
btn.addEventListener("click", () => {
    let input = prompt("Enter number of squares on each side (max 100).");
    while (input > 100 || input < 2 || isNaN(input)) {
        input = prompt("The number must be between 2-100. Try again.");
    }
    intInput = parseInt(input);

    if(document.querySelector("#grid"))
    {
        deleteGrid();
    }
    
    createGrid(intInput);
    
});


