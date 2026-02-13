
//create 16x16 grid of square divs to draw with 
function createCanvas(size) {
    let canvas = document.querySelector(".canvas"); 
    for (let i = 0; i < size; i++)
    {
        let grid_row = document.createElement("div");
        grid_row.setAttribute("class", "grid-row"); 
        canvas.appendChild(grid_row); 

        for (let j = 0; j < size; j++)
        {
            let new_div = document.createElement("div");
            new_div.setAttribute("class", "grid-square");
            new_div.style.width = (960 / size).toString() + 'px';
            new_div.style.height = (960 / size).toString() + 'px';
            new_div.addEventListener("mouseover", () => { new_div.classList.add("hover") } );
            grid_row.appendChild(new_div);
        }
    }
}

function deleteCanvas()
{

    let canvas = document.querySelector(".canvas"); 
    while(canvas.firstChild){

        let row = canvas.lastChild; 
        while(row.firstChild)
        {
            row.removeChild(row.lastChild);
        }

        canvas.removeChild(canvas.lastChild); 
    }
}

function promptSize()
{
    let size = 16; 
    
    do {

        size = prompt("Please enter a new resolution for the square."); 

    } while (size >= 100);
    
    deleteCanvas(); 
    createCanvas(size); 
}

function initialize() {
    let btn = document.querySelector(".prompter");
    btn.addEventListener("click", promptSize)

    createCanvas(16); 
}

initialize(); 
