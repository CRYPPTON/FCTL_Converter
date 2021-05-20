const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/static", express.static(path.resolve(__dirname, "public", "static")));

app.get("/*", (req, res) => {
    let absolutePath = path.resolve(__dirname, "public", "index.html")
    res.sendFile(absolutePath)
});


app.listen(PORT, () => console.log("Server running..."))


