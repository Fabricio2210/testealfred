const router = require("express").Router();
const deleteProject = require("../helpers/deleteProject");
const checkProject = require("../middleware/verifyProjects");

router.delete("/projects/",checkProject, (req, res) => {
  deleteProject(req, res);
});

module.exports = router;
