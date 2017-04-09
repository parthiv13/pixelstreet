var express = require('express');
var app = express();
var mongod = require('mongodb');
var path = require('path');
var locationC;

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8090;

let url = "mongodb://parthiv:parthiv@ds119370.mlab.com:19370/pixelstreet";
let MongoClient = mongod.MongoClient;
let json = '';

app.get('/', (req, res) => {
	res.send(req.query);
});

app.post('/location', (req, res) => {

    MongoClient.connect(url, (e, db) => {
        if (e) {
          	res.send("try again")
        }
        locationC = db.collection('locationDetails')
        locationC.find({
            name: req.query.location
        }).toArray((e, items) => {
            if (e) res.send(e)
            //console.log(items[0].services);
            res.send(items[0].services)
        })
        db.close()
    })
})

app.post('/profession', (req, res) => {

    MongoClient.connect(url, (e, db) => {
        if (e) {
            console.log(e)
        } else {
            console.log(db);
            locationC = db.collection('locationDetails')
            photographer = db.collection('photographers')
            photographer.find({
                city: req.query.location,
                section: req.query.section
            }).toArray((e, items) => {
                if (e) {
                    console.log(e);
                    res.end('try again');
                }
                console.log(items);
                json = Object.assign({}, items);
                console.log(json);
                res.send(items)
                db.close()
            })
        }
    });
})

app.post('/id', (req, res) => {
	var o_id = new mongod.ObjectID(req.query.id)
	MongoClient.connect(url, (e, db) => {
         if (e) {
             console.log(e)
         } else {
             photographer = db.collection('photographers')
             photographer.find({
               	_id: o_id
             }).toArray((e, items) => {
                 if (e) {
                     console.log(e);
                     res.end('try again');
                 }
                 console.log(items);
                 json = Object.assign({}, items);
                 console.log(json);
                 res.send(items[0])
                 db.close()
             })
         }
     });
})

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
