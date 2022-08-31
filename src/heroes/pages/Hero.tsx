import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Hero = () => {
  const {heroId} = useParams()

  const hero = useMemo(()=>getHeroById(heroId!),[heroId]); 

  const navigate = useNavigate()

  const onReturn = () => {
    navigate(-1);
  }
  

  if (!hero ){
    return (<Navigate to = "/marvel"/>)
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-8 ">
        <img className="img-thumbnail animate__animated animate__zoomInUp animate__delay-1s" src={`/assets/heroes/${hero.id}.jpg`} alt="no hay imagen" />
      </div>

      <div className="col-4 ">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"> <b>First Appearence::</b> {hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-primary' onClick= {onReturn}> Back</button>
      </div>
    </div>
  )
}
