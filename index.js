const express = require("express");
const studentsRoutes = require("./routes/studentsRoutes");

const cors = require("cors");
const app = express();
app.use(cors());
app.options("*");
app.use(express.json());

app.use(studentsRoutes);

app.get("/test", (req, res, next) => {
  return res.status(200).json({
    message: "Test",
  });
});

app.listen(3000, () => {
  console.log("Listening http://localhost:3000");
});
