
# Tools and Environments for JavaScript Development

## Essential Tools
To develop JavaScript effectively, developers use various tools ranging from basic text editors to advanced Integrated Development Environments (IDEs).

### Text Editors
- **Visual Studio Code**, **Sublime Text**, and **Atom** are popular choices offering extensive features like syntax highlighting and auto-completion specifically designed for JavaScript development.

## Browser Developer Tools
Every modern web browser includes developer tools, which are essential for debugging JavaScript code. These tools allow developers to inspect HTML elements, modify styles in real-time, and view errors directly in the console.

> "Browsers provide a set of developer tools that help in inspecting the current state of the program and the communication with the network." - Marijn Haverbeke, *Eloquent JavaScript*

## Node.js
JavaScript is not limited to client-side web development. Node.js allows JavaScript to be used on the server-side, providing a powerful platform for building scalable network applications.

> "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." - Marijn Haverbeke, *Eloquent JavaScript*

## Example Node.js Application
Here is a simple example of a Node.js application:
```javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
