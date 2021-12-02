import React from "react";
import StyledGeneral from "../../commons/StylesGeneral/StylesG.css";

const description = (props) => {
    return (
        <>
          <StyledGeneral variant="h4">Description: </StyledGeneral>
          <StyledGeneral variant="p" color="#666">
            {props.product.description}
          </StyledGeneral>
        </>
      );
};

export { description as ProductDescription };