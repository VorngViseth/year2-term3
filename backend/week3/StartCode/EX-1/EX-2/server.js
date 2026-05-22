const PORT = 3000;

const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(
        `<html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>`
    );
});

app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head><title>About</title></head>
            <body>
                <h1>Welcome to the about page</h1>
                <p>About us: at CADT, we love node.js!</p>
            </body>
        </html>  
    `)
});

app.get('/contact-us', (req, res) => {
    res.send(`
                <html>
                    <head><title>Contact</title></head>
                    <body>
                        <h1>Welcome to the Contact page</h1>
                        <p>You can reach us vai email…</p>
                    </body>
                </html>  
    `);
});

app.get('/products', (req, res) => {
    res.send(`
                <html>
                    <head><title>products</title></head>
                    <body>
                        <h1>Welcome to the products page</h1>
                        <p>Buy one get one…</p>
                    </body>
                </html>  
    `);
});

app.get('/projects', (req, res) => {
    res.send(`
                <html>
                    <head><title>projects</title></head>
                    <body>
                        <h1>Welcome to the projects page</h1>
                        <p>Here are our awesome projects</p>
                    </body>
                </html> 
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
});