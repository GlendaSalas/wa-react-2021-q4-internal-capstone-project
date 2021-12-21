/* eslint-disable react/prop-types */
import * as styled from './Slider.css.js';
import React, { useRef, useState } from 'react';

export const Slider = (props) => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const wrapperRef = useRef(null);
  const handleClick = (idx) => {
    let _a;
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const width = ((_a = wrapper.firstElementChild) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0;
      wrapper.scroll({ left: width * idx, behavior: 'smooth' });
    }
  };
  const handleScroll = () => {
    let _a;
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const width = ((_a = wrapper.firstElementChild) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0;
      const newValue = Math.floor(wrapper.scrollLeft / width);
      if (newValue !== selectedSlide) {
        setSelectedSlide(newValue);
      }
    }
  };
  return (
    <styled.SliderContainer>
      <styled.SliderWrapper ref={wrapperRef} onScroll={handleScroll}>
        {props.items.map((item, key) => (
          <styled.SlideWrapper key={`slider_item_${key}`} data-testid="slider-item">
            <styled.ImageSlider src={item.imageUrl} loading="lazy" />
            <styled.TitleSlider>{item.title}</styled.TitleSlider>
            <styled.DescriptionSlider>{item.description}</styled.DescriptionSlider>
          </styled.SlideWrapper>
        ))}
      </styled.SliderWrapper>
      <styled.SliderControls>
        {props.items.map((item, idx) => (
          <styled.SliderControl
            key={`slider_control_${idx}`}
            onClick={() => handleClick(idx)}
            selected={idx === selectedSlide}
          />
        ))}
      </styled.SliderControls>
    </styled.SliderContainer>
  );
};
