let fs = require('fs')
const pathFolder = "./logs";
const countFile = 10;


function addItems(){
    if(!fs.existsSync(pathFolder)){
        fs.mkdirSync(pathFolder);
    }
    
    process.chdir(pathFolder);
    console.log("---QUESTION_Three---")
    for(let i =0; i<countFile; i++){
        fs.writeFile(`log${i}.txt`, `This message is for log ${i}`,
         (err) => err ? console.error(`Not create 'log${i}.txt'`)
          : console.log(`log${i}.txt`)
            
        );
    }
}

module.exports.addItems = addItems



