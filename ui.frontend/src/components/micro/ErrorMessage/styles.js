import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px;
`;

export const Title = styled.h1`
  max-width: 585px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.035em;
  color: #333333;
  margin-bottom: 36px;
  text-transform: none;

  font-size: 64px;
  line-height: 95px;
  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 71px;
  }
`;

export const Text = styled.p`
  max-width: 380px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.035em;
  color: #4f4f4f;

  font-size: 24px;
  line-height: 36px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`;
