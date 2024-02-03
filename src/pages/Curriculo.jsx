import React from 'react';
import { saveAs } from 'file-saver';
import currículo from '../assets/Curriculo/currículo.pdf'
import './Curriculo.css'

const Curriculo = () => {

    const handleDownload = () => {

        const caminhoDoArquivo = currículo;

        const nomeDoArquivo = 'curriculo.pdf';

        saveAs(caminhoDoArquivo, nomeDoArquivo);
    };


    return (
        <div className='curriculo'>
            <h1 className='curri'>Currículo</h1><br />
            <a href="/curriculo"onClick={handleDownload}>Download currículo no formato PDF</a>
            <h1>Ismael Gonçalves da Silva</h1>
            <h2>Brasileiro, solteiro, 20 anos</h2>
            <h2>Vargem Pequena,Rio de Janeiro-Rj</h2><hr />
            <div className='contato'>
                <h1>Contato</h1>
                <div className='ch2'>
                <a href="https://wa.me/message/RKR6RB5VILLUA1">(21) 98952-7772</a><br />
                <a href="mailto:ismaelgoncalveseletricista@gmail.com">ismaelgoncalveseletricista@gmail.com</a>
                    <h2></h2>
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
                    <h1>Curso online/CFTV </h1>
                    <h2>Curso de instalação e manutenção de CFTV Pela segurimax nível 1 com carga horária de 5 horas e nível 2 com carga horária de 5 horas </h2>
                    <h1>Curso online/Centrais Convencionais de Incêndio</h1>
                    <h2>Curso de instalação e manutenção de Centrais Convencionais de Incêndio Pela segurimax com carga horária de 2 horas</h2>
                    <h1>Napc/ccpts/PUC Rio</h1>
                    <h2>Participação da 10ª feira de saberes e painel de debates com classes comunitárias total de (08) horas - aula,na Puc Rio </h2>
                </div>
            </div><hr />
            <div className='Formação'>
                <h1>Formação</h1>
                <div className='ch2'>
                    <h1> Ciep 321 Dr. Ulysses Guimarães / Ensino médio concluído.</h1>
                    <h2> Conclui com êxito  o ensino médio em dezembro de 2021</h2>
                </div>
            </div><hr />
            <div className='Objetivo'>
                <h1>Objetivo</h1>
                <div className='ch2'>
                    <h2>Estou em busca de uma oportunidade de trabalho, acredito que mesmo sem experiência, meus diferenciais como vontade de aprender e esforço serão muito úteis para a empresa.</h2>
                </div>
            </div><br /><br /><br /><br />
            <div>
                <a href="/curriculo"onClick={handleDownload}>Download currículo no formato PDF</a>
                <a href="https://wa.me/message/RKR6RB5VILLUA1">Contato whatsapp</a>
                <a href="mailto:ismaelgoncalveseletricista@gmail.com">Contato E-mail</a>
            </div>

        </div>
    );
};

export default Curriculo;
