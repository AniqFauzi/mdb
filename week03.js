require("SSLKEYLOG").hookAll();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qcuar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233

// const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
// const avatarUrl = faker.image.avatar();
// const natureImageUrl = faker.image.nature();
// const zh_CN_fullName = `${faker_zh_CN.name.firstName()} ${faker_zh_CN.name.lastName()}`;

client.connect(err => {
	if(err) {
		console.log(err.message)
		return
	}
	console.log('Connected to Mongodb'); 

	const bcrypt = require("bcryptjs")

  const password = "mypass123"
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function (saltError, salt) {
    if (saltError) {
      throw saltError
    } else {
      bcrypt.hash(password, salt, function(hashError, hash) {
        if (hashError) {
          throw hashError
        } else {
          console.log(hash)
        }
      })
    }
  })

  client.db('Week3').collection('faker').insertOne({
    name: randomName,
    email: randomEmail,
    employees: randomPhoneNumber
  }).then(result => {
    console.log(result);
  })

});