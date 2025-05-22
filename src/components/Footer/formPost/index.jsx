'use client';

import React, { useState } from 'react';

const MyForm = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '',
    message: '',
    replyTo: 'felipe@wecode.digital',
    accessKey: '7277fb36-e05f-47ef-86ff-d0bf291ca2a8'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

  const dataLayerEvent = (data) => {
    console.log(data, "dados")


    // if (typeof window.dataLayer !== 'undefined' && window.dataLayer?.push) {
      window?.dataLayer?.push({
        dadosCliente: {
          nome: data?.name,
          empresa: data?.subject,
          telefone: data?.phone,
          email: data?.phone,
          mensagem: data?.message
        },
        event: "submitFormWecode"
      });

      //console.log("datalayer", window.dataLayer)
    // };
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();
      
      if (res.ok) {
        dataLayerEvent(contact);
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
        document.querySelectorAll(".form_2").forEach((el) => {
          // console.log("el", el.value)
          el.value = ""
        })

      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occurred while submitting the form'
      });
    }

    setTimeout(() => {
      setIsButtonDisabled(false);
      setResponse({
        type: '',
        message: ''
      })
    }, 5000);
  };

  return (
    <form
      method="post"
      id="staticform"
      action="https://api.staticforms.xyz/submit"
      onSubmit={handleSubmit}
      className="formulario_master"
    >
      <div className="form_group">
        <label for="name">Nome*</label>
        <input
          className="form_2"
          name="name"
          type="text"
          id="nome"
          required
          placeholder="Nome*"
          onChange={handleChange}
        />
        <label for="subject">Empresa*</label>
        <input
          className="form_2"
          name="subject"
          type="text"
          id="empresa"
          required
          placeholder="Empresa*"
          onChange={handleChange}
        />
        <label for="phone">Telefone*</label>

        <input
          className="form_2"
          name="phone"
          type="tel"
          id="telefone"
          required
          placeholder="Telefone*"
          onChange={handleChange}
        />
        <label for="email">E-mail*</label>

        <input
          className="form_2"
          name="email"
          type="email"
          id="email"
          required
          placeholder="Email*"
          onChange={handleChange}
        />
        <label for="message">Sua mensagem*</label>
        {/* recaptcha widget */}
        <div class="g-recaptcha" data-sitekey="6LczhgUrAAAAAAWfWFCTX_pQoDAzfy2Wua0Xt8V7"></div>
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
        {/* recaptcha script */}
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </div>
    </form>
  );
};
export default MyForm;