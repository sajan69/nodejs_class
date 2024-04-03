const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === 'C') {
            screen.textContent = '';
            expression = '';
        } 
        else if(button.textContent === 'Del') 
        {
            screen.textContent = screen.textContent.slice(0, -1);
            expression = expression.slice(0, -1);

        }
        else {
            screen.textContent += button.textContent;
            expression += button.textContent;
        }
    });
});
const acButton = document.querySelector('.ac-button');

acButton.addEventListener('click', () => {
    screen.textContent = '';
    expression = '';
});

// const delButton = document.querySelector('.delete');
// delButton.addEventListener('click', () => {
//     screen.textContent = screen.textContent.slice(0, -1);
//     expression = expression.slice(0, -1);
// });


const calculate = () => {
    try {
        const result = eval(expression);
        screen.textContent = result.toFixed(2); 
        expression = result.toString();
    } catch (error) {
        screen.textContent = 'Error';
        expression = '';
    }
};