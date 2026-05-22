const PORT = 3000;
const PASSWORD = 123;

const express = require('express');

const app = express();
app.use(express.json());

function logger(req, res, next){
    console.log("nigger");
    next();
}

function checkAuth(req, res, next) {
    const { body } = req;
    const password = body.password;
    const isAuthenthicated = (password == PASSWORD) ? true : false;

    if(!isAuthenthicated) {
        return res.redirect("/auth");
    }

    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/customer", (req, res) => {
    res.send("Hello customer");
    res.end();
});

app.post("/customer", checkAuth, (req, res) => {
    const { body } = req;

    console.log("body : ", body);
    res.redirect("/meahg");
});

app.get("/meahg", (req, res) => {
    res.send("Mea hg");
})

app.get("/auth", (req, res) => {
    res.send("joi joi joi");
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
});