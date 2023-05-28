function getBotResponse(input) {
    if (input === "rock") {
      return "paper";
    } else if (input === "paper") {
      return "scissors";
    } else if (input === "scissors") {
      return "rock";
    } else if (input === "hey") {
      return "Hello there!";
    } else if (input === "hello") {
      return "hey";
    } else if (input === "play with me rock paper and scissor") {
      return "Sure";
    } else if (input === "goodbye") {
      return "Talk to you later!";
    } else if (input.startsWith("calculate")) {
      const calculation = input.slice(10).trim();
      const [operator, number1, number2] = calculation.split(" ");
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      let result;
  
      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        result = num1 / num2;
      } else {
        return "Invalid operator. Please use either +, -, *, or / for ex: calculate + 5 6";
      }
  
      return "The result is: " + result;
    } else {
      return "Try asking something else!";
    }
  }
  