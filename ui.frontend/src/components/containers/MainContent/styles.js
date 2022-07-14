import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 200px 77px;

  @media (max-width: 768px) {
    margin: 64px 24px;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  max-width: 540px;
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 64px 0;
`;
