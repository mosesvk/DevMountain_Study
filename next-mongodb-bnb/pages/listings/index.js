import clientPromise from '../../lib/mongodb'

const Listings = ({listings}) => {

  console.log(listings)

  return (
    <h1>Listings</h1>
  )
}

export default Listings

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db('sample_airbnb');

  let listings = await db.collection('listingsAndReviews').find({}).toArray();
  listings.JSON.parse(JSON.stringify(listings))

  return {
    props: {listings}
  }
}