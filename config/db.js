import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_ATLAS)
    console.log(`DB Connected on: ${conn.connection.host}`)
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

export default connectDB
