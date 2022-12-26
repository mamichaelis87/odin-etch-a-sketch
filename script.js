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

const rows = document.querySelectorAll(".row");
rows.forEach(createColumns);

function changeBackground(square) {
    square.setAttribute('id', "hovering")
}

const blocks = document.querySelectorAll(".block");
blocks.forEach((block)=>{
    block.addEventListener("mouseover", () => {changeBackground(block);
    })})

