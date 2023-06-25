let userChoice = document.querySelector('.user_choice_selection')
let additionInputContainer = document.getElementById('addition_div')
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
    let inputContainer = document.createElement("input")
    inputContainer.value = 0;
    inputContainer.type = Number
    additionInputContainer.appendChild(inputContainer)
    let existingInput = addition_div.querySelector('input');
    console.log("hello", "world")
}

/*
if (existingInput) addition_div.removeChild(existingInput);
firstInput.focus()
addition_div.innerHTML = ''
    firstInput.className = 'input_class'
    firstInput.type = 'number'
    addition_div.appendChild(firstInput)
    firstInput.addEventListener('input', () =>{
    })
    const numberButtons = document.querySelectorAll('.calculation_buttons button[value]');
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentValue = parseInt(firstInput.value || 0);
            const buttonValue = parseInt(button.value || 0);
            firstInput.value = currentValue + buttonValue;
        });
    });
    */