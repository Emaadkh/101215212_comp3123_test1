const fs = require('fs');
const pathFolder = "./logs";
const countFile = 10;

function removeItems(){
    if(fs.existsSync(pathFolder)){
        for(let i =0; i<countFile; i++){
            fs.unlink(`./logs/log${i}.txt`,(err) => {
                if(err) throw err;
                console.log(`delete files...log${i}.txt`)})
        }
    }
    
    if(fs.existsSync(pathFolder)){
        fs.rmdirSync('logs')
    }
}

module.exports.removeItems = removeItems
  





