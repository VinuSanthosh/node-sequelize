const fs = require('fs');
const fileRead = fs.createReadStream('name.json');

fileRead.on("data",(data)=>{
    console.log(data.toString());
}).on("end",()=>{
    console.log('finished');
})

// const fs = require('fs');
// const fileWrite = fs.createWriteStream('./file.txt');
// //for(let i=0; i<=20; i++){
// 	fileWrite.write('Hello vinu');
// //}

// const fileRead = fs.createReadStream('./file.txt');
// fileRead.on("data", (data) => {
//     console.log(data.toString());
// }).on("end",()=>{
//     console.log('end');
// })
