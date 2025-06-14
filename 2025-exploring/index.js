const cellSize = 32; // 2 rem

function initCells() {
    let cpw = window.innerWidth / cellSize;
    let cph = window.innerHeight / cellSize;
    let containerElement = document.querySelector(".container");

    for(let i = 0; i < cph * cpw; i++) {
        
        let newElement = document.createElement('div');
        newElement.className = 'cell';
        newElement.addEventListener('click', () => {
            if(newElement.style.backgroundColor === 'white') {
                newElement.style.backgroundColor = 'black';
            } 
            else {
                newElement.style.backgroundColor = 'white';
            }
        })
        containerElement?.appendChild(newElement);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    initCells();
});