
import { useMemo } from 'react';
import { getHeroesByPub } from '../helpers'
import ItemHero from './ItemHero';

interface ListHeroesProps {
    publisher : string
}

export const ListHeroes = ({publisher} : ListHeroesProps) => {

    const listadoHeroes = useMemo(()=>getHeroesByPub(publisher), [publisher]);
  return (

    <>
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
          listadoHeroes.map((hero)=>(
              <ItemHero 
                key={hero.id} 
                {...hero}
              />
          ))
      }
    </div>
        
    </>

    
  )
}

