import React,  { Component } from 'react';
import stylish from 'tiny-stylish-components';

import { Center90Height } from './styled/Containers';
import { H1, H2, Line } from './styled/Elements';

const HeaderElement = stylish.header`
  text-align: center;
`;

export default class Header extends Component {
  render() {
    return <Center90Height>
      <HeaderElement>
        <H1>Hi 👋, I'm Jasper</H1>
        <H2>A full-Stack Software Engineer with a big love for Minimalistic Design.</H2>
        <Line />
      </HeaderElement>
    </Center90Height>;
  }
}