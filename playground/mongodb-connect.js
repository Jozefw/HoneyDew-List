// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

// ES6 destructuring: var user = {name: 'me'; age: 'infinity'}
// what you destructure is also the variable 
// here we destructure user and pull off the name property serving as the variable name as well
// var {name} = user;
// so we could console.log(name) and get me

// second arg below is the client object to issue commands to read and write data
MongoClient.connect('mongodb://localhost:27017/HoneyDewApp',(error,client)=>{
    if (error){
       return console.log("Unable to connect to Mongo DB server");
    }
        console.log("connected to Mongo DB server");
        const db = client.db('HoneyDewApp');

    
        db.collection('Users').insertOne({
            age:"More rando text",
            location:"nowhere"
        },(error,results)=>{
            if(error){
               return console.log("Bang, it all died",error) 
            }
            console.log(JSON.stringify(results.ops,undefined,2));
        })


        // close connection to server
        client.close();
})