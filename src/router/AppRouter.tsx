
import { Login } from "../auth"
import {  Route, Routes } from "react-router-dom"

import { HeroesRoutes } from "../heroes"





export const AppRouter = () => {
  return (
    <> 
        <Routes>
           
            <Route path="login" element = {<Login />}/>
            <Route path="/*" element = {<HeroesRoutes />}/>



           
        </Routes>
        
    </> 
    )
}