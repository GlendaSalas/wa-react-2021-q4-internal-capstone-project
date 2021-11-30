import * as styled from './Pagination.css.js';
import Button from '../../commons/Button/Button';
import React from 'react';

const pagination = () => {
  const numberOfPages = 10;
  const items = new Array(numberOfPages);
  items.fill(1);
  return (
    <styled.PaginationWrapper>
      <Button>
        <styled.ItemWrapper>Start</styled.ItemWrapper>
      </Button>
      <Button>
        <styled.ItemWrapper>Prev</styled.ItemWrapper>
      </Button>
      {items.map((n, idx) => (
        <Button key={`pagination_${idx}`}>
          <styled.ItemWrapper>{idx}</styled.ItemWrapper>
        </Button>
      ))}
      <Button>
        <styled.ItemWrapper>Next</styled.ItemWrapper>
      </Button>
      <Button>
        <styled.ItemWrapper>End</styled.ItemWrapper>
      </Button>
    </styled.PaginationWrapper>
  );
};

export { pagination as Pagination };
