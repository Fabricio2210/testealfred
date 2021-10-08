const Project = require("../db/schema/ProjectSchema");

const verifyProject = (req, res, next) => {
  Project.findOne({ _id: req.query.id }).then((data) => {
    if (!data) {
      return res.status(404).json({
        msg: "Projeto não encontrado.",
      });
    } else {
      next();
    }
  });
};
module.exports = verifyProject;
