const { createReadStream, createWriteStream } = require("fs");

let readStream = createReadStream("./input.txt");
let writeStream = createWriteStream("./output.txt");

readStream.pipe(writeStream)

