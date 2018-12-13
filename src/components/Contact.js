import React,  { Component } from 'react';
import stylish from 'tiny-stylish-components';

import { Center } from './styled/Containers';
import { H1, H2, Line } from './styled/Elements';
import Socials from './Socials';

const HeaderElement = stylish.footer`
  text-align: center;
`;

export default class Contact extends Component {
  render() {
    return <Center>
      <HeaderElement>
        <H1>Say Hello 💬</H1>
        <H2>Want to have a chat about anything, feel free to contact me.</H2>
        <Line />
        <Socials />
      </HeaderElement>
    </Center>;
  }
}