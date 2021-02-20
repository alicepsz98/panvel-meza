import styled from 'styled-components'

export const CatalogContainer = styled.div`
  width: 95%;
  max-width: 700px;
  margin: auto;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    width: 330px;
  }
  div {
    padding: 15px;
    color: white;
    background: #ca8e86;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
`