import React from 'react';
import StyledGeneral from '../../commons/StylesGeneral/StylesG';

const description = (props) => {
  return (
    <>
      <StyledGeneral variant="h4" color="#056461">
        Description:{' '}
      </StyledGeneral>
      <StyledGeneral variant="p" color="#666" text-alig="center" data-testid="product-detail-description">
        {props.product.description}
      </StyledGeneral>
    </>
  );
};

export { description as ProductDescription };
