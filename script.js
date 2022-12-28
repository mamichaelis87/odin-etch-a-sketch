const container = document.querySelector(".container");

for (let i=0; i<16; i++) { 
    let div = document.createElement('div');
    div.classList.add('row');
    container.appendChild(div);
}

function createColumns(row) {
    for (let i=0; i<16; i++) { 
        let div = document.createElement('div');
        div.classList.add('block');
        row.appendChild(div);
    }
}

let rows = document.querySelectorAll(".row");
rows.forEach(createColumns);

function changeBackground(square) {
    square.setAttribute('id', "hovering")
}

let blocks = document.querySelectorAll(".block");
blocks.forEach((block)=>{
    block.addEventListener("mouseover", () => {changeBackground(block);
    })})

const gridSizeButton = document.querySelector(".gridSize");

function getGridSize() {
   let userGridSize = prompt("Please enter what size you would like the grid to be. (Any number between 1-100).");
   while (isNaN(userGridSize) || parseInt(userGridSize) <= 0 || parseInt(userGridSize) > 100){
    userGridSize = prompt ("That is not an acceptable value, please enter a number between 1 and 100.");
    }
   return userGridSize;
}

//gridSizeButton.addEventListener('click', ()=>{getGridSize()});

function setGridSize() {

    rows = document.querySelectorAll(".row");
    blocks = document.querySelectorAll(".block");

    blocks.forEach((block) => {block.remove()});
    rows.forEach((row) => {row.remove()});
    
   let newGridSize = getGridSize();

   for (let i=0; i<newGridSize; i++) { 
    let div = document.createElement('div');
    div.classList.add('row');
    container.appendChild(div);
}
    rows = document.querySelectorAll(".row");

    rows.forEach((row)=>{
        for (let i=0; i<newGridSize; i++) { 
            let div = document.createElement('div');
            div.classList.add('block');
            row.appendChild(div);
        }
    })

    blocks = document.querySelectorAll(".block");

    blocks.forEach((block)=>{
        block.addEventListener("mouseover", () => {changeBackground(block);
        })})

}

gridSizeButton.addEventListener('click', ()=>{setGridSize()});


