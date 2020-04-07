const express = require('express')
const app = express()
const port = 8080
const fs = require('fs');
app.set('view engine', 'ejs');
// const web = require('./index.html')

// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     // http.createServer(function (request, response) {
//     //     response.writeHeader(200, { "Content-Type": "text/html" });
//     //     response.write(html);
//     //     response.end();
//     // }).listen(8000);
//     app.get('/', (req, res) => res.write(html))
// });
// app.get('/', (req, res) => res.send("web"))
app.get('/', function (req, res) {
    res.render('index');
});
app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))