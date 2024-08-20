const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
