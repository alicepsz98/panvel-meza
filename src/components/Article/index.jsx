import React from 'react'
import { ArticleContainer } from './style'

const Article = (props) => {
  return (
    <ArticleContainer>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </ArticleContainer>
  );
}

export default Article
