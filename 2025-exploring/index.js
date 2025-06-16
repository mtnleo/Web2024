const cellSize = 32; // 2 rem
let intervalId = null; 
let iterations = 0;

function initCells() {
    let cpw = Math.floor(window.innerWidth / cellSize);
    let cph = Math.floor(window.innerHeight / cellSize);
    let containerElement = document.querySelector(".container");
    let x, y = 0;

    for(let i = 0; i < cph * cpw; i++) {
        
        let newElement = document.createElement('div');
        newElement.className = 'cell';
        newElement.style.backgroundColor = 'transparent';
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

function killCells(cellArray) {
    cellArray.forEach((val) => {
        document.getElementById(val).style.backgroundColor = 'transparent'
    })
}

function spawnCells(cellArray) {
    cellArray.forEach((val) => {
        document.getElementById(val).style.backgroundColor = 'white'
    })
}

function checkNeighborsAlive(x, y) {
    let cpw = Math.floor(window.innerWidth / cellSize);
    let cph = Math.floor(window.innerHeight / cellSize);
    let aliveNeighbors = 0;
    
    ///
    x = Number(x)
    y = Number(y)
    let checkArrayX = [Number(x - 1), Number(x), Number(x + 1)] 
    let checkArrayY = [Number(y - 1), Number(y), Number(y + 1)] 

    if (checkArrayX[0] < 0) {
        checkArrayX[0] = cpw -1;
    }
    if (checkArrayY[0] < 0) {
        checkArrayY[0] = cph -1;
    }
    if (checkArrayX[2] > cpw -1) {
        checkArrayX[2] = 0;
    }
    if (checkArrayY[2] > cph -1) {
        checkArrayY[2] = 0;
    }

    //console.log(checkArrayX, checkArrayY)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //console.log('X -> ' + checkArrayX[i] + '\n' + 'Y -> ' + checkArrayY[j])
            if(!(checkArrayX[i] === x && checkArrayY[j] === y)) { // if they're different
                if(document.getElementById(`${checkArrayX[i]}-${checkArrayY[j]}`).style.backgroundColor === 'white') {
                    aliveNeighbors += 1;
                }
            }
        }
    }

    return aliveNeighbors;
}

function checkCells() {
    const cellsToSpawn = []
    const cellsToKill = []
    let x, y = 0;
    document.querySelectorAll('.cell').forEach((value) => {
        x = value.id.split('-')[0] 
        y = value.id.split('-')[1] 
        
        //console.log(x, '-', y);

        let aliveNeighbors = checkNeighborsAlive(x, y);

        if(value.style.backgroundColor === "white") { // if alive
            if(aliveNeighbors > 3 || aliveNeighbors < 2) {
                cellsToKill.push(`${x}-${y}`);
            }
        }
        else { // if not alive
            if(aliveNeighbors === 3) {
                cellsToSpawn.push(`${x}-${y}`);
            }
        } 
        
    })

    iterations++;
    document.getElementById('iter-counter').innerText = 'Iterations: ' + iterations;
    killCells(cellsToKill);
    spawnCells(cellsToSpawn);
}

window.addEventListener("DOMContentLoaded", () => {
    initCells();

    
    document.getElementById('run').addEventListener('click', () => {
            if (intervalId) {
                document.getElementById('run').innerHTML = 'Run'
                clearInterval(intervalId);
                intervalId = null;
            } else { // Pause
                document.getElementById('run').innerHTML = 'Pause'
                intervalId = setInterval(() => {
                    checkCells();
                }, 300);
            }
            
    })
    
});