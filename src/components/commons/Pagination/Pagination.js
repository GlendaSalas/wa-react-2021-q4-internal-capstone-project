import * as styled from './Pagination.css';
import Button from '../Button/Button';
import React from 'react';
const pagination = (props) => {
  const { totalPages, page, onSetPage } = props;
  const items = new Array(totalPages);
  items.fill(1);
  return (
    <>
      {totalPages > 1 && (
        <styled.PaginationWrapper>
          <Button>
            <styled.ItemWrapper onClick={() => onSetPage(1)}>Start</styled.ItemWrapper>
          </Button>
          <Button disabled={page === 1}>
            <styled.ItemWrapper onClick={() => onSetPage(page - 1)}>Prev</styled.ItemWrapper>
          </Button>
          {items.map((n, idx) => (
            <Button key={`pagination_${idx}`} onClick={() => onSetPage(idx + 1)}>
              <styled.ItemWrapper selected={idx + 1 === page}>{idx + 1}</styled.ItemWrapper>
            </Button>
          ))}
          <Button onClick={() => onSetPage(page + 1)} disabled={page === totalPages}>
            <styled.ItemWrapper>Next</styled.ItemWrapper>
          </Button>
          <Button onClick={() => onSetPage(totalPages)}>
            <styled.ItemWrapper>End</styled.ItemWrapper>
          </Button>
        </styled.PaginationWrapper>
      )}
    </>
  );
};

export { pagination as Pagination };
