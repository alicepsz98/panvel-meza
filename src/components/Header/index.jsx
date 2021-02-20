import React from 'react'
import logo from '../../assets/logo.png'
import bag from '../../assets/bag.png'
import login from '../../assets/login.png'
import menu from '../../assets/menu.png'
import lupa from '../../assets/lupa.png'
import { HeaderContainer, HeaderIn } from './style'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIn>
        <img src={logo} alt="Logo panvel" />
        <div className="menu">
          <img src={menu} alt="Menu" />
          <h4>CATEGORIAS</h4>
          <div className="input">
            <input type="search" placeholder="O que você procura?" />
            <img className="lupa" src={lupa} alt="Lupa" />
          </div>
          <img src={login} alt="Login" />
          <h4>ENTRAR</h4>
          <img src={bag} alt="Sacola" />
        </div>
      </HeaderIn>
    </HeaderContainer>
  );
}

export default Header 
