import React from 'react';
import './Rodape.css'
// import insta from '../assets/insta.png'
import zap from '../assets/zap.png'
import QRcode from '../assets/QRcodewhatsapp.jpg'
// import face from '../assets/face.png'

function Rodape() {
    return (
        <footer className='rodape2 ' >

            <div className='rodape'>

                <ul>
                    <h3>Nossos contatos</h3>
                    <li>
                        <p>(21)98952-7772</p>
                    </li>

                </ul>


                <ul>
                    <h3>Rede Socias</h3>
                    <div className='redes-socias'>
                        {/* <img src={insta}/> */}
                        <a href="https://wa.me/message/RKR6RB5VILLUA1"><img src={zap} /></a>
                        <a className='qr' href="https://wa.me/message/RKR6RB5VILLUA1"><img src={QRcode} /></a>
                        {/* <img src={face}/> */}
                    </div>

                </ul>

            </div>
        </footer>
    );
}

export default Rodape


