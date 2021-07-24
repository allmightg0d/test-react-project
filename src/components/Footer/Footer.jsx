import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-cont">
            <div className="flex-1 just-center ">
                <div className="flex-1 just-center">
                    <h2>GENERIC ECOMMERCE</h2>
                </div>
                <div className="flex-1 flex-column just-center">
                    <h2>RECURSOS</h2>
                    <p>Trabaja con nosotros</p>
                    <p>Terminos y condiciones</p>
                    <p>Avisos Legales</p>
                </div>
            </div>
            <div className="flex-1 just-center ">
                <div className="flex-1 flex-column just-center">
                    <h2>HERRAMIENTAS</h2>
                    <p>Contacto</p>
                    <p>Agenda una entrevista</p>
                    <p>Mapa del sitio</p>
                </div>
                <div className="flex-1 flex-column just-center">
                    <h2>REDES SOCIALES</h2>
                </div>
            </div>
        </footer>
    )
}
