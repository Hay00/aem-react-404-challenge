import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px 77px;
  @media (max-width: 768px) {
    margin: 20px 24px;
  }
`;

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <Container>
        {this.childComponents}
        {this.childPages}
      </Container>
    );
  }
}

export default withModel(App);
