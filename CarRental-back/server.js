const express = require("express");
const path = require("path");
const userCtrl = require("./controllers/UserController");
const app = express();
const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));
// app.use(express.json());
app.use("/images", express.static("images"));

require("./config/database");
app.use(
  cors({
    origin: "*",
  })
);
const PORT = 8080;

require("./routers")(app);

app.listen(PORT, () => console.log(`App listen on http://localhost:${PORT}`));
