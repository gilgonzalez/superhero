import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { Marvel, Dc, Search, Hero } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
      <NavBar/>

      <div className="container-fluid">

      <Routes>
              <Route path="marvel" element = {<Marvel />}/>
              <Route path="dc" element = {<Dc />}/>
              <Route path="search" element = {<Search />}/>
              <Route path="hero/:heroId" element = {<Hero />}/>
              <Route path="/" element={<Navigate to="/marvel"/>}/>
      </Routes>
      </div>
    </>
    )
   
}
