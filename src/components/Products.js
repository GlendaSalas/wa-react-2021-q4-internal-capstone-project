import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../mocks/es-mx/featured-products.json';
import React from 'react';

function CarouselComponent() {
  return (
    <div>
      {data.results.map((d) => (
        <div>
          <img src={d.data.mainimage.url} alt={d.data.alt} />
          <span className="legend">{d.data.name}</span>
          <span className="legend">{d.data.sku}</span>
          <span className="legend">{d.data.price}</span>
          <span className="legend">{d.data.category.slug}</span>
        </div>
      ))}
    </div>
  );
}

export default CarouselComponent;
