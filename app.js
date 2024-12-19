const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/tag", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/search", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기중..");
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});