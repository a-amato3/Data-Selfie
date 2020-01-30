const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });
  });


app.post('/api', (request, response) =>{
    console.log(request.body);
    console.log('I got a request');

    const data = request.body;
    database.insert(data);
    const timestamp = Date.now();
    data.timestamp = timestamp;
        response.json({
        status: 'success',
        Mood: data.mood,
        timestamp: timestamp,
        latitude: data.lat,
        longitude: data.lon
    });
});



