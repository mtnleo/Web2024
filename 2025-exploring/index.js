const cellSize = 32; // 2 rem

function initCells() {
    let cpw = Math.floor(window.innerWidth / cellSize);
    let cph = Math.floor(window.innerHeight / cellSize);
    let containerElement = document.querySelector(".container");
    let x, y = 0;

    for(let i = 0; i < cph * cpw; i++) {
        
        let newElement = document.createElement('div');
        newElement.className = 'cell';
        newElement.addEventListener('click', () => {
            if(newElement.style.backgroundColor === 'white') {
                newElement.style.backgroundColor = 'transparent';
            } 
            else {
                newElement.style.backgroundColor = 'white';
            }
        });
        y = Math.floor((i / cpw));
        x = i - (cpw * y);
        newElement.id = `${x}-${y}`;

        containerElement?.appendChild(newElement);
    }
}

function checkCells() {

}

function run() {

}

window.addEventListener("DOMContentLoaded", () => {
    initCells();
});