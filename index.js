const express = require('express');
const mongoose = require('mongoose');
const Van = require('./models/vanModel.js');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, Vanlife API Server updated');
});

app.post('/api/vans', async (req, res) => {
    try{
        const van = await Van.create(req.body);
        res.status(200).json(van);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

mongoose.connect('mongodb+srv://dylaneight01:qQs352chOwbkOg50@backenddb.l02hy.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });