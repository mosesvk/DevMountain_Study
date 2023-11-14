import { useContext } from 'react';
import { PokeListContext } from '../PokeContext';

const PokeListCom = () => {
  const pokes = useContext(PokeListContext);
  console.log(pokes);
  return (
    <div className='listBody lg:w-3/4'>
      <div className='screenDiv w-11/12 md:w-4/5 xl:w-3/4'>
        {/* {pokes.map((elem) => {
          let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${elem.id}.png`;
          return <PokeCards elem={elem} img={pokeImg} i={elem.id} />;
        })} */}
      </div>
    </div>
  );
};

export default PokeListCom;
