const express = require('express')
const routes = express.Router()
import {Response, Request} from 'express'

routes.get('/', (req: Request, res: Response) => {
  res.json({message: 'Get All Projects'})
})

routes.post('/', (req: Request, res: Response) => {
  res.json({message: 'create a project'})
})

routes.get('/:id', (req: Request, res: Response) => {
  res.json({message: `GET Project - ${req.params.id}`})
})

routes.put('/:id', (req: Request, res: Response) => {
  res.json({message: `UPDATE Project - ${req.params.id}`})
})

routes.delete('/:id', (req: Request, res: Response) => {
  res.json({message: `DELETE Project - ${req.params.id}`})
})

module.exports = routes