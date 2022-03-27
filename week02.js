require("sslkeylog").hookAll();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qcuar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
	if(err) {
		console.log(err.message)
		return
	}
	console.log('Connected to MongoDB');
	
	// client.db().admin().listDatabases().then(result => {
	// 	console.log(result['databases'][6]['name']);
	// })

	client.db().admin().listDatabases().then(result => {
		console.log(result);
	})
	
	// client.db('sample_airbnb').listCollections().toArray().then(result=>{
	// 	console.log(result[4]);
	// })

	// client.db('sample_airbnb').collection('listingsAndReviews').find({}).toArray().then(result=>{
	// 	console.log(result);
	// })
});