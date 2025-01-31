import React from 'react'
import logo from '../../assets/images/logo-conexao-vip.webp'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className='container-logo'>
            <img src={logo} alt="Logo Conexão Vip" />
        </div>
    </header>
  )
}

export default Header
