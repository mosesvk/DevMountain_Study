import * as express from 'express'
import {port} from './utils/config'
const projectRoutes = require('./routes/projectRoutes')

const app  = express();
app.use(express.json())

app.use('/api/projects', projectRoutes)




app.listen(port, () => console.log(`Server is listening on Port ${port}`))