import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import Header from './components/Header/index'
import GlobalStyle from './style/global'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App
