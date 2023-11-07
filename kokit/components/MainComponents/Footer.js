import React from 'react';
import * as S from './Footer.styled';

export default function Footer(){
   return (
      <S.Container>
         
         <S.CopyrightTitle>KOKIT</S.CopyrightTitle>
         <S.CopyrightText>(주)kokit |  사업자번호: 112-53-121212<br />주소 : 충남 아산시 신창면 순천향로 22</S.CopyrightText>

         <S.SNS1 src="/img/kakao.png" />
         <S.SNS2 src="/img/insta.png" />
         <S.SNS3 src="/img/facebook.png" />
         
      </S.Container>
   );
};

