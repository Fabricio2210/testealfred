const router = require("express").Router();
const getProjects = require("../helpers/getProjects");

router.get("/projects", (req, res) => {
  getProjects(res);
});

module.exports = router;
