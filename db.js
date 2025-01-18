
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/users';

//setup mongodb connection

mongoose.connect(mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection;


// creating event listner

db.on('connected',()=>{
    console.log("connected to database");
})
db.on('disconnected',()=>{
    console.log("disconnected to database");
})

db.on('error',(err)=>{
    console.log("Error: ", err);
})