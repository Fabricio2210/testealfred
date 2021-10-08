const Project = require("../db/schema/ProjectSchema");

const findProjects = (res) => {
  Project.find({}).then((data) => {
    return res.status(200).json({
      data: data,
    });
  });
};

module.exports = findProjects;
