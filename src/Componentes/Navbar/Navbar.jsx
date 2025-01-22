import React, { useState } from 'react';
import './Navbar.css';
import { UilUserCircle } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logomn4.png'

export default function Navbar() {      
          
//   const isAuthenticated = localStorage.getItem('tokenUser');
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem('tokenUser');
//     navigate('/');
//   };
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


  return (
    <div className='navbar'>
        <div className="n-left">
            <a id='logo' href="/">
                <img src={logo} alt="" />
            </a>
            <div id="menuToggle">
                <input id="checkbox" type="checkbox" checked={menuOpen} onChange={toggleMenu}/>
                <label class="toggle" for="checkbox">
                    <div class="bar bar--top"></div>
                    <div class="bar bar--middle"></div>
                    <div class="bar bar--bottom"></div>
                </label>
            </div>
            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                {/* <li>
                    <a href="/eventos">Explorar eventos</a>
                </li> */}
                {/* <li>
                    <a href="/quienes-somos">Nosotros</a>
                </li> */}
                <li>
                    <a href="/contacto">Hazte socio</a>
                </li>
                {/* <li>
                    <a href="/blog">Blog</a>
                </li> */}
                {/* <li>
                    <a href="/ayuda">Ayuda</a>
                </li> */}
            </ul>
        </div>

        {/* <div className="n-right">
            {isAuthenticated? 
            <>
                <a href="/perfil"><UilUserCircle size="50"  /></a>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </>
            :
                <button onClick={()=> navigate("/singup")}>Ingresar</button>
            }
        </div> */}
    </div>
  )
}


    
