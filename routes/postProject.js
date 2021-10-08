const router = require("express").Router();
const postProject = require("../helpers/postProject");

router.post("/projects", (req, res) => {
  const { title } = req.body;
  postProject(title, res);
});

module.exports = router;
