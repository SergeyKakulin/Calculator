const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

keys.forEach(key=>{
    key.addEventListener('click', calculate);
});

function calculate() {
    let buttonText = this.innerText;
    if (buttonText==="C") {
        output.innerText = "";
        result.innerText = "";
        return;
    }

    if (buttonText==="DEL") {
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if (buttonText==="%") {
        output.textContent = eval (output.textContent/100);
        return;
    }

    if(buttonText==="=") {
        result.innerText = eval(output.innerText);
        return;
    }

    else{
        output.textContent += buttonText;
        return;
    }
};

document.addEventListener('keydown', function(ev) {
        if (ev.keyCode === 13) {
            result.innerText = eval(output.innerText);
        }
        if (ev.keyCode === 187) {
            result.innerText = eval(output.innerText);
        }
        if (ev.keyCode === 8) {
            output.textContent = output.textContent.substr(0,output.textContent.length-1);
        }
        if (ev.keyCode === 48) {
            output.innerText += "0";
        }
        if (ev.keyCode === 49) {
            output.innerText += "1";
        }
        if (ev.keyCode === 50) {
            output.innerText += "2";
        }
        if (ev.keyCode === 51) {
            output.innerText += "3";
        }
        if (ev.keyCode === 52) {
            output.innerText += "4";
        }
        if (ev.keyCode === 53) {
            output.innerText += "5";
        }
        if (ev.keyCode === 54) {
            output.innerText += "6";
        }
        if (ev.keyCode === 55) {
            output.innerText += "7";
        }
        if (ev.keyCode === 56) {
            output.innerText += "8";
        }
        if (ev.keyCode === 57) {
            output.innerText += "9";
        }
        return;
});