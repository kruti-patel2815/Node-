const http = require("http")

const fs = require("fs")

const app = http.createServer((req,res)=>{
    console.log(req.url);
    const data = fs.readFileSync("demo121.txt")
    if(req.url == "/"){
        res.write(data)
    }
    else if(req.url == "/about"){
        res.write("About")
    }
    else if(req.url == "/contact"){
        res.write("Contact")
    }
    res.end()
})
app.listen(3000)