
import React from "react";
import * as S from './Container.styled';
import Link from 'next/link'

export default function Container() {
  return (
    <S.Container>
      <S.Search type="text" placeholder="" />
      <Link href="/Login">
        <S.Login>로그인</S.Login>
      </Link>

      <Link href='/SignUp'>
        <S.SignUp>회원가입</S.SignUp>
      </Link>
      <S.Language src='/img/Vector.png'>Language</S.Language>
      <S.SearchImg src="/img/Search.png" />
    </S.Container>
  );
};