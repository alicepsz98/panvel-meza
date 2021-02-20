import React from 'react'
import Banner from '../../components/Banner/index'
import Main from '../../components/Main/index'
import { HomeContainer } from './style'

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <Main />
    </HomeContainer>
  );
}

export default Home
