import React from 'react'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import { BannerContainer } from './style'

const Banner = () => {
  return (
    <BannerContainer>
      <img src={banner1} alt="Banner"/>
      <img className="banner2" src={banner2} alt="Banner"/>
    </BannerContainer>
  );
}

export default Banner
