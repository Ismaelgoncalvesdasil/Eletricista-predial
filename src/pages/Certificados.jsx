import React from "react";
import './Certificados.css'
// import certificadoeletricista from '../assets/Certificados/certificadoeletricista.png'
import certificadocftv from '../assets/Certificados/certificado cftv 1.png'
import certificadoincendio from '../assets/Certificados/certificado incendio.png'

const Certificado = () => {
    return (
        <div className="certificado">
            <h1 className="tipo">Eletricista predial</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />           {/* <img src={certificadoeletricista} alt="" /> */}
            <h1>Instalação de Circuitos Fechados de TV - CFTV</h1>
            <img src={certificadocftv} />
            <h1>Centrais Convencionais de Incêndio</h1>
            <img src={certificadoincendio} />
        </div>
    )
}

export default Certificado