/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({pokemon}) {

  return (
    <Layout title='NextJS Pokedex'>
      <h1 className='text-4xl mb-8 text-center'>NextJS Pokedex</h1>
      <ul>
        {pokemon.map((item, idx) => (
          <li key={idx}>
            <Link href={`/pokemon?id=${idx + 1}`}>
              <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                <img src={item.image} alt={item.name} className='w-20 h-20 mr-3'/>
                <span className='mr-2 font-bold'>{idx + 1}</span>
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const { results } = await res.json();
    const pokemon = results.map((result, idx) => {
      const paddedIndex = ('00' + (idx + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

      return {
        ...result,
        image,
      };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
