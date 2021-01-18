const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json("Hello gssoc!");
})

app.listen(3100, () => {
    console.log("API Server started in port 3100!");
});

app.listen(3200, () => {
    console.log("API Server started in port 3200 also!");
});