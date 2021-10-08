const Project = require("../db/schema/ProjectSchema");

const deletTask = async (req, res) => {
  Project.findOneAndRemove({ _id: req.query.id }, () => {
    return res.status(200).json({
      msg: "Projeto deletado com sucesso!",
    });
  });
};

module.exports = deletTask;
