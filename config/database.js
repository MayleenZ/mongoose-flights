const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI


module.exports = function(){
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI, { useNewURLParser: true, useUnifiedTopology: true})
    mongoose.connection.on('error', (error) => {
        console.error(error)
    })
    mongoose.connection.once('open', ()=> {
        console.log('Connected to MongoDB');
    })
    mongoose.connection.on('close', ()=> {
        console.log('Mongodb is disconnected');
    })
}