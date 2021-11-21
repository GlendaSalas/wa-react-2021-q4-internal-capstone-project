import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import data from '../../mocks/en-us/product-categories.json';
import React from 'react';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        {data.results.map((d) => (
          <div>
            <img src={d.data.main_image.url} alt={d.data.name} />
            <p className="legend">{d.data.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
