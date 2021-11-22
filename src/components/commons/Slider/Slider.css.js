import { BREAKPOINTS } from '../../../utils/variables';
import styled from 'styled-components';

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  overflow-y: hidden;

  // Hide scroll
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    width: 0px;
  }
`;
export const SlideWrapper = styled.div`
  flex: 0 0 100%;
  width: 100%;
  object-fit: cover;
  scroll-snap-align: center;
  position: relative;
`;
export const ImageSlider = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const TitleSlider = styled.div`
  position: absolute;
  background: rgb(248 233 231 / 78%);
  bottom: 10%;
  padding: 30px;
  font-size: 10px;
  color: #333;
  border-radius: 0 20px 20px 0;
  @media ${BREAKPOINTS.TABLET} {
    font-size: 20px;
  }

  @media ${BREAKPOINTS.DESKTOP} {
    font-size: 24px;
  }
  color: #333;
`;
export const DescriptionSlider = styled.div`
  position: absolute;
  background: rgb(214 228 228 / 78%);
  top: 50%;
  font-size: 10px;
  padding: 30px;
  color: #403838;
  font-family: cursive;
  border-radius: 0 20px 20px 0;
  @media ${BREAKPOINTS.TABLET} {
    font-size: 16px;
  }

  @media ${BREAKPOINTS.DESKTOP} {
    font-size: 20px;
  }
  padding: 30px;
  color: #403838;
`;
export const SliderControls = styled.div`
  position: absolute;
  bottom: 10px;
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SliderControl = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 15px;
  background: white;
  border: 0;
  margin: 0 16px;
  cursor: pointer;
  border: 2px solid #ddd;
  animation: 1s all linear;
  ${({ selected }) =>
    selected &&
    `
    width: 40px;
    background: rgb(233 200 223);
  `}
`;
export const SliderContainer = styled.div`
  position: relative;
`;
