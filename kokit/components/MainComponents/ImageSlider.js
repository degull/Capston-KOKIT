/* import React, { useState, useRef, useEffect } from 'react';
import * as S from './ImageSlider.styled';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const images = ['/img/slide01.png', '/img/slide02.png', '/img/slide03.png'];

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } 
    else {
      setCurrentSlide(images.length - 1);
    }
  };
  useEffect(() => {
   const interval = setInterval(() => {
     nextSlide();
   }, 3000); 

   return () => {
     clearInterval(interval); 
   };
 }, [currentSlide]);

  const sliderWidth = images.length * 100; 

  const slideStyle = {
    transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
  };

  return (
    <S.Wrapper>
      <S.SliderContainer ref={containerRef}>
        <S.Slider ref={sliderRef} style={{...slideStyle, width: `${sliderWidth}%`}}>
          {images.map((image, index) => (
            <S.Image
              key={index}
              src={image}
              imageWidth={100 / images.length}
            ></S.Image>
          ))}
        </S.Slider>
      </S.SliderContainer>
    </S.Wrapper>
  );
}
 */

import React, { useState, useRef, useEffect } from 'react';
import * as S from './ImageSlider.styled';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const images = ['/img/slide01.png', '/img/slide02.png', '/img/slide03.png'];

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const sliderWidth = images.length * 100;

  const slideStyle = {
    transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
  };

  return (
    <S.Wrapper>
      <S.SliderContainer ref={containerRef}>
        <S.Slider ref={sliderRef} style={{ ...slideStyle, width: `${sliderWidth}%` }}>
          {images.map((image, index) => (
            <S.Image key={index} src={image} imageWidth={100 / images.length}></S.Image>
          ))}
        </S.Slider>
      </S.SliderContainer>
    </S.Wrapper>
  );
}
