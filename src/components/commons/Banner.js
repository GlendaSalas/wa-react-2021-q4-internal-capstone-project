import './Banner.css';
import data from '../../mocks/en-us/featured-banners.json';
import React from 'react';

function BannerComponent() {
  return (
    <div className="flex-text">
      {data.results.map((d) => (
        <div>
          <img src={d.data.main_image.url} alt={d.data.main_image.alt} />
          <h1 id="type">{d.data.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default BannerComponent;
