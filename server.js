console.log("ooot tyhme jos naat tan");
const express = require('express');
const app = express();
app.listen(3000, () => console.log("syokanaa"));
app.use(express.static("public"));
console.log("kokeilumuutos");
