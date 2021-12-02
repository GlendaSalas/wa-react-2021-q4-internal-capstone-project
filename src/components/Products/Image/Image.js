import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import * as style from "./ProductImage.style";

export const ProductImage = (props) => {
    const images = props.product.images.map((image) => ({
        original: image,
        thumbnail: image,
    }));
    return (
        <style.ProductImageWrapper>
          <ImageGallery
            items={images}
            showBullets={false}
            showIndex={false}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
            showNav={false}
          />
        </style.ProductImageWrapper>
      );
};
