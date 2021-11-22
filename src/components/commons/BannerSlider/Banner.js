import { Slider } from '../Slider/Slider';
import BANNERS from '../../../mocks/en-us/featured-banners.json';
import React from 'react';

const BannerSlider = () => {
  const parsedBanners = BANNERS.results.map((result) => ({
    imageUrl: result.data.main_image.url,
    href: result.href,
    title: result.data.title,
    description: result.data.description[0].text,
  }));
  return React.createElement(Slider, { items: parsedBanners });
};

export default BannerSlider;
