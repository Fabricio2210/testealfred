const Project = require("../db/schema/ProjectSchema");

const updateProject = async (req, res) => {
  const { title } = req.body;
  const update = {
    title,
  };
  const findProject = await Project.findOneAndUpdate(
    { _id: req.query.id },
    update,
    () => {
      return res.status(200).json({
        msg: "Alterações feitas com sucesso!.",
      });
    }
  );
  return findProject
};
module.exports = updateProject;