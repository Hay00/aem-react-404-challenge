import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { StyledText } from './styles';

const HeaderEditConfig = {
  emptyLabel: 'Header',
  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};

const Header = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default MapTo('aem-react-error-challenge/components/header')(
  Header,
  HeaderEditConfig
);
