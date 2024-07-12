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
    //console.log(data, "dados")


    if (typeof window.dataLayer !== 'undefined' && window.dataLayer?.push) {
      window.dataLayer.push({
        dadosCliente: {
          nome: data?.name,
          empresa: data?.subject,
          telefone: data?.phone,
          email: data?.phone,
          mensagem: data?.message
        }
      });
      console.log("datalayer", window.dataLayer)
    };
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

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
        dataLayerEvent(contact);
        document.querySelectorAll("form .form_2").forEach((el) => {
          console.log("el", el.value)
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

        <textarea
          className="form_2"
          name="message"
          id="mensagem"
          required
          placeholder="Nos envie uma mensagem por aqui!*"
          onChange={handleChange}
        ></textarea>
        <button className="form_2 enviar margem-botao">
          {response.type === 'success' && isButtonDisabled === true ? (
            <input className="submit-botao submit-botao-disabled" type="submit" value="Enviado" disabled={isButtonDisabled} />
          ) : (
            <input className="submit-botao" type="submit" value="Enviar" disabled={isButtonDisabled} />
          )}
        </button>
      </div>
    </form>
  );
};
export default MyForm;