import React from 'react'
import model from '../../assets/model.png'
import { CatalogContainer } from './style'

const Catalog = () => {
  return (
    <CatalogContainer>
      <div>
        CONHEÇA NOSSOS <strong>SHAMPOOS</strong>  ❯
      </div>
      <img src={model} alt="Modelo"/>
    </CatalogContainer>
  );
}

export default Catalog
