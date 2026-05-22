const PORT = 3000;

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        Welcome to the home page
    `);
})

app.get('/contact', (req, res) => {
    res.send(`
        <form method="POST" action="/contact">
        <input type="text" name="name" placeholder="Your name" />
        <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/contact', (req, res) => {
    const { body } = req;

    console.log('Body : ', body);
    fs.appendFile('submissions.txt', JSON.stringify(body) + '\n', () => {
        res.end('Success');
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
});