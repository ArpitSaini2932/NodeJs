import fs from "fs/promises";
import fsn from "fs";
import path from "path";
let basename = "F:\\React.js and node.js\\Exercise 1";

let files = await fs.readdir(basename);
console.log(files);
for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];

  if (ext != "js" && ext != "json" && item.split(".").length > 1) {

    if (fsn.existsSync(path.join(basename, ext))) {
      fs.rename(path.join(basename,item), path.join(basename, ext, item));
    } 
    else {
      fs.mkdir(ext);
    }
  }
  console.log(item);
}
