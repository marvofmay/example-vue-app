const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const appAPI = express();

appAPI.use(bodyParser.json());
appAPI.use(cors());

const users = require ('./routes/api/users')

appAPI.use('/api/users', users);

const port = process.env.PORT || 5000;

appAPI.listen(port, () => console.log(`Server just started on ${port}`));