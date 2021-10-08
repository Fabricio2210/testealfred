const Project = require("../db/schema/ProjectSchema");

const saveTask = async (req, res) => {
    const { title } = req.body;
    
    const findProject = await Project.findOneAndUpdate(
      { _id: req.query.id },
      { $push: { task: title} },
      () => {
        return res.status(200).json({
          msg: "Tarefa salva com sucesso!.",
        });
      }
    );
    return findProject
  };
  module.exports = saveTask;
