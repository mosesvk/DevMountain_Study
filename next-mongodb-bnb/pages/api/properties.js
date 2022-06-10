import clientPromise from '../../lib/mongodb'

const propertiesHandler = async(req, res) => {
  const client = await clientPromise;

  const db = client.db('sample_airbnb')

  let listings = await db.collection('listingsAndReviews').find({}).limit(10).toArray()

  res.json(listings)
}

export default propertiesHandler