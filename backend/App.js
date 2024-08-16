const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//requests made to /message will receive this response.
app.get("/message", (request, response) => {
  response.json({ message: "This is message sent from the express server 👋" });
});

//have the Server listen om Port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

module.exports = app;
