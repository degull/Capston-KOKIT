import React, { useState } from 'react';
import * as S from './Container.styled';
import Link from 'next/link';
import Tooltip from './Tooltip';

export default function Container() {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <S.Container>
      <S.Search type="text" placeholder="" />
      <Link href="/Login">
        <S.Login>로그인</S.Login>
      </Link>
      <Link href='/SignUp'>
        <S.SignUp>회원가입</S.SignUp>
      </Link>
      <S.LangImg src="/img/globe.png"/>
      <S.Language
        
        onClick={toggleTooltip}
      >
        Language
      </S.Language>
      <S.SearchImg src="/img/Search.png" />
      <S.arrowImg 
        src='/img/arrow_down.png'
        onClick={toggleTooltip}
      />
      <S.TooltipContainer show={showTooltip}>
        <S.TooltipContent1>English</S.TooltipContent1>
        <S.TooltipContent2>日本語</S.TooltipContent2>
        <S.TooltipContent3>中文</S.TooltipContent3>
      </S.TooltipContainer>
    </S.Container>
  );
}

