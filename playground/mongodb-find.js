// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/HoenyDewApp',(error,client)=>{
    if (error){
       return console.log("Unable to connect to Mongo DB server");
    }
        console.log("You are now conneted to the MongoDB server")
    const db = client.db('HoenyDewApp');

    // db.collection('HoneyDews').find({
    //     _id: new ObjectID('5b3ae4c00666ed4f3c22362f')
    // }).toArray().then((docs)=>{
    //     console.log("Here is your list:")
    //     console.log(JSON.stringify(docs, undefined, 2))
    // },(error)=>{
    //     console.log("Unable to fetch the list",error);
    // })


    db.collection('HoneyDews').find().count().then((count)=>{
        console.log(`Here is your Collections count:`+ count)
    },(error)=>{
        console.log("Unable to fetch the list",error);
    })

    db.collection('Users').find({name:'me'}).toArray().then((docs)=>{
        console.log(`Here is your list ` + docs);
    },(error)=>{
        console.log('Apparently, It all went to hell in a handbasket')
    })

        // close connection to server
        // client.close();
}
)