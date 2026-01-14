/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const numRegex = /\d/;

    const numStack = [];

    for(let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const isNumber = token.match(numRegex);

        if(isNumber) {
            numStack.push(+token);
        } else {
            const [num1, num2] = [numStack.pop(), numStack.pop()];
            let op;
            switch(token) {
                case '+':
                    op = num2+num1;
                    break;
                case '-':
                    op = num2-num1;
                    break;
                case '*':
                    op = num2*num1;
                    break;
                case '/':
                    op = Math.trunc(num2/num1);
                    break;
            }
            numStack.push(op);
        }
    }
    return numStack.pop();
};

// evalRPN(["2","1","+","3","*"])
// evalRPN(["4","13","5","/","+"])
evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])