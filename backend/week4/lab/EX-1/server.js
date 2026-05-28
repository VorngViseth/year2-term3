import express from "express";

const app = express();
app.use(express.json());

// In-memory user store
let users = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Lee", email: "charlie.lee@example.com" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
  { id: 5, name: "Ethan Brown", email: "ethan.brown@example.com" },
  { id: 6, name: "Fiona Garcia", email: "fiona.garcia@example.com" },
  { id: 7, name: "George King", email: "george.king@example.com" },
  { id: 8, name: "Hannah White", email: "hannah.white@example.com" },
  { id: 9, name: "Ian Black", email: "ian.black@example.com" },
  { id: 10, name: "Jane Miller", email: "jane.miller@example.com" },
  { id: 11, name: "Kyle Green", email: "kyle.green@example.com" },
  { id: 12, name: "Laura Adams", email: "laura.adams@example.com" },
  { id: 13, name: "Mike Davis", email: "mike.davis@example.com" },
  { id: 14, name: "Nina Torres", email: "nina.torres@example.com" },
  { id: 15, name: "Oscar Young", email: "oscar.young@example.com" },
  { id: 16, name: "Paula Scott", email: "paula.scott@example.com" },
  { id: 17, name: "Quentin Wright", email: "quentin.wright@example.com" },
  { id: 18, name: "Rachel Hall", email: "rachel.hall@example.com" },
  { id: 19, name: "Steve Baker", email: "steve.baker@example.com" },
  { id: 20, name: "Tina Morgan", email: "tina.morgan@example.com" },
];

// middle ware
function logger(req, res, next) {
  const timeStamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`${timeStamp} ${method} ${url}`);

  next();
}

// app middle ware
app.use(logger);

// route
app.get('/users', (req, res) => {
  res.send(users);
})

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).send({ error: 'Invalid user id' });
  }

  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send({ error: 'User not found' });

  res.send(user);
})

app.post('/users', (req, res) => {
  const body = req.body;

  if (!body.name || !body.email)
    return res.status(400).send({error: 'name and email is required'});

  const newId = users[users.length - 1].id + 1;
  const newUser = { id: newId, name: body.name, email: body.email };

  users.push(newUser);
  res.status(201).send(newUser);
})

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  if (Number.isNaN(id)) 
    return res.status(400).send({ error: 'Invalid user id' });
  
  if (!body.name && !body.email)
    return res.status(400).send({error: 'name and email is required'});

  const userIndex = users.findIndex(u => u.id == id);
  if (userIndex === -1)
    return res.status(404).send({ error: 'User not found' });

  users[userIndex] = {
    ...users[userIndex],
    ...body
  };

  res.send(users[userIndex]);
})

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) 
    return res.status(400).send({ error: 'Invalid user id' });
  
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1)
    return res.status(404).send({ error: 'User not found' });

  const deletedUser = users.splice(userIndex, 1);
  res.status(204).send();
})

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
