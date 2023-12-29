# Lesson 8: JavaScript Objects

JavaScript objects are fundamental for managing and organizing complex data. They allow us to group multiple values and provide a structure for representing real-world entities in code.

## Understanding Objects
- **Grouping Values**: Objects let us group multiple values together, enabling us to structure data more effectively.
- **Methods and Properties**: Objects consist of properties (key-value pairs) and methods (functions associated with an object).

### Strategy for Working with Objects in JavaScript
1. **Identify Requirements**: Determine the properties and methods needed for your object.
2. **Implementation**: Translate these requirements into JavaScript code, creating an object that fulfills the specified needs.

### Practical Example: Rock, Paper, Scissors Game Algorithm
- **Game Flow**:
  1. **Computer's Move**: When a button is clicked, the computer randomly selects a move (rock, paper, or scissors).
  2. **Result Determination**: Compare the player's move with the computer's move to determine the winner.
  3. **Score Update**: Update the game score based on the result.
  4. **Display Outcome**: Show the result and updated score in a user interface, such as a popup.

- **Note**: In JavaScript, a function within an object is termed a 'method'.

## Built-in JavaScript Objects
- **JSON**: Used for data interchange between servers and clients; pivotal in sending and storing data across different systems.
- **localStorage**: Part of the Web Storage API, allowing data storage across browser sessions.

### Key Concepts
#### JSON
- **Data Interchange Format**: JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data, often used when data is sent from a server to a web page.

#### null vs. undefined
- **null**: Indicates an intentional absence of any value. It is assigned.
- **undefined**: Indicates that a variable has not been assigned a value. By default, variables are `undefined`.
  
#### Example: Default Parameters
```javascript
function func(parameter = 'default') {
    console.log(parameter);
}

func(); // Outputs: 'default'
func(undefined); // Outputs: 'default'
```
### In Summary
- Objects in JavaScript are crucial for grouping related values and functions.
- In the Rock, Paper, Scissors game, objects can be used to manage game states and logic.
- Key built-in objects in JavaScript include JSON and localStorage, which play significant roles in data handling and storage.
- Null vs. undefined, autoboxing, and references.
- JavaScript provides shortcuts for working with objects, such as destructuring, shorthand property names, and shorthand method syntax.
