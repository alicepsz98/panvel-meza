import styled from 'styled-components'

export const ArticleContainer = styled.div`
  padding: 13px;
  background: white;
  width: 95%;
  max-width: 700px;
  margin: auto;
  margin-bottom: 15px;
  box-shadow: 1px 1px #a6a6a6;
  @media (min-width: 700px) {
    width: 320px;
  }
  h3 {
    color: #de8e85;
    font-size: 98%; 
    padding-bottom: 10px;
  }
  p {
    font-size: 90%;
    color: #6f6f6f;
  }
`