import mongoose, { mongo } from 'mongoose'
import { mongo_uri } from '../utils/config'
import HttpException from '../utils/httpException'

export const connectDB = async () => {
  if (!mongo_uri) {
    console.log('MONGO_URI is not defined in the .env file'.red.underline.bold)
    process.exit(1)
  }

  try {
    await mongoose.connect(mongo_uri);
    console.log('MongoDB connected'.blue.underline.bold)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}


export function checkIsValidObjectId(id: string) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new HttpException(`${id} is not a valid id`, 400);
  }
}