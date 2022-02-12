import "./styles.css";

import TextField from "@mui/material/TextField";

function Contatos() {
  return (
    <section>
      <div className="contatos-title">
        <h1>Contato</h1>
      </div>
      <div className="contatos-telefones">
        <p>Telefones</p>
      </div>
      <div className="contatos-numero">
        <p>+55 (11) 3088-0757</p>
      </div>
      <div className="contatos-email">
        <p>E-mail</p>
      </div>
      <div className="contatos-email-empresa">
        <p>renee@reneetrajar.com.br</p>
      </div>
      <div className="contatos-info">
        <p>Atendimento Personalizado</p>
      </div>
      <div className="contatos-btn-esquerdo">
        <a href="#">Clique aqui!</a>
      </div>
      <div className="contatos-input-nome">
        <TextField
          id="filled-basic"
          label="Nome"
          variant="filled"
          required
          fullWidth
        />
      </div>
      <div className="contatos-input-email">
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          required
          fullWidth
        />
      </div>
      <div className="contatos-input-mensagem">
        <TextField
          id="filled-multiline-static"
          label="Mensagem"
          required
          fullWidth
          multiline
          rows={4}
          variant="filled"
        />
      </div>
      <div className="contatos-btn-direito">
        <a href="#">Enviar Mensagem</a>
      </div>
    </section>
  );
}

export default Contatos;
