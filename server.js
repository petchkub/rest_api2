  // server.js
  const express = require('express')
  const bodyParser = require('body-parser')
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    res.status(200).send('Hello Kitty')
  })

  //select
  const books = require('./db')
  app.get('/books', (req, res) => {
    res.json(books)
  })

  app.get('/books/:id', (req, res) => {
    res.status(200).json(books.find(book => book.id === req.params.id))
  })

  //insert
  app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
  })

  //update
  app.put('/books/:id', (req, res) => {
    const updateIndex = books.findIndex(book => book.id === req.params.id)
    res.send('Hello Kitty').status(200).json(Object.assign(books[updateIndex], req.body))
  })
  
  //delete
  app.delete('/books/:id', (req, res) => {
    const deletedIndex = books.findIndex(book => book.id === req.params.id)
    delete books[deleteIndex];
    res.status(200).json(req.body)
 })

  app.listen(3000, () => {
    console.log('http://localhost:3000')
  })