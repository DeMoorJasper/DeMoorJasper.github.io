import React,  { Component } from 'react';
import styled from 'styled-components';

import { Center } from './styled/Containers';
import { H1, H2, Line } from './styled/Elements';
import Socials from './Socials';

const HeaderElement = styled.footer`
  text-align: center;
`;

export default class Contact extends Component {
  render() {
    return <Center>
      <HeaderElement>
        <H1>Say Hello 💬</H1>
        <H2>Have a question? Wanna talk? Want to work together on something? Don't hesitate to contact me.</H2>
        <Line />
        <Socials />
      </HeaderElement>
    </Center>;
  }
}