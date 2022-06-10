import Head from 'next/head'
import clientPromise from '../../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div className="container">


    </div>
  )
}

export async function getServerSideProps(context) {

  

  return {
    props: { }
  }
}
