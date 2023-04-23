
//https://www.youtube.com/watch?v=Gquaiuj-VpU
// 4.00


let a = ''; //first number
let b = ''; //second number
let sign = '';  //sign operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];  // check number
const action = ['+', '-', '*', '/'];


const out = document.getElementById('userInput');

const clearAll = () =>{
    let a = ''; //first number
    let b = ''; //second number
    let sign = '';  //sign operation
    let finish = false; 

    out.textContent = 0;
}


document.querySelector('.ac').onclick = clearAll;

