var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.56.1/okja";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("okja");
    dbo.createCollection("mine", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("okja");
    var myobj = { name: "Company Inc", age: 37 };
    dbo.collection("mine").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });