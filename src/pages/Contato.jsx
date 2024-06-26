// src/components/Form.js
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './Contato.css'; // Importe o arquivo CSS

const Contato = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { subject } = useParams(); // Obtém o assunto da URL

  useEffect(() => {
    if (subject) {
      // Se o assunto estiver presente na URL, pré-preencha o campo 'subject'
      setValue('subject', subject);
    }
  }, [subject, setValue]);

  const onSubmit = (data) => {
    // lógica para enviar os dados para o WhatsApp
    const message = `Assunto: ${data.subject}%0ANome: ${data.name}%0AEmail: ${data.email}%0AMensagem: ${data.message}`;
    const whatsappLink = `https://wa.me/+5521989527772?text=${message}`;

    // Redireciona para o link do WhatsApp
    window.location.href = whatsappLink;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Assunto:
        <select {...register('subject', { required: true })} disabled={!!subject}>
          {subject && <option value={subject}>{subject}</option>}
          <option value="">Selecione um assunto</option>
          <option value="Mauntenção e reparo de instalações elétricas">Mauntenção e reparo de instalações elétricas</option>
          <option value="Instalaçoes elétricas novas">Instalaçoes elétricas novas</option>
          <option value="Instalação de chuveiro elétrico">Instalação de chuveiro elétrico</option>
          <option value="Instalação de tomadas">Instalação de tomadas</option>
          <option value="Instalação de padão light">Instalação de padão light</option>
          <option value="Aumento de carga">Aumento de carga</option>
          <option value="Substituição de dijuntores">Substituição de dijuntores</option>
          <option value="Instalação de DPS (Dispositivo de proteção contra surto)">Instalação de DPS (Dispositivo de proteção contra surto)</option>
          <option value="Instalação de DR ( IDR & DDR)">Instalação de DR ( IDR & DDR)</option>
          <option value="Outros serviços que envovam eletricidade">Outros serviços que envovam eletricidade</option>
          <option value="Instalações de CFTV(Circuito fechado de tv) mais conhecido como Camera de segurança">Instalações de CFTV(Circuito fechado de tv) mais conhecido como Camera de segurança</option>
          <option value="Instalaçoes de Centrais Convencionais de Incêndio">Instalaçoes de Centrais Convencionais de Incêndio</option>
          <option value="Instalações de Cabo de rede">Instalações de Cabo de rede</option>
          <option value="Instalações de Roteadores">Instalações de Roteadores</option>
          <option value="Configuração de Roteadores">Configuração de Roteadores</option>
          <option value="Formatação de computadores">Formatação de computadores</option>
          <option value="Instalações de sistemas operacionais">Instalações de sistemas operacionais</option>
          <option value="Instalaçoes de pacotes office">Instalaçoes de pacotes office</option>
        </select>
      </label>
      <label>
        Nome:
        <input {...register('name', { required: true })} />
      </label>
      <label>
        Email:
        <input {...register('email', { required: true })} />
      </label>
      <label>
        Mensagem:
        <textarea {...register('message', { required: true })} />
      </label>
      <div className='btn'>
      <button type="submit">Enviar para o WhatsApp</button>
      </div>
    </form>
  );
};

export default Contato;
