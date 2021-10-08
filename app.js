const express = require("express");
const cors = require("cors");
const conectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();

app.use(cors());
conectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const countRequests = require("./middleware/countRequests");

const getProjects = require("./routes/getProjects");
const postProject = require("./routes/postProject");
const updateProject = require("./routes/updateProject");
const deleteProject = require("./routes/deleteProject");
const postTask = require("./routes/postTask");

app.use(countRequests);

app.use(getProjects);
app.use(postProject);
app.use(updateProject);
app.use(deleteProject);
app.use(postTask);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Conectado na porta ${port}`));
