import React,  { Component } from 'react';
import stylish from 'tiny-stylish-components';

import { Center90Height } from './styled/Containers';
import { A, H1, H2, Line } from './styled/Elements';
import Socials from './Socials';

const HeaderElement = stylish.footer`
  text-align: center;
`;

export default class Contact extends Component {
  render() {
    return <Center90Height>
      <HeaderElement>
        <H1>📑 Check out my previous work</H1>
        <H2>Find my resume <A href="/resume.html">here</A>.</H2>
        <Line />
      </HeaderElement>
    </Center90Height>;
  }
}