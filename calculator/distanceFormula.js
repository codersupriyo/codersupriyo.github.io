// Greeting visitor
console.log('Hello visitor! Thanks for visitng and using the site!\nIf you like to suggest something, feel free to do so :)');

// Calculation function
const calc = () => {
  // Point A coordinate values
  const x1 = document.getElementById("x1").value;
  const y1 = document.getElementById("y1").value;

  // Point B coordinate values
  const x2 = document.getElementById("x2").value;
  const y2 = document.getElementById("y2").value;

  // Distance Calculation for Points A and B
  const result = Math.round(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)).toFixed(2);
  document.getElementById("result").value = result;
};

// Clear function
const clear = () => {
  document.getElementById("form").reset();
};
