import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  img {
    margin: 0;
    width: 100%;
    @media (min-width: 800px) {
      width: 50%;
    }
  }
  .banner2 {
    display: none;
    @media (min-width: 800px) {
      display: inline-block;
    }
  }
`