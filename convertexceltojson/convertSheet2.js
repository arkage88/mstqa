const XLSX = require('xlsx');
const fs = require('fs');

// read file
let workbook = XLSX.readFile('./testdata/Skenario.xlsx');
let SheetNames = 'Ex user Login'

// read first sheet (identified by first of SheetNames)
let sheet = workbook.Sheets[workbook.SheetNames[1]];

// convert to JSON
let json = XLSX.utils.sheet_to_json(sheet);
console.log(json)

fs.writeFile('./jsondata/jsonDataSheet2.json', JSON.stringify(json), function(err) {
    if (err) {
         console.log('Error found : ' + err.message);    
    } else {
         //do the rest
    }
});