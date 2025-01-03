        let lastResult = 0;
        const actions = ["/","x", "+", "-"];
        let currentAction = "";
        
        function changeDisplay(input) {
            console.log(input);
            const display = document.getElementById("display");
            const lastResultDisplay = document.getElementById("lastResultDisplay");
            if (display.innerHTML === "0" && actions.indexOf(input) === -1) {
                if (input === ".") {
                    display.innerHTML = "0.";
                } else {
                    display.innerHTML = input;
                }
            } else if (actions.indexOf(input) >= 0) {
                
                /*
                if (input === "-" && display.innerHTML !== "0") {
                    display.innerHTML = "-" + display.innerHTML;
                } else if (currentAction === "") {
                    // First Time
                    //if (display.innerHTML !== 0) {
                    //  display.innerHTML = "-" + display.innerHTML
                    //}
                    currentAction = input;
                    lastResult = display.innerHTML;
                    lastResultDisplay.innerHTML = lastResult;
                    display.innerHTML = 0;
                } else {
                    // Dealing with a set operand
                    //if (input === "-") {
                    //  display.innerHTML = "-" + display.innerHTML
                    //}
                    lastResult = calc(lastResult, display.innerHTML, currentAction);
                    lastResultDisplay.innerHTML = lastResult;
                    display.innerHTML = 0;
                    currentAction = input;
                }
                */

                /*
                if (currentAction === "") {
                    // First Time
                    //if (display.innerHTML !== 0) {
                    //  display.innerHTML = "-" + display.innerHTML
                    //}
                    currentAction = input;
                    lastResult = display.innerHTML;
                    lastResultDisplay.innerHTML = lastResult;
                    display.innerHTML = 0;
                } else {
                    // Dealing with a set operand
                    if (input === "-" && currentAction !== "-") {
                        currentAction = input;
                    } else{
                        lastResult = calc(lastResult, display.innerHTML, currentAction);
                        lastResultDisplay.innerHTML = lastResult;
                        display.innerHTML = 0;
                        currentAction = input;
                    }
                }
                */
                

                if (currentAction === "") {
                    // First Time
                    //if (display.innerHTML !== 0) {
                    //  display.innerHTML = "-" + display.innerHTML
                    //}
                    currentAction = input;
                    lastResult = display.innerHTML;
                    lastResultDisplay.innerHTML = lastResult;
                    display.innerHTML = 0;
                } else {
                    // Dealing with a set operand
                    //if (input === "-") {
                    //  display.innerHTML = "-" + display.innerHTML
                    //}
                    lastResult = calc(lastResult, display.innerHTML, currentAction);
                    lastResultDisplay.innerHTML = lastResult;
                    display.innerHTML = 0;
                    currentAction = input;
                }
                
            } else if (input === "=") {
                display.innerHTML = calc(lastResult, display.innerHTML, currentAction);
                lastResult = display.innerHTML;
                currentAction = "";
            } else if (input === ".") {
                if (display.innerHTML.indexOf(".") === -1) {
                    display.innerHTML += ".";
                }
            /*   
            } else if (input === "negative-value") {
                if (display.innerHTML.indexOf("-1") === -1) {
                    display.innerHTML = "-" + display.innerHTML
                } else if (display.innerHTML.indexOf("-1") > -1) {
                    display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
                }
            */
            // failed code
            } else {
                display.innerHTML += input;
            }
        }
        function clearDisplay() {
            lastResult = 0;
            document.getElementById("display").innerHTML = 0;
        }
        function calc(firstNum, secondNum, op) {
            let result = 0;
            firstNum = parseFloat(firstNum);
            secondNum = parseFloat(secondNum);
            switch(op) {
                case "/":
                    result = firstNum / secondNum;
                    break;
                case "x":
                    result = firstNum * secondNum;
                    break;
                case "+":
                    result = firstNum + secondNum;
                    break;
                case "-":
                    result = firstNum - secondNum;
                    break;
                default:
                    console.log("Error in calc");
            }
            return result;
        }