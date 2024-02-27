import { scanDirectory } from "./scanDirectory/scanDirectory.js"

console.log(scanDirectory("./"))

// import * as fs from "fs"
// const fs = require("fs")

// export function scanDirectory(dir) {
//     return fs.readdir(dir, (err, files) => {
//         if (err) throw err

//         return files
//     })
// }
// console.log(scanDirectory("./"))

// const files = fs.readdir("./", (err, files) => {
//     if (err) throw err

//     return files
// })

// console.log("works")
