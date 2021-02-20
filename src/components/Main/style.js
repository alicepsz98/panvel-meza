import styled from 'styled-components'

export const MainContainer = styled.div`
  background: #eeeeee;
  .buttons {
    padding: 15px 0 10px 0;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .section {
    @media (min-width: 700px) {
      display: flex;
      width: 700px;
      margin: auto;
    }
  }
  .article {
    padding: 13px;
    background: white;
    width: 95%;
    max-width: 700px;
    margin: auto;
    margin-bottom: 15px;
    h3 {
      color: #de8e85;
      font-size: 98%; 
      padding-bottom: 10px;
    }
    p {
      font-size: 90%;
      color: #6f6f6f;
    }
  }
`