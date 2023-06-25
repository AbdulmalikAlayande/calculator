let addition_div = document.querySelector('.addition_div')
let subtraction_div = document.querySelector('.subtraction_div')
let multiplication_div = document.querySelector('.multiplication_div')
let factorial_div = document.querySelector('.factorial_div')
let sort_div = document.querySelector('.sort_div')
let firstInput = document.createElement("input")
let calc_buttons_div = document.querySelector('.calculation_buttons')


function handleUserSelection(){
    let add = document.querySelector('.user_choice_selection')
    switch (add.value){
        case 'addition': handleAddition(); break;
        case 'subtraction': handleSubtraction(); break;
        case 'multiplication': handleMultiplication(); break;
        case 'factorial': handleFactorial(); break;
        case 'fibonacci': handleFibonacci(); break;
        case 'sort': handleSort(); break;
        case 'average': handleAverage(); break;
        case 'permutation': handlePermutation(); break;
        case 'combination': handleCombination();
    }
}

document.addEventListener('click', handleUserSelection)
function fibonacciSeries(infiniteTerm){
    if (infiniteTerm < 1) return
    else if(infiniteTerm === 1) return 0
    let fibonacciSeriesList = []
    let firstNumber = 0
    let secondNumber = 1;
    fibonacciSeriesList.push(firstNumber)
    fibonacciSeriesList.push(secondNumber)
    if (infiniteTerm === 2) return fibonacciSeriesList
    for (let i = 0; i < infiniteTerm; i++) {
        let nextTerm = secondNumber
        let sumOfNextTwoConsecutiveTerms = firstNumber + secondNumber
        fibonacciSeriesList.push(sumOfNextTwoConsecutiveTerms)
        firstNumber = nextTerm
        secondNumber = sumOfNextTwoConsecutiveTerms
    }
    return fibonacciSeriesList
}

function fibonacciInfiniteTerm(infiniteTerm){
    if (infiniteTerm < 0)
        return;
    else if (infiniteTerm === 1 || infiniteTerm === 2)
        return 1;
    return fibonacciInfiniteTerm(infiniteTerm - 1) + fibonacciInfiniteTerm(infiniteTerm - 2);
}


function permutation(){

}

let newValue = 1;

function factorial(value){
    if(value > 1) {
        newValue *= factorial(value - 1)
    }
    return newValue
}

function combination(){

}

function average(){

}

function sort(){

}

function addition(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum+=arguments[i]
    }
    return sum
}


function handleSubtraction() {
    firstInput.className = 'input_class'
    firstInput.type = 'number'
    firstInput.placeholder = 'Enter number or numbers'
    subtraction_div.appendChild(firstInput)
}

console.log(fibonacciSeries(20));
console.log(fibonacciSeries(10));
console.log(fibonacciInfiniteTerm(10));
console.log(factorial(5));
function handleMultiplication() {
    firstInput.className = 'input_class'
    firstInput.type = 'number'
    firstInput.placeholder = 'Enter number or numbers'
    multiplication_div.appendChild(firstInput)
}

function handleFactorial() {

}

function handleFibonacci() {

}

function handleSort() {

}

function handleAverage() {

}

function handlePermutation() {

}

function handleCombination() {

}



function activateOnscreenInputButtons(){
    for (let i = 0; i < calc_buttons_div.children.length; i++) {
        for (let j = 0; j < calc_buttons_div.children[i].children.length; j++) {
            listenToTheCalcButtons(calc_buttons_div.children[i].children[j])
        }
    }
}

function listenToTheCalcButtons(button) {
    button.addEventListener('click', ()=>{
        let firstInputValue = parseInt(firstInput.value);
        let buttonValue=parseInt(button.value)
        firstInputValue = firstInputValue + buttonValue
        firstInput.value = firstInputValue
    })
}
