import React from 'react';
import './Footer.css';
import logo from '../../assets/logomn1.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';

export default function Footer() {
  return (
    <div className='containerFooter'>
      <div className='limitContainer'>
        <img src={logo} alt="Logo" />
        <div className="privacy">
          <a href='/privacy'>
            <h4 className='aGoup'>Políticas De Privacidad</h4>
          </a>
          <a href='/'>
            <h4 className='aGoup'>Términos y Condiciones</h4>
          </a>
        </div>
        <div className='instagram' >
          <a  href="/">
          {/* <a href="https://www.instagram.com/donca_travel/" target="_blank" rel="noreferrer"> */}
            <Instagram size="50"/>
          </a>
        </div>
          
        </div>
        <div className='derechos'>
        <p>Todos los Derechos Reservados</p>
          <p>Go Up Cloud SPA</p>
        </div>
      

      

    </div>

    
  )
}
