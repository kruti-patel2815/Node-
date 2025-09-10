const { log } = require('console');
const fs = require('fs')

console.log("Hello!!!");
console.log("Hello Good morning");

// read
// async
fs.readFile("demo.txt","utf-8",(error,data)=>{
    if(error) throw error
    console.log(data);
})
// sync
const data = fs.readFileSync("demo.txt","utf-8")
console.log(data);


// write
// async
fs.writeFile("demo.txt","Add new data",(error)=>{
    if(error) throw error
    console.log("Data enter successfully");
    
})
// sync
fs.writeFileSync("demo1.txt","Create new data")

// append
// async
fs.appendFile("demo2.txt","Data to append",(error)=>{
    if(error) throw error
    console.log("Data to append");
    
})
// sync
fs.appendFileSync("demo2.txt","Data to append")

// unlink-delete
// async
fs.unlink("demo2.txt",(error)=>{
    if(error) throw error
    console.log("demo2.txt was deleted");
    
})
// sync
fs.unlinkSync("demo1.txt")
console.log("Hello good evening");
console.log("Hello good night");



