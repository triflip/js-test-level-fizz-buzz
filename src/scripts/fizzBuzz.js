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

    let output;
    let message;

    if (number % 3 === 0 && number % 5 === 0) {
      output = "FizzBuzz";
      message = "El número es divisible por 3 y 5";
    } else if (number % 3 === 0) {
      output = "Fizz";
      message = "El número es divisible por 3";
    } else if (number % 5 === 0) {
      output = "Buzz";
      message = "El número es divisible por 5";
    } else {
      output = String(number);
      message = "El número no es divisible por 3 ni 5";
    }

    return {
      status: "ok",
      message: message,
      data: {
        input: number,
        output: output,
      },
    };
  } catch (error) {
    return {
      status: "error",
      message: "Error inesperado",
      data: null,
    };
  }
}
