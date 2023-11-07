
import React from 'react';
import * as S from "./Body.styled";
import Link from 'next/link';

export default function Body() {
  return (
    <S.Container>
      <S.Row>

        <Link href="/CategoryComponents/Service/Service">
          <S.Layout1><S.LayoutImg1 src='/img/service.png' /></S.Layout1>
        </Link>

        <Link href="/CategoryComponents/Info/Info">
          <S.Layout2><S.LayoutImg2 src='img/information.png' /></S.Layout2>
        </Link>

      </S.Row>

      <S.Row>

        <Link href="/CategoryComponents/Edu/Edu">
          <S.Layout3><S.LayoutImg3 src='img/community.png' /></S.Layout3>
        </Link>

        <Link href="/CategoryComponents/Job/Job">
          <S.Layout4><S.LayoutImg4 src='/img/job.png' /></S.Layout4>
        </Link>
      </S.Row>

      <Link href="/ChatbotComponents/Chatbot">
        <S.Chatbot>
          <S.ChatbotImage src='/img/chatbot.png'/>
          <S.ChatbotTitle>CHAT BOT</S.ChatbotTitle>
        </S.Chatbot>
      </Link>
    </S.Container>
  );
};

/* 
        <S.MenuTabImg>
            <a href="/CategoryComponents/Public"><S.MenuTab1 src='img/Public_service.png'/></a>
            <a href="/CategoryComponents/Traffic"><S.MenuTab2 src='img/Traffic_service.png'/></a>
            <a href="/CategoryComponents/App"><S.MenuTab3 src='img/Application.png'/></a>

                <S.MenuTabTitle>
                <Link href="/CategoryComponents/Public"><S.MenuTitle1>public service</S.MenuTitle1></Link>
                <Link href="/CategoryComponents/Traffic"><S.MenuTitle2>traffic service</S.MenuTitle2></Link>
                <Link href="/CategoryComponents/App"><S.MenuTitle3>Application</S.MenuTitle3></Link>
                </S.MenuTabTitle>
         </S.MenuTabImg>

*/