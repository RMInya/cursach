const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/consult", require("./routes/consult.routes"));
app.use(cors("*"));
const PORT = config.get("port") || 5000;

async function start() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to db`);
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Error connecting", e.message);
    process.exit(1);
  }
}

start();
