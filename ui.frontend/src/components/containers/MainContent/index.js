import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import Button from '../../micro/Button';

import { Container, ButtonContainer } from './styles';
import ErrorMessage from '../../micro/ErrorMessage';

const MainContentEditConfig = {
  emptyLabel: 'Main Content',
  isEmpty: function (props) {
    const title = !props.title || props.title.trim().length < 1;
    const text = !props.text || props.text.trim().length < 1;
    const button = !props.buttonText || props.buttonText.trim().length < 1;
    return !props || title || text || button;
  },
};

const MainContent = ({ errorTitle, errorText, buttonText }) => {
  return (
    <Container>
      <ErrorMessage title={errorTitle} text={errorText} />
      <ButtonContainer>
        <Button text={buttonText} />
      </ButtonContainer>
    </Container>
  );
};

export default MapTo('aem-react-error-challenge/components/main-content')(
  MainContent,
  MainContentEditConfig
);
