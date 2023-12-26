import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const subjects = [
    'Mauntenção e reparo de instalações elétricas',
    'Instalaçoes elétricas novas',
    'Instalação de chuveiro elétrico',
    'Instalação de tomadas',
    'Instalação de padão light',
    'Aumento de carga',
    'Substituição de dijuntores',
    'Instalação de DPS (Dispositivo de proteção contra surto)',
    'Instalação de DR ( IDR & DDR)',
    'Outros serviços que envovam eletricidade'
  ];

  return (
    <div className='home'>
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

export default Home;
