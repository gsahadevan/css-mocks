const playerAColor = 'red';
const playerAName  = 'Player A';
const playerBColor = 'blue';
const playerBName  = 'Player B';



let isNextPlayerA = true;

function togglePlayer() {
    isNextPlayerA = !isNextPlayerA;
}

function clicked(event) {
    const id = event.target.id;
    let element = document.getElementById(id);
    element.style.backgroundColor = isNextPlayerA ? playerAColor : playerBColor;
    togglePlayer();

    /*
    let playerPlaceHolder = document.getElementById('current-player');
    playerPlaceHolder.innerText = isNextPlayerA ? playerAName : playerBName;
    playerPlaceHolder.style.color = isNextPlayerA ? playerAColor : playerBColor;
    */
}

function highlightColumn(classn) {
    let elements = Array.from(document.getElementsByClassName(classn));
    elements.forEach(element => {
        element.classList.add('highlight-border');
    });
}

function removeHighlight(classn) {
    let elements = Array.from(document.getElementsByClassName(classn));
    elements.forEach(element => {
        element.classList.remove('highlight-border');
    });
}