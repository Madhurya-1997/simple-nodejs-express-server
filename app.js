const express = require('express');
const { questions, names, people } = require('./constants');
const app = express()
const cors = require('cors')

app.use(cors());

app.get('/questions', (req, res) => {
    res.send(questions);
})

app.get('/names', (req, res) => {
    res.send(names);
})

app.get('/people', (req, res) => {
    res.send(people);
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
