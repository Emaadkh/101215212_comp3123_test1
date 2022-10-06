let fs = require('fs')
const pathFolder = "./logs";

remove  = () =>{
    let removeItems = require('./remove.js')
    removeItems.removeItems()
}

add = () =>{
    let add = require('./add.js')
    add.addItems()
}

if(!fs.existsSync(pathFolder)){
    add();
}else{
    remove();
}
