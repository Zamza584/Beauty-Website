const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
