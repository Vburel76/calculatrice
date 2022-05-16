// je crée des variables contenants des elements.
let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let operator = document.getElementById('operator')
let result = document.getElementById('result')




function addNumber(number) {
    //si la ligne operator est pleine (!=) cela ecrit dans la variable number2
    if (operator.innerHTML != "") {
        number2.innerHTML += number
        // sinon ecrit dans la variable number1
    } else {
        number1.innerHTML += number
    }

}



function addOperator(sign) {
    // a l'aide de innerText et de = j'ecris qu'un seul operateur dans operator 
    operator.innerText = sign
}

function reset() {
    // Permet de reset les valeurs affichées sur la calculatrice en attribuant une valeur vide.
    number1.innerHTML = ""
    number2.innerHTML = ""
    operator.innerHTML = ""
    result.innerHTML = ""
}


function calculate() {
    let total
    //J'utilise un switch pour definir l'opération à effectuer . ex( addition quand case est égal à +)
    switch (operator.innerHTML) {
        case "+":
            total = Number(number1.innerHTML) + Number(number2.innerHTML);
            break;
        case "-":
            total = Number(number1.innerHTML) - Number(number2.innerHTML);
            break;
        case "x":
            total = Number(number1.innerHTML) * Number(number2.innerHTML);
            break;
        case "/":
            total = Number(number1.innerHTML) / Number(number2.innerHTML);
            break;
    }
    // affiche le resultat du calcul .
    result.innerHTML = total

}



