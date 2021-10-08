const Project = require("../db/schema/ProjectSchema");

const postProject = (title, res) => {
  const project = new Project({
    title
  });
  project.save((err) => {
    if (err) {
      return res.status(500).json({
        msg: `${err}`,
      });
    }else{
        return res.status(200).json({
            msg:"Projeto salvo com sucesso!"
        })
    }
  });
};

module.exports = postProject;