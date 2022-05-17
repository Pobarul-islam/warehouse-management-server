const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();



// use middleware
app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://dbUser4:pyEBkGqkXWCneM2V@cluster0.qd4rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



const run = async () => {
    try {
        await client.connect();
        const watchesCollection = client.db('stockWatches2').collection("watches");

        // Get Products

        app.get('/service', async (req, res) => {
            const query = {}
            const coursor = watchesCollection.find(query);
            const watches = await coursor.toArray();
            res.send(watches);
        });

        // Update Products 
        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await watchesCollection.findOne(query);
            res.send(result);
        })

        // Delete
        app.delete('/service/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: ObjectId(id) };
            const result = await watchesCollection.deleteOne(query);
            res.send(result);
        })


        // post

        app.post('/watches', (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            res.send('user data receved.')
        })

    }
    finally {
        console.log('code does not worked')
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Assingment-11 Server is Running')
});

app.listen(port, () => {
    console.log('Assingment-11 Server is Running', port)
})