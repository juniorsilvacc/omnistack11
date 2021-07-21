import React from 'react'
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Heros"/>
        <span>Bem vinda, APAD</span>

        <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02141"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Cadelinha atropelada</p>

          <strong>DESCRIÇÃO:</strong>
          <p>A cadelinha Jolie foi atropeada por um carro no bairro Santana e teve que passar por uma cirugia às presas.</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00 reais</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Cadelinha atropelada</p>

          <strong>DESCRIÇÃO:</strong>
          <p>A cadelinha Jolie foi atropeada por um carro no bairro Santana e teve que passar por uma cirugia às presas.</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00 reais</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Cadelinha atropelada</p>

          <strong>DESCRIÇÃO:</strong>
          <p>A cadelinha Jolie foi atropeada por um carro no bairro Santana e teve que passar por uma cirugia às presas.</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00 reais</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Cadelinha atropelada</p>

          <strong>DESCRIÇÃO:</strong>
          <p>A cadelinha Jolie foi atropeada por um carro no bairro Santana e teve que passar por uma cirugia às presas.</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00 reais</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>
      </ul>

    </div>
  )
}

export default Profile
