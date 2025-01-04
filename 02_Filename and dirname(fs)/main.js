const fs = require("fs")


console.log("Staring")

fs.writeFile("vishu-2.txt", "Vishu is a very good boy ", ()=>{

    console.log("done ji done")

    fs.readFile("vishu-2.txt", (error,data)=>{
        console.log(error, data.toString())
    })
}) //It's a better approch to write a file 
// fs.writeFileSync("Vishu.txt", "vishu is a good boy") It's basically a blocking code that dont allow to run the next program before the current porgramis working .


fs.appendFile("Vishu3.txt", "Hello World ", (e,d)=>{
    console.log(d)
})

console.log("Ending")