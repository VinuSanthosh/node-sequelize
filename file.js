const fs = require('fs');

async function readJsonFile(fileName){
    const fileStream = fs.createReadStream(fileName);
    const result= '';
    fileStream
      .on("data", (data) => {
        return data.toString();
      });
      return fileStream;

}

async function main(){
    try{
    const names = await readJsonFile('name.json');
    const address = await readJsonFile('address.json');
    const bioData = names.map((name)=>{
        const matchingAddress = address.find((address) => address.id == name.id);
        return {...name, ...matchingAddress}
    });
    
    await fs.writeFile("bio.json", JSON.stringify(bioData, null, 2));
    console.log("bio.json created successfully!");
  } catch (error) {
    console.error("Error combining data:", error);
  }
}

main();