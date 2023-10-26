import styled from "@emotion/styled";

export const Wrapper = styled.div`
   width: 390px;
   height: 100%;
   margin: 0 auto;
   border: 1px solid #000;
   background: #fff;
   backdrop-filter: blur(2px);
   border: 0;
   position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  top: 0;
`;

export const Logo = styled.img`
  width: 68px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  position: absolute; 
  top: 15px; 
  left: 50%; 
  transform: translateX(-50%); 
`;

export const MenuBar = styled.img`
  width: 17px;
  position: absolute;
  top: 30px;
  left: 25px;
  cursor: pointer;
`;
