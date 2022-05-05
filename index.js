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




const uri = "mongodb+srv://dbuser1:<password>@cluster0.qd4rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('db connected');
    // perform actions on the collection object
    client.close();
});



app.get('', (req, res) => {
    res.send('Assingment-11 Server is Running')
});

app.listen(port, () => {
    console.log('Assingment-11 Server is Running')
})