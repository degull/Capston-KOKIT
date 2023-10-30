import React from 'react';
import * as S from './Login.styled'

export default function Login(){
   return (
      
      <S.Wrapper>
         <S.Component>
         <S.Logo src='/img/logo_w.png' />
         <S.Text>간편하게 로그인하고<br />다양한 서비스를 이용해보세요.</S.Text>
         </S.Component>
      </S.Wrapper>
   );
};

