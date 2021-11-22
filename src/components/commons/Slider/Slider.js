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
  return React.createElement(
    styled.SliderContainer,
    null,
    React.createElement(
      styled.SliderWrapper,
      { ref: wrapperRef, onScroll: handleScroll },
      props.items.map((item, key) =>
        React.createElement(
          styled.SlideWrapper,
          { key: `slider_item_${key}` },
          React.createElement(styled.ImageSlider, { src: item.imageUrl, loading: 'lazy' }),
          React.createElement(styled.TitleSlider, null, item.title),
          React.createElement(styled.DescriptionSlider, null, item.description)
        )
      )
    ),
    React.createElement(
      styled.SliderControls,
      null,
      props.items.map((item, idx) =>
        React.createElement(styled.SliderControl, {
          key: `slider_control_${idx}`,
          onClick: () => handleClick(idx),
          selected: idx === selectedSlide,
        })
      )
    )
  );
};
