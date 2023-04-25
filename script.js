
let a = ''; //first number
let b = ''; //second number
let sign = '';  //sign operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];  // check number
const action = ['+', '-', 'X', '/'];


const out = document.querySelector('.calc-screen p');

const clearAll = () => {
    a = ''; //first number
    b = ''; //second number
    sign = '';  //sign operation
    finish = false; 
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if(!event.target.classList.contains('btn')) return;  //если клик мимо кнопки то ничего не делаю
    //нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return; //т.к. кнопка ас обрабатывается выше

    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или .
    if(digit.includes(key)){  //входит ли нажатая клавиша key в массив digit
        if(b === '' && sign === ''){
            a += key;
            out.textContent = a;
        }

        else if(a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a,b,sign);
        return;
    }
    // если нажата клавиши + - / Х 
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a,b,sign);
        return;
    }
    // если нажата =
    if(key === '='){
        if(b === '') b = a;   // если вводить в калькуляторе 5+= 10 = 15 = 20
        switch (sign){
            case '+': a = (+a) + (+b);
            break;
            case '-': a = (+a) - (+b);
            break;
            case 'X': a = a * b;
            break;
            case '/': 
            if(b === '0'){
            out.textContent = 'Error';
            a = '';
            b = '';
            sign = '';
            return;
            }
            a = a / b;
            break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }

    //если нажата %
    if(key = '%'){
        if(sign === ''){
            a = a / 100;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}