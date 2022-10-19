const express = require('express');
const routes = express.Router();
const {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectControllers')

routes.route('/')
  .get(getAllProjects)
  .post(createProject)

routes.route('/:id')
  .get(getSingleProject)
  .put(updateProject)
  .delete(deleteProject)


module.exports = routes;
