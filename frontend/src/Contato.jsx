import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { postContactMessage } from "./App.API";



function Contato() {
  const [contactMessage, setContactMessage] = useState('')
  
  async function sendContactMessage(value) {
    await postContactMessage(contactMessage)
  }

  return (
    <section id="contato" className="contatoSection">
      <h1>Contato</h1>
        <form id="contact-form" onSubmit={(e) => {sendContactMessage(e)}}>
          <div className="formContainer">
            <div className="label">Nome: </div>
            <div className="field">
              <input type="text" onChange={(e) => setContactMessage({...contactMessage, name: e.target.value})} />
            </div>
            <div className="label">E-mail: </div>
            <div className="field">
              <input type="text" onChange={(e) => setContactMessage({...contactMessage, email: e.target.value})} />
            </div>
            <div className="label">Mensagem: </div>
            <div className="field">
              <textarea rows="8" onChange={(e) => setContactMessage({...contactMessage, message: e.target.value})}></textarea>
            </div>
            <div className="action">
              <input type="submit" value="Enviar" />
            </div>
            <br />
          </div>          
        </form>
    </section>
  );
}

export default Contato;
