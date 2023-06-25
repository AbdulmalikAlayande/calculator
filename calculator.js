let userChoice = document.querySelector('.user_choice_selection')
let additionInputContainer = document.getElementById('addition_div')
// let one = document.getElementById('one')
let inputContainer = document.createElement("input");
inputContainer.id = "addition_input";


userChoice.addEventListener('change', (event)=>{
    event.preventDefault();
    let selectedOption = userChoice.value;
    switch (selectedOption){
        case 'addition': handleAddition(); break;
        case 'subtraction': handleSubtraction(); break;
        case 'multiplication': handleMultiplication(); break;
        case 'factorial': handleFactorial(); break;
        case 'fibonacci': handleFibonacci(); break;
        case 'sort': handleSort(); break;
        case 'average': handleAverage(); break;
        case 'permutation': handlePermutation(); break;
        case 'combination': handleCombination();
    }})

function handleAddition(){
    inputContainer.value = 0;
    inputContainer.type = Number;
    additionInputContainer.appendChild(inputContainer);

}

function showWarningToUser() {
    let pTag = document.createElement("p")
    pTag.textContent = "please enter a correct value"
    pTag.style.fontWeight = "bold"
    pTag.style.color = "red"
    additionInputContainer.append(pTag)
}

function addition(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum+=arguments[i]
    }
    return sum
}
function addNumberToInput(button_id) {
    let button = document.getElementById(button_id)
    let input = document.getElementById("addition_input")
    input.value += button.textContent
}
function calculateInput(equalToButton_id) {
    let equalsButton = document.getElementById(equalToButton_id)
    let separatedInput = inputContainer.value.split("")
    try {
        for (let i = 0; i < separatedInput.length; i++) {
            let numbers_to_add = parseFloat(separatedInput[i])
            if (isNaN(numbers_to_add)) {
                showWarningToUser();
                inputContainer.value = 0
                break;
            }
        }
        console.log(separatedInput)
        inputContainer.value = eval(inputContainer.value)
    }catch (SyntaxError){

    }
}