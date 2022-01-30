const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (request, response) => {
    const users = await loadUsersCollectionFromMongoDB ();
    console.log('utuu', users);            
    
    response.send(await users.find({}).toArray());
});

router.post('/', async (request, response) => {
    const users = await loadUsersCollectionFromMongoDB ();
    await users.insertOne({
        firstName: request.body.firstName,
        lastName: request.body.firstName,
        email: request.body.lastName,
        gender: request.body.gender,
        isAtive: request.body.isActive,
        cretedAt: new Date()       
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