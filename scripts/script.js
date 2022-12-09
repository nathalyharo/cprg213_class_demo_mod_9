
// global scope variables 
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
let counterValue = 0;

// function to increase the counter by 1 and returning it onto the document counter 
plusButton.addEventListener('click', () => {
    counterValue += 1;
    // console.log(counterValue);
    const countUpdate = counterValue;
    document.getElementById('counter').innerHTML = countUpdate;
});

// function to decrase the counter by 1 and returning it onto the document counter 
minusButton.addEventListener('click', () => {
    counterValue -= 1;
    // console.log(counterValue);
    const countUpdate = counterValue;
    document.getElementById('counter').innerHTML = countUpdate;
});

