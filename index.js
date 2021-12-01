const fs = require('fs');

let rawdata = fs.readFileSync('patient.json');
let jsonData = JSON.parse(rawdata);

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

Object.keys(jsonData).forEach(key => {
    // console.log(getType(jsonData[key]))
    if (getType(jsonData[key]) === 'object' || getType(jsonData[key]) === 'array') {
        console.log('Nested keys : ', key);
    } else if (getType(jsonData[key]) === 'boolean') {
        console.log("Boolean Key : ", key);
    } else {
        console.log("Normal Key : ", key);
    }
})