# Exercise 1 - Analyze

### Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

it was the code on line 6 ```return res.endd();```. it got two ds on the word "end".

### Q2 – What is the purpose of res.write() and how is it different from res.end()?

```res.write()``` is to send responses body to the client without finishing the response.

```res.end()``` is to tell the server that the body data have been send and end the response process.

### Q3 – What do you think will happen if res.end() is not called at all?

if the ```res.end()``` doesn't get called at all the client side will continue to wait for more data from the server and it will lead to "Gateway Timeout". And if there are alot of client request to the server it will consume alot of RAM and overheat the server overtime.

### Q4 – Why do we use http.createServer() instead of just calling a function directly?

We use ```http.createServer()``` to create an http server and automatically run the callback whenever a request arrives. it runs repeatedly when the users make a requests.

### Q5 – How can the server be made more resilient to such errors during development?

Server can be made more resilient to such errors during development by using tools during development like nodemon(it automatically restart the server when file changes or crash), use try-catch and validate the input data...etc.

# EXERCISE 2 – MANIPULATE

## Reflective Questions

### 1. What happens when you visit a URL that doesn’t match any of the three defined?

it will load ```error 404 not found``` beecause there are no route that lead to that page.

### 2. Why do we check both the req.url and req.method?

We check both ```req.url``` and ```req.method``` because the same URL can perform different actions depending on the HTTP method.

### 3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?

```
{"content-type": 'text/html' }
```

### 4. How might this routing logic become harder to manage as routes grow?

hard to maintain, code duplacations, poor scalbility, difficult framwork.

### 5. What benefits might a framework offer to simplify this logic?

A framework like Express.js helps simplify routing and server logic by providing built-in tools and better code organization.
 
# EXERCISE 3 – CREATE

