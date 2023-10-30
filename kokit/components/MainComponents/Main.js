
import React from 'react';
import * as S from "./Main.styled";
import Header from './Header';
import Container from './Container';
import Body from './Body';
import ImageSlider from './ImageSlider';

export default function Main() {
  return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Container/>
            <ImageSlider />
            <Body />
        </S.Container>
      </S.Wrapper>
  );
}


