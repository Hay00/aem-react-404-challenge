import React from 'react';

import { Container, Text, Title } from './styles';

const ErrorMessage = ({ title, text }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default ErrorMessage;
