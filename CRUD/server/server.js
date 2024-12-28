const express = require("express");
const cors = require("cors");
const eobj = express();
const PORT = 5100;
const {MongoClient,ObjectId} = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

eobj.use(cors());

async function GetConnection() 
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
}

 async function MarvellousGetBatches(req,res)
{
    try
    {
        let data = await GetConnection();
        data = await data.find().toArray();
        res.json(data);
    }
    catch (error)
    {
        console.error("Error fetching data",error);
        res.status(500).send("Error fetching data");
    }
}

eobj.get('/getBatches',MarvellousGetBatches);

eobj.listen(PORT,() =>{
    console.log("Server is running");
});

eobj.use(express.json());

async function MarvellousCreateBatch(req,res)
{
    try
    {
        const newBatch = req.body;
        const data = await GetConnection();
        const result = await data.insertOne(newBatch);
        res.status(201).json({message : "Record added successfully", id: result.insertedId});
    }
    catch(error)
    {
        console.error("Error adding record",error);
        res.status(500).send("Error adding record");
    }
}

eobj.post('/createBatch',MarvellousCreateBatch);


async function MarvellousDeleteBatch(req,res) 
{
    try
    {
    const batchId = req.params.id;
    const data = await GetConnection();
    const result = await data.deleteOne({_id: new ObjectId(batchId)});

    if (result.deletedCount > 0)
    {
        res.status(200).json({message : "Record deleted successfully"});
    }
    else
    {
        res.status(404).json({message : "Record not found"});
    }
    }
    catch(error)
    {
        console.error("Error deleting record",error),
        res.status(500).send("Error deleting record");
    }
}

eobj.delete('/deleteBatch/:id',MarvellousDeleteBatch);


async function MarvellousUpdateBatch(req,res)
{
    try
    {
        const batchId = req.params.id;
        const updateBatch = req.body;

        const data = await GetConnection();
        const result = await data.updateOne(
            {_id : new ObjectId(batchId)},
            {$set :updateBatch}
        );

        if(result.matchedCount === 0)
        {
            return res.status(404).json({message : "BAtch not found"});
        }
        res.status(200).json({message :"Batch updated"});
    }
    catch(error)
    {
        console.error("Error updating", error);
        res.status(500).send("Error updating record");
    }
}

eobj.put('/updateBatch/:id',MarvellousUpdateBatch);

function main()
{
    let ret;

    ret = GetConnection();
    console.log("Database connection is successful");
}

main()

