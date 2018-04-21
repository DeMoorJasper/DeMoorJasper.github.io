import React,  { Component } from 'react';
import styled from 'styled-components';

import { Center } from './styled/Containers';
import { H1, H2, Line } from './styled/Elements';

const HeaderElement = styled.header`
  text-align: center;
`;

const CenterExtended = Center.extend`
  height: 90vh;
`;

export default class App extends Component {
  render() {
    return <CenterExtended>
      <HeaderElement>
        <H1>Hi 👋, I'm Jasper</H1>
        <H2>A full-Stack Software Engineer and a sucker for Minimalistic Design.</H2>
        <Line />
      </HeaderElement>
    </CenterExtended>;
  }
}