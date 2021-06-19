function message() {
  return "It's the information age ";
}

function displayMessage(msgFunction, person) {
  console.log(msgFunction() + person);
}

displayMessage(message, "Daniel!");
