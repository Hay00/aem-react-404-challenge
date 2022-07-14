import React from 'react';

import Button from '../../micro/Button';
import ImageComponent from '../../micro/ImageComponent';

import { Container, ButtonContainer, ImageContainer } from './styles';
import ErrorMessage from '../../micro/ErrorMessage';

function MainContent({ imgSrc, errorTitle, errorText, buttonText }) {
  return (
    <Container>
      <ImageContainer>
        <ImageComponent src={imgSrc} />
      </ImageContainer>
      <div>
        <ErrorMessage title={errorTitle} text={errorText} />
        <ButtonContainer>
          <Button text={buttonText} />
        </ButtonContainer>
      </div>
    </Container>
  );
}

export default MainContent;
