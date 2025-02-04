console.log("welcome to tic tac toe");

let music = new Audio("./sources/music.mp3");
let ting = new Audio("./sources/ting.mp3");
let gameover = new Audio("./sources/gameover.mp3");

let boxes = document.getElementsByClassName("box");

let turn = 'X';
let checkGameOver = false;


// function to change turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
};


// function to check for win 
const  checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e => {
        if(
            (boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = `Player ${boxText[e[0]].innerText} Won`;
            
            checkGameOver = true;

            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            return;
        }
    })
};


// Game logic

// console.log(boxes);
Array.from(boxes).forEach(element => {
    let boxTexts = element.querySelector('.boxtext');
    // console.log(boxText);
    element.addEventListener('click', () => {
        if(boxTexts.innerText === '') {
            boxTexts.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!checkGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
}); 


// add on click listener
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    checkGameOver = false;
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px";
})
