# Lesson 7 Exercises

**7a.** Create a function called 'greet' that displays the message 'Hello!' in the console. Call/run this function a few times using: `greet();`


**7b.** Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!' Call the function a few times with different names: `greet('Simon');`

**7c.** Try calling `greet()` without a name (it will display 'Hello undefined!'). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
(Hint: use an if-statement. Since undefined is a falsy value, you can use: `if (!name) {...}` to check if 'name' is undefined).

#### 7d. Create a function 'convertToFahrenheit(celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
- Formula: Fahrenheit = (Celsius * 9/5) + 32
- `convertToFahrenheit(25) => 77`

**7e.**Create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
- Formula: Celsius = (Fahrenheit - 32) * 5/9
- `convertToCelsius(86) => 30`

## f.
Create a function 'convertTemperature(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit.
- `convertTemperature(25, 'C') => '77F'`
- `convertTemperature(86, 'F') => '30C'`
Note: return a string, and try to reuse the functions from 7d and 7e.

## Challenge Exercises

## g.
Create a copy of the calculator project from exercise 5r.
- Notice there's a lot of duplicated code for the buttons.
- Create a function 'updateCalculation' and reuse the code.

## h.
Create a copy of the Cart Quantity from exercise 6l.
- Create a function 'updateCartQuantity' and reuse the code.

## i.
Modify 'updateCartQuantity' from 7h so that if the quantity is invalid, `alert();` and then `return;` (this is called an early return). An early return makes the code cleaner since the 'else-if'/'else' is removed.
