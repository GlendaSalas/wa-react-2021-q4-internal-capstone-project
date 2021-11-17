import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import data from '../mocks/es-mx/product-categories.json';
import React from 'react';

function CarouselComponent() {
  console.log(data.results[0]);
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
