
export function evaluatedFizzBuzzNumber(input) {

try {
   
    const number = Number(input);
   
    if (isNaN(number)) {
        return {
            status: "error",
            message: "You must enter a valid number",
            data: null,
        }; 
    }
   
    let result;
    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 3 === 0) {
        result = "Fizz";
    } else if (number % 5 === 0) {
        result = "Buzz";
    } else {
        result = String(number);
    }
       return {
    status: "success", 
    message: "Valid number", 
    data: {
        number: number, 
        result: result 
    }
    };
 
} catch (error)  {
    return {
        status: "error",
        message: "Unexpected error",
        data: null
    };
}


}
