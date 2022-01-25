const path = require('path');
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);

const base = path.basename(filePath) //actual file from the path
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);