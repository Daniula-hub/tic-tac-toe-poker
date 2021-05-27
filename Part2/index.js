// const test = 'The house always wins!'
//  console.log(test) 

 const idInput = document.getElementById('idInput');
 const colorInput = document.getElementById('colorInput');
 const deleteAfterClick = document.getElementById('reset');



//  console.log(idInput);
// console.log(colorInput);

function setCard (){
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
  }


const  button = () => { 
   const card = document.getElementsByClassName("card")
 for ( let i=0; i< card.length; i++) {
     card[i].style.color = 'grey'
 }
};


