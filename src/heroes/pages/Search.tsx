import { FormEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import ItemHero from "../components/ItemHero"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers"



export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [q, setQ] = useState('')

  //const query = queryString.parse(location.search);
  const query = queryString.parse(location.search) || '';




  //pasar al propiedad Q a string

  useEffect(() => {
    if (query.q !== undefined ) {
      setQ(query.q!.toString())
      console.log('entra')
    }  
  }, [location])
  
  const heroes = getHeroesByName(q)

  const showSearch = q==='';
  const showNoResult = q.length>0&& heroes.length===0;

  const { searchText,formState,onInputChange,onResetForm} = useForm({
    searchText: q
  })

  const onSearchSubmit = (event:FormEvent<HTMLFormElement>)=> {
    event.preventDefault();

    //if(searchText.trim().length <=1) return ;

    navigate(`?q=${searchText.toLocaleLowerCase().trim()}`)
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row ">

        <div className="col-2 me-2">
          <h3 className='d-none d-lg-block'>Searching...</h3>
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
              name='searchText'
              autoComplete="off" />
              <button className='btn btn-outline-primary mt-2'>Search</button>
          </form>
        </div>
        <div className="col-8">
          <h4>Results</h4>
          <hr />

          {/*
            (q==='')
            ? <div className='alert alert-primary'>Search a hero</div>
            : (heroes.length === 0) 
            &&<div className='alert alert-danger'>There aren't results with <b>{q}</b></div>
            
          */}

          <div className="alert alert-primary animate__animated animate__bounce" style={{display:showSearch?'':'none'}}>
              Search a Hero
          </div>

          <div className='alert alert-danger animate__animated animate__hinge' style={{display:showNoResult?'':'none'}}>
            There aren't results with <b>{q}</b>
          </div>

            
          
          <div className="row rows-cols-1 row-cols-md-2 g-2">

          {heroes.map(hero=>(
            <div key={hero.id} className='mt-2 animate__animated animate__bounceInUp'>
              <div className="col-12">
                  <ItemHero  key={hero.id} {...hero}/>

              </div>
           
            </div>

          ))}
          </div>

            
          
        </div>
      </div>
    </>
  )
}


