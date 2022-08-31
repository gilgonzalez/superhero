

import { Link, NavLink, useNavigate } from 'react-router-dom';


export const NavBar = () => {

    const navigate = useNavigate();

    const onLogOut = () => {
        navigate('/login', {replace:true});

    }
    return (
        <nav className="navbar navbar-expand-sm d-flex navbar-dark bg-dark p-2 "> 
            <Link 
                className="navbar-brand" 
                to="/"
            >
                SUPERHEROES
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive?'active':''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive?'active':''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive?'active':''}`}
                        to="/search"
                    >
                        SEARCH
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ms-auto ">
                    <span className='nav-item nav-link '>Gil</span>
                </ul>
                <button onClick={onLogOut} className='nav-item nav-link p-1 me-2 btn btn-danger text-white'>
                    Logout
                </button>
            </div>
        </nav>
    )
}