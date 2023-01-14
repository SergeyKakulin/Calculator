let equalsBtn = document.querySelector('equals');



let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','];
const actoin = ['-', '+', 'X', '/'];

const out = document.getElementById('result');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    return;
};



document.getElementById('button-c').onclick = clearAll;

document.getElementById('calc-body').onclick = (event) => {
    if(!event.target.classList.contains('calc-btn')) return;
    if(event.target.classList.contains('button-c')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
        a += key;
        out.textContent = a;
        }
        else if (a!== '' && b!=='' && finish) {
            b=key;
            finish=false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        return;
    }

    if (actoin.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+": a = (+a) + (+b);
            break;
            case "-": a = a - b;
            break;
            case "X": a = a * b;
            break;
            case "/": 
            if (b === '0') {
                out.textContent = '0';
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

        
    }

};

// document.getElementById('button-c').event.keyCode = '49';
    //     // ввод '=' с клавиатуры
    // let equals = document.querySelector('equals');

    document.addEventListener('keyup', function(ev) {
        if (ev.keyCode === 13) {
            if (b === '') b = a;
            switch (sign) {
                case "+": a = (+a) + (+b);
                break;
                case "-": a = a - b;
                break;
                case "X": a = a * b;
                break;
                case "/": 
                if (b === '0') {
                    out.textContent = '0';
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
        }
        // switch (ev.key) {
        //     case '49': 
        // }
    })

    
