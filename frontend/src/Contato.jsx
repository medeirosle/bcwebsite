import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { postContactMessage } from "./App.API";

function Contato() {
  const [contactMessage, setContactMessage] = useState({name: '', email: '', message: ''})  
  const [resultMessage, setResultMessage] = useState('Preencha os campos abaixo para enviar sua mensagem:')
  const [captcha, setCaptcha] = useState("");


  async function sendContactMessage() {

    if (!contactMessage.name || !contactMessage.email || !contactMessage.message) {
      setResultMessage('Preencha todos os campos corretamente.')
      return
    }

    setResultMessage('Aguarde, enviando e-mail...')
    await postContactMessage(contactMessage)
    setContactMessage({name: '', email: '', message: ''})
    setResultMessage('Muito obrigado pelo seu contato!')
  }

  return (
    <section id="contato" className="contatoSection">
      <h1>Contato</h1>
        <div>{resultMessage}</div>
        <form id="contact-form">
          <div className="formContainer">
            <div className="label">Nome: </div>
            <div className="field">
              <input type="text" onChange={(e) => setContactMessage({...contactMessage, name: e.target.value})} value={contactMessage.name} />
            </div>
            <div className="label">E-mail: </div>
            <div className="field">
              <input type="email" onChange={(e) => setContactMessage({...contactMessage, email: e.target.value})} value={contactMessage.email} />
            </div>
            <div className="label">Mensagem: </div>
            <div className="field">
              <textarea rows="8" onChange={(e) => setContactMessage({...contactMessage, message: e.target.value})} value={contactMessage.message}></textarea>
            </div>
            <div>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_SITE_KEY}
              onChange={setCaptcha} />
            </div>
            <div className="action">
              {
                captcha? <button onClick={async ()=> await sendContactMessage()}>Enviar</button> : null
              }
            </div>
            <br />
          </div>          
        </form>
    </section>
  );
}

export default Contato;
