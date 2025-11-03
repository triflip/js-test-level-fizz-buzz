
import { evaluatedFizzBuzzNumber } from './fizzBuzz.js';
import { renderError, renderResult, updateHistory } from './dom.js';

const userNumber = document.getElementById("userNumber");
const button = document.getElementById("checkBtn");



button.addEventListener("click", ()=> {
    const value = userNumber.value;
    const result = evaluatedFizzBuzzNumber(Number(value));
   
    const output = document.getElementById("output");
    output.innerHTML = "";

    if( result.status === "ok") {
        renderResult(result.data.output);
        updateHistory(result.data.input, result.data.output)
       
    } else {
        renderError(result.message);
    }
}
);