import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 0.5em;
  color: ${(props) => props.color || ''};
  text-align: ${(props) => props.align || 'left'};
  font-family: arial;
`;
export const H2 = styled.h2`
  margin: 0;
  color: ${(props) => props.color || ''};
  text-align: ${(props) => props.align || 'left'};
  font-family: arial;
`;
export const H3 = styled.h3`
  margin: 0;
  color: ${(props) => props.color || '#3c2239'};
  text-align: ${(props) => props.align || 'left'};
  font-family: arial;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-size: ${(props) => props.size || ' 1em '};
`;
export const H4 = styled.h4`
  margin: 0;
  color: ${(props) => props.color || ''};
  text-align: ${(props) => props.align || 'left'};
  font-family: arial;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;
export const H5 = styled.h5`
  margin: 0;
  color: ${(props) => props.color || ''};
  text-align: ${(props) => props.align || 'left'};
  font-family: arial;
  font-size: ${(props) => props.size || ' 1em '};
`;
export const H6 = styled.h6`
  margin: 0;
  color: ${(props) => props.color || ''};
  text-align: ${(props) => props.align || 'left'};
  font-family: arial;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;
export const Span = styled.span`
  margin: 0;
  color: ${(props) => props.color || ''};
  text-align: ${(props) => props.align || 'left'};
  font-family: cursive;
`;
export const P = styled.p`
  margin: 0.2em;
  color: ${(props) => props.color || ''};
  text-align: ${(props) => props.align || 'left'};
  font-family: arial;
`;
