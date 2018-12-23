/**
 * @description
 *  Performs a binary Operation between to arguments. Set{"+", "-", "/", "*", "=", ">", "<"}
 * @signature
 *  (String, Number, Number) -> Number || Boolean // String -> Number -> Number -> Number || Boolean
 * @example
 *  let add = binaryOp("+") //=> Function add
 *  let result = add(2)(19) //=> 21
 * 
 *  let higherThanFive = binaryOp("<")(5) //=> Function y => 5 < y
 *  let result = higherThanFive(6); //=> True
 * 
 *  let result = binaryOp("*")(2)(5) //=> 10
 * 
 * 
 */

import pcurry from "./partialCurry";

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


const binaryOp = switchImplementation;


export default pcurry(binaryOp);

