const router = require("express").Router();
const postTask = require("../helpers/postTask");
const checkProject = require("../middleware/verifyProjects");

router.post("/projects/tasks", checkProject, (req, res) => {
  postTask(req, res);
});
module.exports = router;
