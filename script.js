const container = document.querySelector(".container");

for (let i=0; i<16; i++) { 
    let div = document.createElement('div');
    div.classList.add('row');
    container.appendChild(div);
}

function createColumns(row) {
    for (let i=0; i<16; i++) { 
        let div = document.createElement('div');
        div.classList.add('column');
        row.appendChild(div);
    }
}

const rows = document.querySelectorAll(".row");
rows.forEach(createColumns);