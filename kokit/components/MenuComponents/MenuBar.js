import React from 'react';
import * as S from './MenuBar.styled';

export default function MenuBar({ menuVisible, onClick }) {
   return (
      <S.Wrapper menuVisible={menuVisible}>
         <S.Container>
            
            <S.CloseButton onClick={onClick} src='/img/close.png'></S.CloseButton>


         </S.Container>



      </S.Wrapper>
   );
};