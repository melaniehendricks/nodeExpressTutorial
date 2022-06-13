const path = require('path');

// separator property that returns a platform-specific separator: /
console.log(path.sep);

// joins a sequence of path segments using / as delimiter.
console.log(path.join());
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// access base (test.txt)
const base = path.basename(filePath);
console.log(base);

// returns absolute path
// application will run in different environments; will be different
// in my machine vs someone else's
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);