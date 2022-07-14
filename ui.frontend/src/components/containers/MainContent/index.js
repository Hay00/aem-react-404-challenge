import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import Button from '../../micro/Button';
import ImageComponent from '../../micro/ImageComponent';

import { Container, ButtonContainer, ImageContainer } from './styles';
import ErrorMessage from '../../micro/ErrorMessage';

const MainContentEditConfig = {
  emptyLabel: 'Main Content',
  isEmpty: function (props) {
    const img = !props.imgSrc || props.imgSrc.trim().length < 1;
    const title = !props.title || props.title.trim().length < 1;
    const text = !props.text || props.text.trim().length < 1;
    const button = !props.buttonText || props.buttonText.trim().length < 1;
    return !props || img || title || text || button;
  },
};

const MainContent = ({ imgSrc, errorTitle, errorText, buttonText }) => {
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
};

export default MapTo('aem-react-error-challenge/components/main-content')(
  MainContent,
  MainContentEditConfig
);
