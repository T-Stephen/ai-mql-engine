const express = require("express");
const app = express();

app.use(express.json());

app.post("/generate", (req, res) => {
    const query = req.body.query;

    // later connect generateQuery.js here

    res.json({
        status: "working",
        received: query
    });
});

app.listen(3000, () => {
    console.log("AI Engine running on port 3000");
});
