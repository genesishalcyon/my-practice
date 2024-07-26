const db = require("../config/db");

const getStudents = async (req, res) => {
  let results = await db.query("SELECT * FROM students");

  return res.status(200).json(results);
};
module.exports = { getStudents };
