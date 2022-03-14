const express = require('express')
const mongodb = require('mongodb')

const routerAPI = express.Router()

routerAPI.get('/', async (request, response) => {
  const users = await loadUsersCollectionFromMongoDB()
  console.log('utuu', users)

  response.send(await users.find({}).toArray())
})

routerAPI.post('/', async (request, response) => {
  const users = await loadUsersCollectionFromMongoDB()
  await users.insertOne({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    gender: request.body.gender,
    isActive: request.body.isActive,
    createdAt: new Date()
  })

  response.status(201).send()
})

routerAPI.delete('/:id', async (request, response) => {
  const users = await loadUsersCollectionFromMongoDB()
  await users.deleteOne({ _id: new mongodb.ObjectId(request.params.id) })

  response.status(200).send()
})

async function loadUsersCollectionFromMongoDB () {
  const uri = 'mongodb+srv://marcin:IccCLja3dbkui7Bs@cluster0.v0glz.mongodb.net/example-vue-app-db?retryWrites=true&w=majority'

  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  return client.db('example-vue-app').collection('user')

}

module.exports = routerAPI
