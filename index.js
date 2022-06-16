const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas via Mongoose connection string (process.env.MONGODB_URI) or via the MongoDB Atlas connection string (process.env.MONGODB_URI_ATLAS)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.info('Connected to MongoDB Atlas successfully 🎉 🎉 🎉 ');
}).catch(err =>{
    console.error('Error connecting to MongoDB Atlas:', err.message);
})


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
})


// 404 error handler
app.use((req, res, next) =>{
    const error = new Error('Not found in the API');
    error.status = 404;
    next(error);
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})