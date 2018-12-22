/**
 * @description
 *  Performs a binary Operation between to arguments. Set{"+", "-", "/", "*", "=", ">", "<"}
 * @signature
 *  (String, Number, Number) -> Number || Boolean
 * @example
 * 
 * 
 * 
 */

// Default. Implementation utilizing switch block statement
const switchImplementation = (operator, x, y) => {
    switch(operator) {
        case "+": return x + y;
        case "-": return x - y;
        case "/": return x / y;
        case "*": return x * y;
        case "=": return x === y;
        case ">": return x > y;
        case "<": return x < y;
    }
};

// Implementation utilizing if statement
const ifImplementation = (operator, x, y) => {
    if (operator === "+") return x + y;
    else if (operator === "-") return x - y;
    else if (operator === "/") return x / y;
    else if (operator === "*") return x * y;
    else if (operator === "=") return x === y;
    else if (operator === ">") return x > y;
    else if (operator === "<") return x < y;
};



export default switchImplementation;

