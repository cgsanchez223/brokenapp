### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
You have to use asynchronous callbacks such as setTimeout. setTimeout is a callback function that delays the code from running until the set time has expired. AJAX can also be used to delay code from running until after the rest of the code is finished.

- What is a Promise?
A promise is a one time guarantee of future value. A Promise in JavaScript is an object. It can come in one of three states - pending, resolved,  and rejected. Pending means it does not have a value yet. Resolved means that it has successfully obtained a value. Rejected means it has failed to obtain a value for some reason.

- What are the differences between an async function and a regular function?
The async function always returns a promise.

- What is the difference between Node.js and Express.js?
Node.js creates an environment for executing JavaScript code outside of a browser. Can be used to buld any kind of server side JavaScript such as web applications or general purpose-scripting language.

Express.js is a framework. It is similar to a server program such as Flask. It works with Node.js as a web server to display what is inputted into node.js. It can also use middleware and routing to help render http obkects.

- What is the error-first callback pattern?
A function which either returns an error object or any successful data returned by the function.

- What is middleware?
Middleware runs in the middle of the request / reponse cycle. Get acess to the request, response, and next objects/functions in Express.js. Used to authorize a user before they reach the end point.

- What does the `next` function do?
The next function is used to keep the code going to the next route.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
The return will get information from all the users. It is making 3 separate asynchronous calls, waiting for each to complete before starting the next one, which may not be efficient. If you run a Promise function is there, you can run the functions parallel to each other.
The order of return is also inconsistent with the order originally specified. There is also a lack of error handling that could be used in case of errors.
