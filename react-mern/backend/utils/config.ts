const dotenv = require('dotenv').config()

export const port = process.env.PORT || 8000
export const node_env = process.env.NODE_ENV || 'development'