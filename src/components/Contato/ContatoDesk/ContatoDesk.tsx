"use client"

import React, { useState } from 'react';
import styles from "./sass/styles.module.scss";
declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
  }
}


type ContactInfo = {
  name: string;
  email: string;
  enterprise: string;
  phone: string;
  honeypot: string;
  message: string;
};

const initialContactState: ContactInfo = {
  name: '',
  email: '',
  enterprise: '',
  phone: '',
  honeypot: '',
  message: '',
};

export default function ContatoDesk() {
  const [contact, setContact] = useState<ContactInfo>(initialContactState);
  const [response, setResponse] = useState({ type: '', message: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const mphone = (v: string) => {
    let r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");

    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }

    return r;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setContact(prev => ({
      ...prev,
      [name]: name === 'phone' ? mphone(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      const res = await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });

      const json = await res.json();

      if (res.ok) {
        setResponse({ type: 'success', message: 'Enviado com sucesso!' });
        setContact(initialContactState);
        window.dataLayer?.push({
          event: "submitFormCentric",
          dadosCliente: {
            nome: contact.name,
            empresa: contact.enterprise,
            telefone: contact.phone,
            email: contact.email,
            mensagem: contact.message,
          },
        });
      } else {
        setResponse({ type: 'error', message: json.message || 'Erro ao enviar.' });
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setResponse({ type: 'error', message: 'Erro interno ao enviar.' });
    } finally {
      setIsButtonDisabled(false);
    }
  };


  return (
    <section id="contato">
      <div>
        <form onSubmit={handleSubmit} >
          <div className={styles.contatoFormGroup}>
            <div>
              <label htmlFor="name">Nome*</label>
              <input
                
                name="name"
                type="text"
                id="name"
                required
                value={contact.name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="enterprise">Empresa*</label>
              <input
                
                type="text"
                id="enterprise"
                name="enterprise"
                required
                value={contact.enterprise}
                onChange={handleChange}
                placeholder="Digite o nome da empresa"
              />
            </div>

            <div>
              <label htmlFor="phone">Telefone*</label>
              <input
                
                inputMode="numeric"
                type="tel"
                id="phone"
                name="phone"
                required
                value={contact.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                maxLength={15}
                pattern="\(?\d{2}\)?\s?\d{4,5}-\d{4}"
              />
            </div>

            <div>
              <label htmlFor="email">E-mail*</label>
              <input
                
                name="email"
                type="email"
                id="email"
                required
                value={contact.email}
                onChange={handleChange}
                placeholder="Digite seu melhor e-mail"
              />
            </div>

            <div style={{ display: "none" }}>
              <input
                type="text"
                name="honeypot"
                value={contact.honeypot}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="message">Sua mensagem*</label>
              <textarea
                
                name="message"
                id="message"
                required
                value={contact.message}
                onChange={handleChange}
                placeholder="Escreva aqui sua mensagem"
              ></textarea>
            </div>

            <button className={'submit-botao'} type="submit" disabled={isButtonDisabled}>
              {isButtonDisabled ? 'Enviando...' : 'Enviar'}
            </button>

            {response.message && (
              <p style={{ color: response.type === 'success' ? 'green' : 'red' }}>
                {response.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
