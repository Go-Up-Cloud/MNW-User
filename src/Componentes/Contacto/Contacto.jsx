import React from 'react';
import "./Contacto.css";
import logo from "../../assets/LogoGoup.png"
import apps from "../../assets/apps.png"
import soporte from "../../assets/soporte.jpg"
import uiux from "../../assets/ui-ux.jpg"
import gestion from "../../assets/gestion.jpg"
import alcance from "../../assets/alcance.jpg"

export default function Contacto() {
    return (
        <div className="unete-content">
            <h1>Únete a MY NIGHT</h1>
            <p>
              ¿Eres dueño de un boliche o club y buscas una solución integral para optimizar las ventas de tragos y bebidas en tus eventos?
              ¡Estamos aquí para ayudarte! MY NIGHT ofrece una aplicación móvil que permite a tus clientes comprar tragos y bebidas durante tus eventos sin tener que hacer filas en los bares, junto con una plataforma de administración para cargar tus productos y gestionar tus eventos, así como una aplicación para tus bartenders para tomar y preparar las órdenes de tus clientes en tiempo real.
            </p>

            <div className="unete-service">
                <div className="serviceData">
                    <h2>Nuestro Servicio</h2>
                    <ul>
                        <li><b><u>Compra de Tragos Online:</u></b> Permite a tus clientes comprar tragos y bebidas de forma rápida y conveniente durante tus eventos.</li><br/>
                        <li><b><u>Plataforma de Administración:</u></b> Carga tus productos para vender dentro de la app y gestiona tus eventos de manera eficiente.</li><br/>
                        <li><b><u>App para Bartenders:</u></b> Tus bartenders podrán recibir y preparar las órdenes de los clientes en tiempo real.</li><br/>
                        <li><b><u>Personalización:</u></b> Adaptamos la plataforma a la identidad de tu boliche o club.</li><br/>
                    </ul>
                </div>
                <div className="serviceImage">
                    <img src={apps} alt="" />
                </div>
            </div>

            <div className="unete-benefits">
                <h2>Beneficios de unirse a MY NIGHT</h2>
                <ul>
                    <li>
                        <img src={alcance} width="200rem" alt="" />
                        <p><b>Amplía tu Alcance:</b></p>
                        <p>Llega a un público más amplio y diverso.</p>
                    </li>
                    <li>
                        <img src={uiux} width="200rem" alt="" />
                        <p><b>Experiencia de Usuario Mejorada:</b></p>
                        <p>Brinda a tus clientes la comodidad de comprar sin tener que hacer filas.</p>
                    </li>
                    <li>
                        <img src={gestion} width="200rem" alt="" />
                        <p><b>Gestión Simplificada: </b></p>
                        <p>Simplifica la gestión de tus eventos y ventas de tragos con herramientas eficientes.</p>
                    </li>
                    <li>
                        <img src={soporte} width="200rem" alt="" />
                        <p><b>Soporte Profesional:</b></p>
                        <p>Nuestro equipo de soporte está aquí para ayudarte en cada paso del camino.</p>
                    </li>
                </ul>
            </div>

            <div className="unete-contact">
                <div className="contact-info">
                    <h2>¿Listo para Unirte?</h2>
                    <p>Si estás interesado en llevar tus eventos al siguiente nivel y optimizar tus ventas de tragos y bebidas con MY NIGHT, ¡contáctanos hoy mismo! Estamos emocionados de trabajar contigo.</p>
                </div>

                <div className="contact-form">
                    <h2>Contacto</h2>
                    <form>
                        <label>Nombre:</label>
                        <input type="text" />

                        <label>Correo Electrónico:</label>
                        <input type="email" />

                        <label>Mensaje:</label>
                        <textarea></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
