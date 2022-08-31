import { Link } from "react-router-dom";

interface ItemHeroProps {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  key: string;
}

const ItemHero = ({superhero, id, alter_ego,characters,first_appearance}:ItemHeroProps) => {

  const heroURL = `assets/heroes/${id}.jpg`
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className="card ">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={heroURL} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
              <div className="card-body">
                <h5 className='card-title'>{superhero}</h5>
                <p className='card-text'>{alter_ego}</p>
                {
                (alter_ego !== characters) && (<p className='text-truncate-two'>{characters}</p>)
                }
                <p className = 'card-text'>
                  <small className='text-muted'>{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>
                  Mas info
                </Link>
                
              </div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default ItemHero