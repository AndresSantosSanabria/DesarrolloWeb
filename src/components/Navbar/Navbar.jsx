import { useRef } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () =>{
      navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
          <NavContainer>
            <img className='Logo' width={253} src='img/logo.png' alt='Logo'></img>
            <div>
              <nav ref={navRef}>
                <Link onClick={showNavbar} className='route' to="/">Inicio</Link>
                <Link onClick={showNavbar} className='route' to="/Nosotros">Nosotros</Link>
                <Link onClick={showNavbar} className='route' to="/Servicios">Servicios</Link>
                <Link onClick={showNavbar} className='route' to="/Portafolio">Portafolio</Link>
                <Link onClick={showNavbar} className='route' to="/Blog">Blog</Link>
                <Link onClick={showNavbar} className='route' to="/Contacto">Contacto</Link>
                <img className='logoP' width={200} src='img/logo.png' alt='img'></img>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                  <FaTimes></FaTimes>
                </button>
              </nav>
            </div>
            <button className='nav-btn' onClick={showNavbar}>
              <FaBars></FaBars>
            </button>
            
          </NavContainer>
        </>
    )
}export default Navbar;
const NavContainer =styled.nav`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

  .Logo{
    margin-left:-1.7%;
  }


  div{
    left:5%;
    position:relative;
    margin-top:-2%;
  }
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:80px;
  padding:0 2rem;
  background-color: #C7B299;
  color:#ffffff;
  
  .route{
    margin:0rem 2rem;
    font-size: 149%;
    color: #ffffff;
    text-decoration: none;
  }
  .route:hover{
    color: #a87f4d;
    text-decoration: underline;
  }
  .nav-btn{
    padding:5px;
    cursor: pointer;
    background: transparent;
    border:none;
    outline:none;
    color:#ffffff;
    visibility:hidden;
    opacity:0;
    font-size: 1.8rem;
    
  }
  .logoP{
    visibility:hidden;
    opacity:0;
  }
  @media only screen and (max-width: 1024px) {
    
    .Logo{
      width:200px;
      height:80px;
    margin-left:-4.4%
    }
    .nav-btn{
      visibility:visible;
      opacity:1;
      right:2%;
    }
    .logoP{
      visibility:visible;
      opacity:1;
      position: absolute;
      top: 5rem;
      border-radius: 25px 25px 25px 25px;
    }
    nav{
      position:fixed;
      top:0;
      left:0;
      height:100%;
      width:100%;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      gap:1.5rem;
      background-color: #C7B299;
      transition: .3s;
      transform: translateY(100vh);
      z-index: 9;
      //-100vh
    }
    .responsive_nav{
      transform:none;
    }
    .nav-close-btn{
      position: absolute;
      top: 2rem;
      right:2rem;

    }
    .route{
      font-size:1.5rem;
    }
    .route:hover{
      text-decoration: underline;
      color: #a87f4d;
    }
  }
  @media  screen and (max-width: 600px) {
    height:65px;
    .Logo{
      width:170px;
      height:65px;
    margin-left:-10.3%
    }
  }

`
