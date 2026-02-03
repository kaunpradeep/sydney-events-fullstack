const express = require("express");
const cors = require("cors");
require("./db");

const eventRoutes = require("./routes/events");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/events", eventRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
