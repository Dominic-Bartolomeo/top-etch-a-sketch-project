const btn = document.querySelector("#btn");

// let input = 16;

// Create grid
function createGrid(input) {
    // Create input,input grid
    let realInput = input++;
    const gridContainer = document.querySelector("#container");
    let gridWidth = (960 / input);
    // console.log("RealInput:" + realInput);
    console.log("Before rounding:" + gridWidth + "|" + input + "/" + gridWidth);
    gridWidth = Math.round(gridWidth);
    console.log("After rounding:" + gridWidth + "|" + input + "/" + gridWidth);
    for(let i = 0; i<realInput;i++)
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

btn.addEventListener("click", () => {
    let input = prompt("Enter number of squares on each side (max 100).");
    while (input > 100 || input < 2 || isNaN(input)) {
        input = prompt("The number must be between 2-100. Try again.");
    }
    intInput = parseInt(input);
    createGrid(intInput);
});

