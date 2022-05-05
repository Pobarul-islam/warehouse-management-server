const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;


// use middleware
app.use(cors());
app.use(express.json());



//  user name and password

//user name :  dbuser1
// user password: ThEf09pcUa9bjoqG



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qd4rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


async function run() {
    try {
       
    }

    finally {
       
    }
}

run().catch(console.dir)

app.get('', (req, res) => {
    res.send('Assingment-11 Server is Running')
});

app.listen(port, () => {
    console.log('Assingment-11 Server is Running')
})