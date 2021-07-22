import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

function NewIncident() {
  return (
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Heros" />

          <h1>Cadastro novo caso</h1>
          <p>Descreva o caso detalhamente para encontrar um herói para salver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>

        </section>

        <form action="">
          <input placeholder="Título do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>

          <button className="button" type="submit">Cadastrar</button>
          
        </form>
      </div>
    </div>
  )
}

export default NewIncident
