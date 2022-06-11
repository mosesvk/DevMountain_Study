import clientPromise from '../../lib/mongodb'

const bookHandler = async(req, res) => {
  const client = await clientPromise;

  const db = client.db('sample_airbnb')

  const data = req.query

  let bookings = await db.collection('bookings').insertOne(data)

  res.json(bookings)
}

export default bookHandler