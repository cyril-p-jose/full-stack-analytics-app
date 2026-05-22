const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Analytics API Running");
});

app.get("/analytics", (req, res) => {

  res.json([
    { month: "Jan", users: 400 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 1200 },
    { month: "Apr", users: 900 },
    { month: "May", users: 1700 }
  ]);

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
