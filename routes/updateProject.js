const router = require("express").Router();
const updateProject = require("../helpers/updateProject");
const checkProject = require("../middleware/verifyProjects");

router.put("/projects/",checkProject, (req, res) => {
  updateProject(req, res);
});
module.exports = router;