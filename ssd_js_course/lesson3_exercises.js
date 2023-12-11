// Exercise 3a
// Create the text 'My name is:' as a string.
const greeting = 'My name is:';

// Exercise 3b
// Create your name as a string (for example: 'Simon').
const name = 'LeBron'; // Replace 'Simon' with your actual name.

// Exercise 3c
// Using concatenation, add the 2 strings from 3a and 3b together.
const introduction = greeting + ' ' + name;

// Exercise 3d
// Calculate the total cost of 1 coffee ($5) and 1 bagel ($3).
const totalCost = 5 + 3; // Using numbers directly for simplicity.
const costStatement = 'Total cost: $' + totalCost;

// Exercise 3e
// Do the same thing as 3d, but use a template string and interpolation.
const costStatementTemplate = `Total cost: $${totalCost}`;

// Exercise 3f
// Display the text from 3e in a popup using alert(...);
alert(costStatementTemplate);