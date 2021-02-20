import React from 'react'
import { ButtonContainer } from './style'

const FilterButton = (props) => {
  return (
    <ButtonContainer>
      <img src={props.img} alt="Ícone"/>
      <p>{props.name}</p>
    </ButtonContainer>
  );
}

export default FilterButton
