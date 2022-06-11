import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import bookHandler from './api/book';

export default function Home({ properties }) {

  const book = async(id) => {
    const data = await fetch(`http://localhost:3000/api/book?property_id=${id}&guest=Mo`)
    const res = await data.json(data)
    console.log(res)
  }

  return (
    <>
      <Head>
        <title>NextJS & MongoDB</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div class='mx-auto container'>
        <div class='flex'>
          <div class='row w-full text-center my-4'>
            <h1 class='text-4xl font-bold mb-5'>MoBnb</h1>
          </div>
        </div>
      </div>

      <div class='flex flex-row flex-wrap'>
        {properties &&
          properties.map((property, idx) => (
            <div class='flex-auto w-1/4 rounded overflow-hidden shadow-lg m-2' key={idx}>
              <div >
                <img src={property.image} class='w-full' />
              </div>

              <div class='px-6 py-4'>
                <div class='font-bold text-xl mb-2'>{property.name} (up to {property.guests} guests)</div>
                <p>{property.address.street}</p>
                <p class='text-gray-700 text-base'>{property.summary}</p>
              </div>

              <div class='text-center py-2 my-2 font-bold'>
                <span class='text-green-500'>${property.price}</span>/night
              </div>

              <div class='text-center py-2 my-2'>
                {/* Remember we have to execute the onClick function and not just point to it */}
                <button onClick={() => book(property._id)} class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded'>Book</button>
              </div>

            </div>
          ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db('sample_airbnb');

  let data = await db
    .collection('listingsAndReviews')
    .find({})
    .limit(10)
    .toArray();

  // If I wanted to add only specific data points with the id of 1...
  // you would add ".project({ _id: 1 })"
  // You could do this with any field or parameter

  const properties = JSON.parse(JSON.stringify(data));

  const filtered = properties.map((property) => {

    const price = JSON.parse(JSON.stringify(property.price))

    return { //props
      _id: property._id, 
      name: property.name,
      image: property.images.picture_url,
      address: property.address,
      summary: property.summary,
      price: price.$numberDecimal,
    }
  })

  return {
    props: { properties: filtered },
  };
}
