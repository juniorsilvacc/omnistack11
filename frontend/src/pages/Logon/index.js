import React from 'react'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

import heroesImage from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Heros" />

        <form action="">
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" className="button">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroesImage} alt="Heros" />
    </div>
  )
}

export default Logon;
