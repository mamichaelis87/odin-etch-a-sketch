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

function blackBackground(square) {
    square.classList.add("black")
}

function redBackground(square) {
    square.classList.add("red")
}

function blueBackground(square) {
    square.classList.add("blue")
}

function yellowBackground(square) {
    square.classList.add("yellow")
}

function randomBackground(square) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = "#" + randomColor;
}

function changeBackground(square) {
    if (document.querySelector("#black").checked) {
        blackBackground(square);
    }
    else if (document.querySelector("#red").checked) {
        redBackground(square);
    }
    else if (document.querySelector("#blue").checked) {
        blueBackground(square);
    }
    else if (document.querySelector("#yellow").checked) {
        yellowBackground(square);
    }
    else {
        randomBackground(square);
    }
}

let blocks = document.querySelectorAll(".block");
// blocks.forEach((block)=>{
//     block.addEventListener("mouseover", () => {blackBackground(block);
//     })})
blocks.forEach((block)=>{
    block.addEventListener("mouseover", () => {changeBackground(block);
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
    //     block.addEventListener("mouseover", () => {blackBackground(block);
    //     })})

    blocks.forEach((block)=>{
        block.addEventListener("mouseover", () => {changeBackground(block)}
        )})

}

gridSizeButton.addEventListener('click', ()=>{setGridSize()});