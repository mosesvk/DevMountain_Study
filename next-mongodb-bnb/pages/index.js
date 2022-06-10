import clientPromise from '../lib/mongodb'

export default function Home({ properties }) {

  console.log(properties)

  return (
    <div className="container">


    </div>
  )
}

export async function getServerSideProps(context) {

  const client = await clientPromise;

  const db = client.db('sample_airbnb')

  let data = await db.collection('listingsAndReviews').find({}).limit(10).toArray()

  let properties = JSON.parse(JSON.stringify(data))

  return {
    props: { properties }
  }
}
