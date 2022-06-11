import clientPromise from '../../lib/mongodb'

const bookHandler = async(req, res) => {
  const {db} = await clientPromise;

  const data = req.query

  let response = await db.collection('bookings').insertOne(data)

  res.json(response)
}

export default bookHandler