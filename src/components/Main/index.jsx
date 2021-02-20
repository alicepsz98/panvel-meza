import React from 'react'
import Presentation from '../Presentation/index'
import Article from '../Article/index'
import Catalog from '../Catalog/index'
import Footer from '../Footer/index'
import FilterButton from '../FilterButton/index'
import amount from '../../assets/amount.png'
import order from '../../assets/order.png'
import { MainContainer } from './style'

const Main = () => {
  return (
    <MainContainer>
      <div className="buttons">
        <FilterButton
          img={amount}
          name="Quantidade"
        />
        <FilterButton
          img={order}
          name="Ordenar"
        />
      </div>
      <Presentation />
      <div className="section">
        <div>
          <Article 
            title = "COMO ESCOLHER O MELHOR SHAMPOO?"
            text = "It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of using 
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', making it look like readable 
              English. Many desktop publishing packages and web page editors now use Lorem 
              Ipsum as their default model text, and a search for 'lorem ipsum'."
          />
          <Article 
            title = "QUEDA DE CABELO NUNCA MAIS"
            text = "It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using 
            Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', making it look like readable 
            English. Many desktop publishing packages and web page editors now use Lorem 
            Ipsum as their default model text."
          />
        </div>
        <Catalog />
      </div>
      <div className="article">
        <h3>ANTICASPA</h3>
        <p>
          It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout. The point of using 
          Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
          as opposed to using 'Content here, content here', making it look like readable 
          English. Many desktop publishing packages and web page editors now use Lorem 
          Ipsum as their default model text, and a search for 'lorem ipsum'.
        </p>
      </div>
      <Footer />
    </MainContainer>
  );
}

export default Main
