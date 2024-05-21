import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Certificados.css'
// import certificadoeletricista from '../assets/Certificados/certificadoeletricista.png'
import certificadoparticipacao from '../assets/Certificados/certificado participação.png'
import certificadocftv from '../assets/Certificados/certificado cftv 1.png'
import certificadocftv2 from '../assets/Certificados/certificado cftv 2.png'
import certificadoincendio from '../assets/Certificados/certificado incendio.png'

const Certificado = () => {
    const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

    return (
   
        <div className="certificado">
            <h1 className="tipo">Eletricista predial</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />
            {/* <img src={certificadoeletricista} alt="" /> */}
            
            <h1> Participação voluntariamente da montagem e configuração da planta didática em sistemas de segurança eletrônica</h1>
            <img src={certificadoparticipacao} />

            <h1>Instalação de Circuitos Fechados de TV - CFTV - Nível 1/2</h1>

            <h2>clique em cima do certificado para ver o próximo</h2>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Frente */}
        <Card key="front" className="card" onClick={handleClick}>
          <Card.Body>
            <img src={certificadocftv}/>
          </Card.Body>
        </Card>
  
        {/* Verso */}
        <Card key="back" className="card" onClick={handleClick}>
          <Card.Body>
            <img src= {certificadocftv2}/>
          </Card.Body>
        </Card>
      </ReactCardFlip>
            
            <h1>Centrais Convencionais de Incêndio</h1>
            <img src={certificadoincendio} />
        </div>
    )
}

export default Certificado