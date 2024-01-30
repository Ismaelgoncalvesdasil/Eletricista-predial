import React from 'react';
import './Rodape.css'
import logo from '../assets/favicon.ico'
import insta from '../assets/insta.png'
import zap from '../assets/zap.png'
import QRcode from '../assets/QRcodewhatsapp.jpg'
import linkedin from '../assets/linkedin.png'
// import face from '../assets/face.png'

function Rodape() {
    return (
        <footer >

            <div className='rodape'>
                <div className='rodapes'>

                    <img className='logo' src={logo} />
                    <ul>
                        <h3>Nossos contatos</h3>
                        <li>
                            <p>(21)98952-7772</p>
                        </li>
                        <div className='contatos'>
                            <a href="https://wa.me/message/RKR6RB5VILLUA1"><img src={zap} /></a>
                            <a className='qr' href="https://wa.me/message/RKR6RB5VILLUA1"><img src={QRcode} /></a>
                        </div>
                    </ul>


                    <ul>
                        <h3>Rede Socias</h3>
                        <div className='redes-socias'>
                            <a href="https://www.instagram.com/ismaelgoncalveseletricista/"> <img src={insta} /></a>
                            <a href="https://www.linkedin.com/in/ismaelgoncalves/"> <img src={linkedin} /></a>

                            {/* <img src={face}/> */}
                        </div>

                    </ul>

                </div>
                <h2 className='direito'>Ismael Gonçalves da Silva. Todos os Direitos Reservados.</h2>
                <h3 className='produzido'>Site produzido em react por <a href="https://github.com/Ismaelgoncalvesdasil">Ismael Gonçalves da Silva</a></h3>

            </div>

        </footer>
    );
}

export default Rodape


