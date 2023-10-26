import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Login = styled.text`
   color: #686868;
   font-size: 9px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   position: absolute;
   top : 60px;
   display: flex;
   right: 145px;
   cursor: pointer;
`;

export const SignUp = styled.text`
   color: #686868;
   font-size: 9px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   position: absolute;
   top : 60px;
   display: flex;
   right: 100px;
   cursor: pointer;
`;

export const Language = styled.text`
   color: #686868;
   font-size: 9px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   position: absolute;
   top : 60px;
   display: flex;
   right: 30px;
   cursor: pointer;
`;

export const Search = styled.input`
   width: 343px;
   height: 33px;
  outline: none;
  border-radius: 9px;
  border : 1px solid #cfcfcf;
  border-radius: 9px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 80px;
  left: 50%; 
  transform: translateX(-50%); 
  padding-left: 25px; 
  ::placeholder {
   color: #DADADA;
   font-size: 12px;
  }
`;

/* 검색버튼 */
export const SearchImg = styled.img`
   width: 20px;
   height: 20px;
   position: absolute;
   top: 86px;
   right: 35px;
   cursor: pointer;
`