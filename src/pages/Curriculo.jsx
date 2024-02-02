import React from 'react';
import { Link } from 'react-router-dom';
import './Curriculo.css'

const Curriculo = () => {
  
  return (
    <div className='curriculo'>
        <h1>Currículo</h1><br />
        <h1>Ismael Gonçalves da Silva</h1>
        <h2>Brasileiro, solteiro, 20 anos</h2>
        <h2>Vargem Pequena,Rio de Janeiro-Rj</h2><hr />
        <div className='contato'>
            <h1>Contato</h1>
            <div className='ch2'>
            <h2>(21)989527772</h2>
            <h2>ismaelgoncalveseletricista@gmail.com</h2>
            </div>
        </div><hr />
        <div className='Competencias'>
            <h1>Competências</h1>
            <div className='ch2'>
                <h2>Habilidade de se comunicar abertamente e honestamente com colegas e clientes</h2>
                <h2>Capacidade de persuasão, foco em resultados, respeito às pessoas, administração de conflitos</h2>
                <h2>Pontualidade e respeito ao prazo</h2>
                <h2>Aberto para novas ideias e abordagens.</h2>
            </div>
        </div><hr />
        <div className='Cursos '>
        <h1>Cursos</h1>
        <div className='ch2'>
            <h1> Curso de Qualificação de ELETRICISTA PREDIAL</h1>
            <h2>Curso de eletricista predial do tipo qualificação na instituição Firjan Senai tijuca com carga horária total de 400h</h2>
        </div>
        </div>
   
    </div>
  );
};

export default Curriculo;
