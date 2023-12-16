# Lesson 5: Variables

## 1. Understanding Variables
- Variables are containers for storing data values. 
- In JavaScript, a variable can be declared using `let`, `const`, or `var`.
Example:
```javascript
let message = 'Hello, World!';
console.log(message);
```

## 2. Re-assign a variable
- Variables declared with let can be reassigned to hold different data types or values.
Example:
```js
let count = 1;
count = 2; // Re-assigning the value
```

## 3. Created the Cart Quantity feature

## 4. Shortcuts for re-assigning a variable
- JavaScript provides shortcuts for re-assigning values to variables, such as +=, -=, *=, /=, and ++.
Example:
```js
let score = 10;
score += 5; // Increases score by 5
```


## 5. Naming conventions and best practices
- Use camelCase for variable names and choose meaningful names. 
- Avoid reserved keywords and start with a letter, $, or _.
Example:
```js
let myFavoriteFood = 'pizza';
```

## 6. Three ways to create a variable: let, const, var
- `let` allows you to declare block-level variables
- `const` is for variables which will not be re-assigned
- `var` is the old way of declaring variables but not recommended due to its function scope.

```js
const pi = 3.14;
let daysInWeek = 7;
```