/*const fs = require("fs");
const fileStream = fs.createWriteStream('./file.txt')
//for (let i = 0; i <= 20; i++) {
  fileStream.write("Hello world welcome to Node.js\n"
  //);
}*/

/*const fs = require("fs");
const fileStream = fs.createReadStream("./file.txt");
fileStream
  .on("data", (data) => {
    console.log("Read data:", data.toString());
  })
  .on("end", () => { console.log("No more data."); });*/

const fs = require("fs");
const { Transform } = require("stream");
const fileStream = fs.createReadStream('./file.txt');
const transformedData= fs.createWriteStream("./transformedData.txt");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

fileStream.pipe(transformedData);