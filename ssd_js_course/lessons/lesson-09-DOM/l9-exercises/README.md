# Lesson 9 Exercises - Document Object Model (DOM)

**9a.** Create a ‹button>9a</button>. Use document.querySelector("button')
to get the button from the page, and then display it in the console.

**9b.** Continuing from 9a, create another button \<button\>9b\</button\> below. Using JavaScript, change the text in the second button to 
'9b done!' (hint: add a class and use querySelector).

**9c.** Create 2 buttons 'heads' and 'tails', and a paragraph (\<p\>\</p\>) underneath. When clicking the 'heads' button, display
'You chose: heads' in the paragraph. When the 'tails' button, display 'You chose: tails'.

**9d.** Create a text box (\<input\>) and a submit button. When clicking 'Submit', display \'Your name is: ${text}\' on the page
(${text} = the text inside the text box) (hint: use value to get the text inside an \<input\>).

**9e.** Modify exercise 9d so that when you press 'Enter' in the \<input\>, it will also display the same message on the page (hint: use onkeydown and the event object).

**9f.** Continuing from 9e, create a function to reuse the code (if you already did this, skip this exercise).

## Challenge Exercises

**9g.** Create a file 9g.html and copy the code from 09-dom-projects.html into this file. In the Amazon Shipping Calculator, enter a cost of 7.99 and click 'Calculate'. What issue do you see? Find a fix for this issue.

**9h.** Let's create a project:
- Whenever we type in the text box, update the text on the page.
- To do this, we use an event call \<input onkeyup\"...\"\>