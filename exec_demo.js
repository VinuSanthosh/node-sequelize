const {exec} = require('child_process');

exec('dir',(error, stdout,stderr)=>{

    if(error){
        console.log(`error in : ${error.message}`);
        return;
    }
    if(stderr){
        console.log(`error in: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

});