import fs from "fs/promises"

let a  = await  fs.appendFile("Vishu.txt", "helllllo jiiiiii")
console.log("hii")
let b = await fs.writeFile("vishu5.txt", "Hello ji ")
let c = await fs.readFile("vishu5.txt")

console.log(c.toString())

console.log("Done")