import * as express from 'express'
import {connectDB} from './database/db'
import { errorHandler } from './middleware/errorMiddleware';
import {port} from './utils/config'
const projectRoutes = require('./routes/projectRoutes')
import * as Colors from 'colors.ts'
Colors.colors('','')

connectDB() //mongodb connect

const app  = express();
app.use(express.json())

app.use('/api/projects', projectRoutes)

app.use(errorHandler)




app.listen(port, () => console.log(`Server is listening on Port ${port}`))