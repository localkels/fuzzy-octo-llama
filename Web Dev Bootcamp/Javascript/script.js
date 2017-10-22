// Questions
var age = prompt("What is your age?");

// Logic

if (age < 0) {
  console.log("Your age cannot be negative.");
}
else if (age === 21) {
  console.log("Happy 21st birthday!");
}

else if (age % 2) {
  console.log("Your age is an odd number.");
}
