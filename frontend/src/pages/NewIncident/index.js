import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

function NewIncident() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/profile');

    } catch (err) {
      alert('Erro ao cadastrar o caso, tente novamente.');
    }

  }
  

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

        <form onSubmit={handleIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
          
        </form>
      </div>
    </div>
  )
}

export default NewIncident
