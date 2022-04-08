/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({pokemon}) {
  console.log(pokemon)
  return (
    <Layout title='NextJS Pokedex'>
      <h1 className='text-4xl mb-8 text-center'>NextJS Pokedex</h1>
      <ul>
        {pokemon.map((item, idx) => (
          <li key={idx}>
            <Link href={`/pokemon?id={idx + 1}`}>
              <a>
                <img src={item.image} alt={item.name} />
                <span>{idx + 1}</span>
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
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
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
