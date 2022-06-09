import { connectToDatabase } from '../../lib/mongodb';

const defaultHandler = async (req, res) => {
  const {db} = await connectToDatabase()
  res.json('Hello World');
};

export default defaultHandler;
