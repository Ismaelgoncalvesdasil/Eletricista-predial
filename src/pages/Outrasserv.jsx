import React from 'react';
import { Link } from 'react-router-dom';
import './Outrasserv.css'

const Serv = () => {
  const subjects = [
    'Instalações de CFTV(Circuito fechado de tv) mais conhecido como Camera de segurança',
    'Instalaçoes de Centrais Convencionais de Incêndio'
  ];

  return (
    <div className='Serv'>
      <h1>Ismael Gonçalves Eletricista predial</h1>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            <Link to={`/Contato/${encodeURIComponent(subject)}`}>{subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Serv;