import React from 'react';
import * as S from "./Body.styled";
import Link from 'next/link'

export default function Body(){
  return (
   
      <S.Container>
         <S.Layout1><S.LayoutImg1 src='/img/service.png'/></S.Layout1>
         <S.Layout2><S.LayoutImg2 src='img/information.png'/></S.Layout2>
         <S.Layout3><S.LayoutImg3 src='img/community.png'/></S.Layout3>
         <S.Layout4><S.LayoutImg4 src='img/job.png'/></S.Layout4>
      </S.Container>
  );
};
