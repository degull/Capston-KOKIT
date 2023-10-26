import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  background: #9f9;
  position: fixed;
  top: 0;
  left: ${({ menuVisible }) => (menuVisible ? '0' : '-200px')};
  transition: right 0.3s ease-in-out;
  z-index: 10;
`;

export const Container = styled.div`
  width: 250px;
  height: 70px;
  /* background: #9c9; */
`

export const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent;
`;
