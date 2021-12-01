const fs = require('fs');

let rawdata = fs.readFileSync('incorrectJson.json');
let jsonData = JSON.parse(rawdata);

console.log(jsonData);