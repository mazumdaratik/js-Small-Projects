// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string ='';
// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         } else if(e.target.innerHTML == 'AC'){
//             string = '';
//             input.value = string;
//         } else if (e.target.innerHTML == 'DEL') {
//             string = string.substring(0,string.length-1);
//             input.value = string;
//         } else {
//              string += e.target.innerHTML;
//              input.value = string;
//         }
        
//     })
// })
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = calculateExpression(string);
                input.value = string;
            } catch {
                input.value = 'Error';
                string = '';
            }
        } else if (value === 'AC') {
            string = '';
            input.value = string;
        } else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});

/**
 * Function to calculate mathematical expressions
 * @param {string} expression
 * @returns {number}
 */
function calculateExpression(expression) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const tokens = expression.match(/(\d+\.?\d*|[+\-*/])/g);
    if (!tokens) throw new Error('Invalid Expression');

    let numbers = [];
    let operations = [];

    tokens.forEach(token => {
        if (!isNaN(token)) {
            numbers.push(parseFloat(token));
        } else if (token in operators) {
            while (
                operations.length &&
                precedence(operations[operations.length - 1]) >= precedence(token)
            ) {
                const b = numbers.pop();
                const a = numbers.pop();
                const op = operations.pop();
                numbers.push(operators[op](a, b));
            }
            operations.push(token);
        }
    });

    while (operations.length) {
        const b = numbers.pop();
        const a = numbers.pop();
        const op = operations.pop();
        numbers.push(operators[op](a, b));
    }

    return numbers[0];
}

/**
 * Function to determine operator precedence
 * @param {string} operator
 * @returns {number}
 */
function precedence(operator) {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
}
