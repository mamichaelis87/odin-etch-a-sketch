const container = document.querySelector(".container");

const gridSizeButton = document.querySelector(".gridSize");

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

function randomBackground(square) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = "#" + randomColor;
}

let blocks = document.querySelectorAll(".block");
// blocks.forEach((block)=>{
//     block.addEventListener("mouseover", () => {changeBackground(block);
//     })})
blocks.forEach((block)=>{
    block.addEventListener("mouseover", () => {randomBackground(block);
    })})

function getGridSize() {
   let userGridSize = document.querySelector("#myRange").value;
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

    // blocks.forEach((block)=>{
    //     block.addEventListener("mouseover", () => {changeBackground(block);
    //     })})

    blocks.forEach((block)=>{
        block.addEventListener("mouseover", () => {randomBackground(block)}
        )})

}

gridSizeButton.addEventListener('click', ()=>{setGridSize()});