import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #333;
  padding: 24px 43px;

  cursor: pointer;
  border: none;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: #ffffff;

  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
