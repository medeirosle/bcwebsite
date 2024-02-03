function Contato() {
  return (
    <section id="contato" className="contatoSection">
      <h1>Contato</h1>
      <p>
        <form>
          <div className="formContainer">
            <div className="label">Nome: </div>
            <div className="field">
              <input type="text" />
            </div>
            <div className="label">E-mail: </div>
            <div className="field">
              <input type="text" />
            </div>
            <div className="label">Mensagem: </div>
            <div className="field">
              <textarea rows="8"></textarea>
            </div>
            <div className="action">
              <input type="submit" value="Enviar" />
            </div>
            <br />
          <div className="g-recaptcha" data-sitekey="6LdcFjgpAAAAALJKbSk3KEcMHFGPiBzrHylV22Hz"></div>
          </div>          
        </form>
      </p>
    </section>
  );
}

export default Contato;
