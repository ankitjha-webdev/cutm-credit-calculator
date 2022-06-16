const mongoose = require('mongoose');


    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.info('Connected to MongoDB Atlas successfully 🎉 🎉 🎉 ');
    }).catch(err =>{
        console.error('Error connecting to MongoDB Atlas:', err.message);
    })

    module.exports = dbConnection;