const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(express.json());

// mongodb database connect
const uri = `mongodb+srv://code-share-app:XKf6TMRiEACwn7J7@cluster0.oy4gwmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const codeCollection = client.db('code-share').collection('codes');

        app.post('/code',async (req,res)=>{
            try {
                const body = req.body
                console.log(body);
                const result = await codeCollection.insertOne(body)
                res.send({message: "code create successfully",result})
            } catch (error) {
                res.send({message: "create fail"})
                
            }
        })

        app.get('/code/:id',async(req,res)=> {
            try {
                const params = req.params.id
                console.log(params);
                const query = {sendId : params}
                const result = await codeCollection.findOne(query);
                res.send(result)
            } catch (error) {
                res.send({message: "some problems"})
            }
        })

        

        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.get('/',async (req,res)=>{
    res.send("the server is running")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
