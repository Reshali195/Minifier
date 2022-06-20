const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
  });

app.get("/minify.js", (req, res) => {
    res.sendFile(__dirname+"/minify.js");
});


app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
