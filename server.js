console.log("ooot tyhme jos naat tan");
const express = require('express');
const app = express();

port = process.env.PORT || 3000;
 app.listen(port, () => console.log("syokanaa"));

app.use(express.static("public"));
console.log("kokeilumuutos");

app.use(express.json({limit: '1mb'}));

const hyvaa =[

{
  "ajantuhlaajat": "pelin tekijä",
  "maissi": "ainakin 1"

},
{
"botti": "kirjain",
"pisteet": "enemmän kun sulla"
}
]

app.get('/api/pisteet', function (request, response) {
 response.send(hyvaa);
})
