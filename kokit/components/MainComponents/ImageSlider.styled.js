/* import styled from '@emotion/styled';

export const Wrapper = styled.div`
   width: 390px;
   height: 600%;
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
`;

export const Image = styled.img`
   width: 390px;
   height: 116px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${props => props.width}%;
  align-items: flex-start; 
`;
 */

import styled from '@emotion/styled';

export const Wrapper = styled.div`
/*   width: 390px;
  height: 844px; 
  margin: 0 auto;
  border: 1px solid #000;
  background: #fff;
  backdrop-filter: blur(2px);
  border: 0;
  background: #9c9; */
`;

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 390px;
  height: 116px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${props => props.width}%;
  align-items: flex-start;
`;
