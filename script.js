let inp = document.getElementById("input");
let num = document.querySelector(".left");
let op = document.querySelector(".btns");
let result = document.getElementById("result");
let currentStr;
let lastChar;
let dispalyFlag = false

num.addEventListener("click",(e)=>{

    if(e.target.className ==="btn-num" && e.target.id !="clear"){
        currentStr = inp.innerText;
        lastChar = currentStr[currentStr.length - 1];

        if(dispalyFlag == false)
            inp.innerText += e.target.innerText

        else if(dispalyFlag === true && lastChar==='+' ||lastChar==='-' ||
        lastChar==='*' ||lastChar==='/' ){
            dispalyFlag = false;
            inp.innerText += e.target.innerText;
        }
        else{
            dispalyFlag = false;
            inp.innerText = "";
            inp.innerText += e.target.innerText;
        }
    }
    else if(e.target.className ==="btn-num" && e.target.id ==="clear"){
        inp.innerText = ""
    }
})

op.addEventListener("click",(e)=>{

    if(e.target.className ==="btn"){

        currentStr = inp.innerText;
        lastChar = currentStr[currentStr.length -1];
        
        if(lastChar =="+" ||lastChar==='-' || lastChar==='*' ||lastChar==='/' ){
            let newString = currentStr.substring(0,currentStr.length-1) +e.target.innerText;
            inp.innerText =newString;
        }
        else if(currentStr.length ==0){

        }
        else{
            inp.innerText += e.target.innerText;
        }
    }
})

result.addEventListener("click",(e)=>{

    let inputString = inp.innerText;
    let numbers = inputString.split("+").join(",").split("-").join(",").split("*").join(",").split("/").join(",").split(",")
    // var numbers = inputString.split(/\+|\-|\×|\÷/g);
    // let operator =
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);

    let divide = operators.indexOf("/");
    while (divide!=-1){
        numbers.splice(divide,2,numbers[divide]/numbers[divide+1])
        operators.splice(divide,1)
        divide = operators.indexOf("/")
    }

    let multiplication = operators.indexOf("*");
    while (multiplication!=-1){
        numbers.splice(multiplication,2,numbers[multiplication]*numbers[multiplication+1])
        operators.splice(multiplication,1)
        multiplication = operators.indexOf("*")
    }

    let minus = operators.indexOf("-");
    while (minus!=-1){
        numbers.splice(minus,2,numbers[minus]-numbers[minus+1])
        operators.splice(minus,1)
        minus = operators.indexOf("-")
    }

    let plus = operators.indexOf("+");
    while (plus!=-1){
        numbers.splice(plus,2,Number(numbers[plus])+Number(numbers[plus+1]))
        operators.splice(plus,1)
        plus = operators.indexOf("+")
    }

    inp.innerText = numbers[0];
    dispalyFlag = true;
    
})