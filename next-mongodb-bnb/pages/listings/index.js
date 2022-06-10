import clientPromise from '../../lib/mongodb'


const Listings = ({listings}) => {

  console.log(listings)

  const display = (
    <>
      <div className='card'>
        <h1>{listings.name}</h1>
        <img src={listings.images.picture_url} alt={listings.name} />
      </div>
    </>
  )

  return (
    <h1>Listings</h1>
  )
}

export default Listings

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db('sample_airbnb');

  let listings = await db.collection('listingsAndReviews').find({}).limit(20).toArray();
  listings = JSON.parse(JSON.stringify(listings))

  return {
    props: {listings}
  }
}