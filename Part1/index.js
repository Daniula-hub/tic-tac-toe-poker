// const test = 'Hello'

//     console.log(test) 

const board = [ ];

function play (clickedId){
const playerSpan = document.getElementById('player');

const clickedElement = document.getElementById(clickedId);

const stopGame= document.getElementsByTagName('td');

if (!board[clickedId]){
if (playerSpan.innerText === 'X'){
    playerSpan.innerText = '0'; 
    clickedElement.innerText = "X";
    board[clickedId] = 'X' 

} else { 
    playerSpan.innerText = 'X';
    clickedElement.innerText = '0';
    board[clickedId] = 'O';
}
}

console.log(board);

  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

let boardFull = true; 
  for(let i=0; i<=8; i++ ){
      if (board[i]=== undefined){
          boardFull = false;
      }
}
     if (boardFull === true){
         alert ("CAT'S GAME");
     }

};


// Black Diamond 

document.getElementById('reset').addEventListener("click", function () {
  let tds = document.getElementsByTagName('td');
  for(let i = 0; i < tds.length; i++) {
      tds[i].innerHTML = ''
  }
});



// Not really working second part of Black Diamond! 

// const  cellTable = () => { 
//   const cell = document.getElementsByClassName("cell")
// for ( let i=0; i< cell.length; i++) {
//   cell[i].onclick= null
// }
// alert("The game is OVER");
// };


