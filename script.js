const btn = document.querySelector("#btn");

// Create grid
function createGrid(input) {
    // Setting Parameters for Grid
    input;

    const gridContainer = document.querySelector("#container");
    let gridWidth = (1000/ input);
    console.log("Div Width: " + gridWidth);
    // gridWidth.toFixed(2);
    
    // Create grid
    for(let i = 0; i <input; i++){
        console.log("Row " + i + " Created");
        for (let j = 0; j < input; j++){
            console.log("Div " + i + " Created");
            const gridDiv = document.createElement("div");
            gridDiv.id = "grid";
            gridDiv.style.width = ""+ gridWidth +"px";
            gridDiv.addEventListener("mouseenter", () => {
                let r = Math.floor(Math.random()*256);
                console.log("R: " + r);
                let g = Math.floor(Math.random()*256);
                console.log("G: " + g);
                let b = Math.floor(Math.random()*256);
                console.log("B: " + b);
                gridDiv.style.backgroundColor = "rgb("+r+","+g+","+b+")"; 
            });
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
    let intInput = parseInt(input);
    console.log("Input: " + intInput)
    if(document.querySelector("#grid"))
    {
        deleteGrid();
    }
    
    createGrid(intInput);
    
});

