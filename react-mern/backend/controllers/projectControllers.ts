import {Response, Request} from 'express'

//@desc Get All Projects
//@route GET  /api/Projects
//@access Public
const getAllProjects = (req: Request, res: Response) => {
  res.status(200).json({message: 'Get All Projects'})
}

//@desc Create Project
//@route POST  /api/Projects/:id
//@access Private
const createProject = (req: Request, res: Response) => {
  const title = req.body.title

  if (!title) {
    res.status(400)
    throw new Error('Title is Required')
  }
  res.json(req. body)
}

//@desc Get Single Project by id
//@route GET  /api/Projects/:id
//@access Public
const getSingleProject = (req: Request, res: Response) => {
  res.json({message: `GET Project - ${req.params.id}`})
}

//@desc Delete Project by id
//@route DELETE  /api/Projects/:id
//@access Private
const deleteProject = (req: Request, res: Response) => {
  res.json({message: `DELETE Project - ${req.params.id}`})
}

//@desc Update Project by id
//@route GET  /api/Projects/:id
//@access Private
const updateProject = (req: Request, res: Response) => {
  res.json({message: `UPDATE Project - ${req.params.id}`})
}

module.exports = {
  getAllProjects,
  getSingleProject,
  createProject,
  deleteProject,
  updateProject
}