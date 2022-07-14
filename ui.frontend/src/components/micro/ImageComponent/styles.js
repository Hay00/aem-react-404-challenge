import styled from 'styled-components';

export const StyledImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  max-width: 100%;
  max-height: 100%;
  margin: '0px auto';
`;
