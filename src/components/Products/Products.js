import './Products.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../../mocks/es-mx/featured-products.json';
import React from 'react';
let x = 0;
function CarouselComponent() {
  return (
    <div className="grid-container">
      {data.results.map((d) => (
        <div className={'item' + x++}>
          <div class="furniture-card">
            <div class="content-wrapper">
              <img src={d.data.mainimage.url} alt={d.data.alt} class="furniture-card-img" />
              <div class="card-content">
                <div class="furniture-name">{d.data.name}</div>
                <div class="furniture-by">{d.data.sku}</div>
                <div class="furniture-sum card-sum">${d.data.price}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div className="grid-container">
    //   <div className="furniture-store">
    //     <div className="furniture-slide">
    //       <div className="furniture">
    //         <div class="furniture-cards">
    //           <div class="grid-container">
    //             {data.results.map((d) => (
    //               <div className={'item' + x++}>
    //                 <div class="furniture-card">
    //                   <div class="content-wrapper">
    //                     <img src={d.data.mainimage.url} alt={d.data.alt} class="furniture-card-img" />
    //                     <div class="card-content">
    //                       <div class="furniture-name">{d.data.name}</div>
    //                       <div class="furniture-by">{d.data.sku}</div>
    //                       <div class="furniture-sum card-sum">{d.data.price}</div>
    //                     </div>
    //                   </div>
    //                 </div>
    // //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CarouselComponent;
