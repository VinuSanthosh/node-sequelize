// const fs = require('fs');
// /*fs.readFile('name.json', function(err, data) { 
//     if (err) throw err; 
//     const books = JSON.parse(data); 
//     console.log(books); 
// })*/

// const fileStream = fs.createReadStream('name.json');

// fileStream.on("data",async (data)=>{
//     const result = await data.toString();
//     console.log("Read data:", result);
// }).on("end",()=>{
//     console.log("finished");
// })

const fs = require("fs");

const name =
{
    title: "Alli goes to school",
    genre: "Fiction",
    type: "Children",
    pages: 56
};

const jsonData = JSON.stringify(name, null, 2);
fs.writeFile("name.json", jsonData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Data written to file');
    }
});
