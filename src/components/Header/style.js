import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  background: #023c8d;
  height: 40px;
  text-align: center;
`

export const HeaderIn = styled.div`
  width: 95%;
  max-width: 700px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 7px;
  .input {
    display: none;
    position: relative;
    margin: 0 40px;
    input {
      height: 27px;
      border-radius: 4px;
      border: none;
      outline: none;
      width: 320px;
      padding: 0 5px;
    }
    img {
      position: absolute;
      top: 6px;
      right: 0;
    }
    @media (min-width: 800px) {
      display: inline-block;
    }
  }
  .menu {
    color: white;
    display: flex;
    align-items: center;
    margin-right: 20px;
    img {
      width: 15px;
      margin: 0 5px 0 13px ;
      cursor: pointer;
    }
    h4 {
      display: none;
      font-size: 90%;
      cursor: pointer;
      @media (min-width: 600px) {
        display: inline-block;
        margin: 3px 5px 0 0;
      }
    }
  }
`