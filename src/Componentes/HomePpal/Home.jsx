import React from 'react';
import './Home.css';
import '../Events/Events.css';
import { Link } from 'react-router-dom';
import { events } from "../Events/events"
import logo from '../../assets/logomn1.png'
import bar from '../../assets/bar.jpg'
import ventas from '../../assets/ventas.jpg'
import { useSelector } from 'react-redux';



const Inicio = () => {
  let evento = useSelector((state) => state.events)
  if (evento.length < 1) {
    evento = events
  }
  return (
    <div className="inicio">
      <section className="banner">
        <div className="banner-text">
          <h1>MY NIGHT</h1>
          <p>La solución definitiva para disfrutar tu noche.</p>
        </div>
      </section>

      <section className="intro">
        <div className='itemDescription'>
          <h2>¡Adiós a las Filas!</h2>
          <p>Olvídate de las largas filas en el bar. Pide tus bebidas desde nuestra aplicación móvil y disfruta de tu noche sin perder tiempo en la barra.</p>
        </div>
        <div className='itemDescription'>
          <h2>Compra rápida y fácil</h2>
          <p>Ordena tus bebidas favoritas con unos pocos clics. My Night simplifica el proceso de compra para que puedas centrarte en disfrutar del evento.</p>
        </div>
        <div className='itemDescription'>
          <h2>Eventos al alcance de tu mano</h2>
          <p>Descubre los eventos más populares y las promociones exclusivas en tiempo real. My Night te mantiene informado para que no te pierdas nada.</p>
        </div>
      </section>

      <section className="user">
       
        <div className="user-text">
          <h1>Disfruta al Máximo tu Evento</h1>
          <h2>Compra sin Esperas y Accede a Información Exclusiva</h2>
          <p>Con nuestra aplicación móvil, podrás olvidarte de hacer fila en el bar y concentrarte en disfrutar del evento. Además de proporcionar un servicio de compra sin complicaciones, nuestra plataforma ofrece información valiosa sobre los eventos, incluyendo horarios, ubicaciones y promociones exclusivas. Así, podrás planificar tu noche de manera más efectiva y aprovechar al máximo cada momento.</p>
          <button onClick={()=>alert('¡Disponible muy pronto!')}>Descarga la App</button>          
        </div>
        <div className="user-image">
          <img src={bar} alt="Amigos en un bar" />
        </div>
      </section>

      <section className="proximos-eventos">
        <h2>Próximos Eventos</h2>
        <div className="eventos-list">
          {evento.map((event, index) => (
            <Link to={`/eventos/${event.id}`} key={index} className="evento-card">
              <img src={event.image} alt="" />
              <h2>{event.name}</h2>
              <p>Fecha: {event.date.toLocaleDateString()} </p>
              <p>Hora: {event.date.toLocaleTimeString()}</p>
              <p>Lugar:</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="llamado-accion">
        <h2>¡Descarga la App y disfruta al máximo!</h2>
        <p></p>
        <p>Compra tus bebidas favoritas desde tu teléfono móvil. Olvídate de las filas en el bar y no te pierdas ni un momento.</p>
        <p></p>
        <button onClick={()=> alert('¡Disponible muy pronto!')}>Descarga la App</button> 
      </section>

 

      
      <section className="user">
       
        <div className="user-text">
          <h1>Aumenta tus Ventas</h1>
          <h2>Ofrece una Experiencia Excepcional a tus Clientes</h2>
          <p>My Night ofrece a los establecimientos la oportunidad de mejorar la experiencia de sus clientes al permitirles comprar bebidas de forma rápida y conveniente desde sus teléfonos móviles. Al asociarte con nosotros, puedes ofrecer un servicio más eficiente y atractivo, lo que se traduce en clientes más satisfechos y mayores ventas.</p>
                   
        </div>
        <div className="user-image">
          <img src={ventas} alt="Por qué elegirnos" />
        </div>
      </section>



      <section className="llamado-accion">
      
          <h2>¿Estás organizando un evento?</h2>
          <p>Podemos ayudarte a crear una experiencia inolvidable. ¡Empecemos!</p>
          <a href="/contacto">
          <button>Empezar</button></a>
       
      </section>
    </div>
  );
};

export default Inicio;
