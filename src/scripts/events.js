
import { evaluatedFizzBuzzNumber } from './fizzBuzz.js';
import { renderError, renderResult, updateHistory } from './dom.js';

const userNumber = document.getElementById("userNumber");
const button = document.getElementById("checkBtn");



button.addEventListener("click", ()=> {
    const value = userNumber.value;
    const result = evaluatedFizzBuzzNumber(Number(value));
   
    const output = document.getElementById("output");
    output.innerHTML = "";

    if( result.status === "success") {
        renderResult(result.data.result);
        updateHistory(result.data.number, result.data.result)
       
    } else {
        renderError(result.message);
    }
}
);