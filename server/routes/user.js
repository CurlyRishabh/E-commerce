const express = require("express");
const {MongoClient} = require("mongodb");
require("dotenv").config({
	path: "./env/.env", // Specify the path to your .env file
});

const router = express.Router();

const Name = process.env.USER;
const Pass = process.env.PASS;

//mongoDb connect with nodejs sample code can be found in atlas
const uri = `mongodb+srv://${Name}:${Pass}@cluster0.ws05v0l.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const dbName = "CRUD";
const collectionName = "Users";
let database, collection;

async function run() {
	await client.connect();
	database = client.db(dbName);
	collection = database.collection(collectionName);
}
run();

//print all obj in mongoDB
async function print() {
	const documents = await collection.find({}).toArray();
	return documents;
}

//create user
async function create(x) {
	const {Name, Email, Age} = x;
	const insertOneResult = await collection.insertOne(x);
	return insertOneResult;
}

async function find(mail) {
	const findOneQuery = {email: mail};
	console.log(findOneQuery);

	try {
		const findOneResult = await collection.findOne(findOneQuery);
		console.log("find func: " +findOneResult);
		if (findOneResult === null) {
			return 1;
		} else {
			console.log("User already exists");
			return null;
		}
	} catch (err) {
		console.error(`Something went wrong while trying to find document: ${err}\n`);
	}
}

//update 
async function Update(updatedQuery, query){
	// const updateDoc = 
	console.log("trying to update", query);
	try{
		const updatedResult = await collection.findOneAndUpdate(query, {$set: updatedQuery});
		console.log(`Doc updated successfully:\n${updatedResult}`);
	}catch(err){
		console.error(`Something went wrong while trying to update  document: ${err}\n`);

	}
}

//Delete
async function Delete(query){
	try{
		const w = await collection.deleteMany({email: query.email});
		console.log(`Doc with {email: ${query.email}} deleted.`);
	}catch(err){
		console.error(`something went wrong while deleting ${err}.`);
	}

}

//delete router 
router.delete("/delete" ,async (req, res)=>{
	const body = req.body;
	try {
		await Delete({email: body.email});
		res.json("Deleted successfully");
	} catch (err) {
		res.json(err);
	}
})

router.get("/", async (req, res) => {
	try {
		const documents = await print(); // Assuming print is your async function

		res.json(documents);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "An error occurred"});
	}
});

router.post("/create", async (req, res) => {
	const body = req.body;
	const flag = await find(body.email);
	console.log("create flag: "+ flag);
	if (flag) {
		console.log("creating new user");
		try {
			const result = await create(body);
			res.json(result);
		} catch (error) {
			console.error(error);
			res.status(500).json({error: "An error occurred"});
		}
	} else {
		res.json("The email has already been taken.");
	}
});



// body for update:
// 	{newmail : "mail",
// 	oldmail : "mail"
// 	}
router.put("/update" , async(req ,res) =>{
	const body = req.body;
	const updatedQuery = {email: body.newmail}
	const query = {email : body.oldmail};

	try{
		await Update(updatedQuery, query);
		res.json("email updated")
	}catch(err){
		res.json(err);
	}
})

module.exports = router;
