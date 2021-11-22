import * as styled from './Pagination.css.js';
import Button from '../../commons/Button/Button';
import React from 'react';

const pagination = () => {
  const numberOfPages = 10;
  const items = new Array(numberOfPages);
  items.fill(1);
  return React.createElement(
    styled.PaginationWrapper,
    null,
    React.createElement(Button, null, React.createElement(styled.ItemWrapper, null, 'Start')),
    React.createElement(Button, null, React.createElement(styled.ItemWrapper, null, 'Prev')),
    items.map((n, idx) =>
      React.createElement(Button, { key: `pagination_${idx}` }, React.createElement(styled.ItemWrapper, null, idx))
    ),
    React.createElement(Button, null, React.createElement(styled.ItemWrapper, null, 'Next')),
    React.createElement(Button, null, React.createElement(styled.ItemWrapper, null, 'End'))
  );
};

export { pagination as Pagination };
