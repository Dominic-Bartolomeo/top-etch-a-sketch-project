const btn = document.querySelector("#btn");

let input = 0;

// Create grid
function createGrid(input) {
    // Create input,input grid
}

btn.addEventListener("click", () => {
    let input = prompt("Enter number of squares on each side (max 100).");
    while (input > 100 || input < 2 || isNaN(input)) {
        input = prompt("The number must be between 2-100. Try again.");
    }
});

