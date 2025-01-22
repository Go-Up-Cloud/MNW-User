import React from 'react';
import './EventDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { events } from './events';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

export default function EventDetail() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { id } = useParams();
  const evento = events.find(event => event.id === parseInt(id));

  if (!evento) {
    return <div>Evento no encontrado</div>;
  }

  return (
    <>    
    <div className="detalles-evento">
   
      <div className="evento-info">
        <div className="evento-imagen">
          <img src={evento.image} alt={evento.name} />
        </div>
        <div className="evento-descripcion">
          <h2>Descripción del Evento</h2><br/>
          <p>{evento.description}</p>
        </div>
      </div>
      <div className="evento-detalles">
        <h1>{evento.name}</h1>
        <p>Fecha: {evento.date.toLocaleDateString()}</p>
        <p>Hora: {evento.date.toLocaleTimeString()}</p>
        <p>Lugar: {evento.location}</p>
        {/* <div className="precio">
          <p>Precio: ${evento.price}</p>
          <button onClick={() => navigate(`/transbank`, { state: { evento } })}>COMPRAR</button>
        </div> */}
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
      </div>
    </div>
    </>
  );
};