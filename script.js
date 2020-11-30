var a;
var b;

var numPressed = document.querySelectorAll(".num");
numPressed.forEach((item)=>{
    item.addEventListener("click",() => {
        if(primDispVal.textContent == "0") {
            primDispVal.textContent = "";
        }
        if(primDispVal.textContent.length < 11) {
            primDispVal.textContent += item.textContent;
        }
    });
})

var oprPressed = document.querySelectorAll(".opr");
oprPressed.forEach((item)=>{
    item.addEventListener("click",() => {
        if(primDispVal.textContent == "0") {
            primDispVal.textContent = "";
        }
        if(primDispVal.textContent.length < 11) {
            primDispVal.textContent += item.textContent;
        }
    });
})

var decPressed = document.querySelectorAll(".dec");
decPressed.forEach((item)=>{
    item.addEventListener("click",() => {
        var decCount = 0;
        var i = primDispVal.textContent.length-1;
        while(i > 0) {
            if(primDispVal.textContent[i] == ".") {
                decCount++;
            }
            if( primDispVal.textContent[i] == "÷" ||
                primDispVal.textContent[i] == "x" ||
                primDispVal.textContent[i] == "−" ||
                primDispVal.textContent[i] == "+") {
                break;
            }
            i--;
        }

        if(decCount < 1) {
            if(primDispVal.textContent == "0") {
                primDispVal.textContent = "";
            }
            if(primDispVal.textContent.length < 11) {
                primDispVal.textContent += item.textContent;
            }
        }
    });
})

clear.addEventListener("click",()=>{
    primDispVal.textContent="";
    secDispVal.textContent="";
})

sign.addEventListener("click",()=>{
    if(primDispVal.textContent != "") {
        primDispVal.textContent = parseInt((primDispVal.textContent) * (-1));
    }
})

backspace.addEventListener("click",()=>{
    primDispVal.textContent = primDispVal.textContent.substring(0, primDispVal.textContent.length - 1);
})

equals.addEventListener("click",()=>{
    var userInput = primDispVal.textContent;
    var listInput = (userInput.split("÷").join(',/,').split("x").join(',x,').split("+").join(',+,').split("−").join(',-,')).split(',');

    if (listInput[0] == "") {
        if (listInput[1] == "-") {
            listInput[2] = parseFloat(listInput[2]) * -1;
            listInput.splice([0], 2);
        }
        else if (listInput[1] == "+") {
            listInput.splice([0], 2);
        }
    }

    for (var i = 0; i < listInput.length; i++) {
        if (listInput[i] == "" && listInput.length >= i+2) {
            if (listInput[i+1] == "-") {
                listInput[i+2] = parseFloat(listInput[i+2]) * -1;
                listInput.splice([i], 2);
            }
            else if (listInput[i+1] == "+") {
                listInput.splice([i], 2);
            }
        }
    }
    
    for (var i = 0; i < listInput.length; i++) {
        if (listInput[i] == "/") {
            a = parseFloat(listInput[i-1]);
            b = parseFloat(listInput[i+1]);
            listInput[i-1] = (a / b);
            listInput.splice([i], 2);
            i--;
        }
    }

    for (var i = 0; i < listInput.length; i++) {
        if (listInput[i] == "x") {
            a = parseFloat(listInput[i-1]);
            b = parseFloat(listInput[i+1]);
            listInput[i-1] = (a * b);
            listInput.splice([i], 2);
            i--;
        }
    }

    for (var i = 0; i < listInput.length; i++) {
        if (listInput[i] == "+") {
            a = parseFloat(listInput[i-1]);
            b = parseFloat(listInput[i+1]);
            listInput[i-1] = (a + b);
            listInput.splice([i], 2);
            i--;
        }
    }

    for (var i = 0; i < listInput.length; i++) {
        if (listInput[i] == "-") {
            a = parseFloat(listInput[i-1]);
            b = parseFloat(listInput[i+1]);
            listInput[i-1] = (a - b);
            listInput.splice([i], 2);
            i--;
        }
    }

    secDispVal.textContent = primDispVal.textContent;

    if (listInput[0] > 0 | listInput[0] < 0 | listInput[0] == 0 && listInput[0] != "") {
        primDispVal.textContent = parseFloat(listInput[0]);
    }
    else {
        primDispVal.textContent = "Input Error";
    }
})