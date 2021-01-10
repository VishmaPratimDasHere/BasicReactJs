const express = require("express");
const app = express();

app.listen(3100, () => {
    console.log("API server started in port 3100!");
});
app.listen(3200, () => {
    console.log("Second server started.")
});