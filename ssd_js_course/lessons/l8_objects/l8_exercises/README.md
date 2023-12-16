# Lesson 8 Exercises - Objects

**8a. Let's say in the Amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display it in the console.

**8b.** Continuing from 8a, let's say we want to increase the price by 500 cents. Use dot notation to increase the price, and display the updated object in the console.

**8c.** Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. Display the updated object in the console.

**8d.** Create a function 'comparePrice(productl, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.

**8e.** Create a function 'isSameProduct(product1, product2)', which returns true if 2 products have the same values inside ('name' and 'price').
If not, return false. Create 2 products and try out the function.
(Hint: objects are references so you can't compare them directly).

**8f.** Using Google or an A.l. tool, search how to convert a string to all lowercase with JavaScript ('Good Morning' => 'good morning')

**8g.** Search how to repeat a string many times ('test' 2 times => 'testtest')

**8h.** We'll add localStorage to the calculator project. First, make a copy of the project from exercise 7g (see the solution for 7g if needed).
-  Whenever we update the calculation, save it using setltem()
- When the page is loaded, get the calculation using •getltem()
- Use a default value of " if a calculation doesn't exist in local storage


## Challenge Exercises

**8i.** We'll improve the coin flip game from exercise 6j to be like the rock paper scissors game.
- Copy the code from exercise 6j (see the solution for 6j if needed).
- Create 2 buttons to play the game
- When clicking 'heads' play the game with guess = 'heads'.
- When clicking 'tails' play the game with guess = 'tails'.
- Create a function 'playGame(guess)' to reuse the code.

**8j.** Create a score object {wins: 0, losses: 0 }, update the score each time after playing, and display the score in the console.

**8k.** Use localStorage to save and load the score (hint: you'll need to use JSON.stringify() to convert the score object to a string).