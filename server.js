import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import messageRoutes from './routes/messageRoutes.js'
const app = express()

dotenv.config()
const PORT = process.env.PORT

//Parse incoming calls with json
app.use(express.json())

//Resolve __dirname in ES module
const __dirname = path.resolve()
console.log(__dirname)

//Routes
app.use('/api/message', messageRoutes)

//Use Client app
app.use(express.static(path.join(__dirname, '/client/dist')))

//Render Client app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

connectDB()
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`))
