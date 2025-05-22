import React, { useState } from 'react';
import {BACKEND_ENDPOINT} from '../../constants'

const MyForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [response, setResponse] = useState({ type: '', message: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      const res = await fetch(BACKEND_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Accept: 'application/vnd.vtex.ds.v10+json',
          // 'X-VTEX-API-AppKey': 'vtexappkey-wecode-VSEKLD',
          // 'X-VTEX-API-AppToken': 'RGTGLRQELVMXDDFBBXZBJTBPONBZBDPTFYEFRUYAHPKNDOFMRKFMAZOXAWLYWRTBZRDOGWIVZGSTHJZOFFNVZBUNWZAVQIFYVNTYPYFGCLODCZLXVSTQBIPEGRPSNSRN'
        },
        body: JSON.stringify(contact)
      });

      const json = await res.json();

      if (res.ok) {

        setResponse({
          type: 'success',
          message: 'Obrigado! Sua mensagem foi enviada com sucesso.'
        });
        document.querySelectorAll(".form_2").forEach((el) => {
          el.value = "";
        });
      } else {
        setResponse({
          type: 'error',
          message: json?.Message || 'Erro ao enviar o formulário.'
        });
      }
    } catch (e) {
      console.log('Erro:', e);
      setResponse({
        type: 'error',
        message: 'Erro ao enviar o formulário.'
      });
    }

    setTimeout(() => {
      setIsButtonDisabled(false);
      setResponse({ type: '', message: '' });
    }, 5000);
  };

  return (
    <form id="vtexform" onSubmit={handleSubmit} className="formulario_master">
      <div className="form_group">
        <label htmlFor="name">Nome*</label>
        <input
          className="form_2"
          name="name"
          type="text"
          id="nome"
          required
          placeholder="Nome*"
          onChange={handleChange}
        />
        <label htmlFor="subject">Empresa*</label>
        <input
          className="form_2"
          name="subject"
          type="text"
          id="empresa"
          required
          placeholder="Empresa*"
          onChange={handleChange}
        />
        <label htmlFor="phone">Telefone*</label>
        <input
          className="form_2"
          name="phone"
          type="tel"
          id="telefone"
          required
          placeholder="Telefone*"
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail*</label>
        <input
          className="form_2"
          name="email"
          type="email"
          id="email"
          required
          placeholder="Email*"
          onChange={handleChange}
        />
        <label htmlFor="message">Sua mensagem*</label>
        <textarea
          className="form_2"
          name="message"
          id="mensagem"
          required
          placeholder="Nos envie uma mensagem por aqui!*"
          onChange={handleChange}
        ></textarea>
        <button
          className={`form_2 submit-botao ${isButtonDisabled ? 'submit-botao-disabled' : ''}`}
          type="submit"
          disabled={isButtonDisabled}
        >
          {response.type === 'success' ? 'Enviado' : 'Enviar'}
        </button>
        {response.message && (
          <p className={`form-response ${response.type}`}>{response.message}</p>
        )}
      </div>
    </form>
  );
};

export default MyForm;
