import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title='NextJS Pokedex'>
      <h1 className='text-4xl mb-8 text-center'>NextJS Pokedex</h1>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const { results } = await res.json();
    // the res is an object which includes the 'results' value. We only need the 'results' from the res object
    
  } catch (err) {
    console.error(err);
  }
  return {
    props: {},
  };
}
