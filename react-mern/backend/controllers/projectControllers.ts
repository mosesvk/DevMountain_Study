import { Response, Request } from 'express';
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose')

const Project = require('../models/projectModel');

//@desc Get All Projects
//@route GET  /api/Projects
//@access Public
const getAllProjects = asyncHandler(async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(400);
    throw new Error('No Projects found');
  }
});

//@desc Create Project
//@route POST  /api/Projects/:id
//@access Private
const createProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Title is required');
  }
  const project = await Project.create(req.body);
  if (!project) {
    res.status(400);
    throw new Error('Project not created');
  }
  res.status(201).json(project);
});

//@desc Get Single Project by id
//@route GET  /api/Projects/:id
//@access Public
const getSingleProject = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.params);
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error('Project id not found');
  }
  res.status(200).json(project);
});

//@desc Delete Project by id
//@route DELETE  /api/Projects/:id
//@access Private
const deleteProject = asyncHandler(async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`);
    }
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
        res.status(404);
        throw new Error('Project not found');
    }
    res.status(200).json({
        message: `Project ${req.params.id} deleted`,
        project: project,
    });
});

//@desc Update Project by id
//@route GET  /api/Projects/:id
//@access Private
const updateProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Title is required');
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`${req.params.id} is not a valid id`);
  }
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }
  res.json(project);
});

module.exports = {
  getAllProjects,
  getSingleProject,
  createProject,
  deleteProject,
  updateProject,
};
