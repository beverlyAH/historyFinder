const history = require('./data/db.json')
const _ = require('lodash')
const fs = require('fs')

// Create a writable stream
var writerStream = fs.createWriteStream('./data/db_new.json')

// after updating data, rename db.json to something else, and rename db_new.json to db.json
// adding an ID to every entry allows us to target specific entries

let events = {
  events: []
}

let sequence = 0;
for (let i = 0; i < history.events.length; i++) {
  let temp = history.events[i]
  temp.id = sequence
  events.events.push(temp)
  sequence++
}

// Write the data to stream with encoding to be utf8
writerStream.write(JSON.stringify(events),'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
  console.log("Write completed.");
});

writerStream.on('error', function(err) {
  console.log(err.stack);
});

