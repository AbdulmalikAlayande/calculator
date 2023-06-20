let userChoice = document.querySelector('.user_choice_selection')
userChoice.addEventListener('change', (event)=>{
    let selectedOption = event.target.value;
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