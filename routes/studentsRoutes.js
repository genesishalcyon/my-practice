const express = require("express");
const router = express.Router();

const { getStudents } = require("../conroller/studentController");

router.get("/students", getStudents);

module.exports = router;
