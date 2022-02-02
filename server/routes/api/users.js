const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (request, response) => {
    const users = await loadUsersCollectionFromMongoDB ();         
    
    response.send(await users.find({}).toArray());
});

router.post('/', async (request, response) => {
    const users = await loadUsersCollectionFromMongoDB ();
    await users.insertOne({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        gender: request.body.gender,
        isActive: request.body.isActive,
        createdAt: new Date()       
    });
    
    response.status(201).send();
});

router.delete('/:id', async (request, response) => {
    const users = await loadUsersCollectionFromMongoDB ();
    await users.deleteOne({
        _id: new mongodb.ObjectId(request.params.id)     
    });
    
    response.status(200).send();
});

async function loadUsersCollectionFromMongoDB () {
    let url = "mongodb://localhost:27017/";

    const client = await mongodb.MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });  
    
    return client.db('example-vue-app').collection('users');
}

module.exports = router;