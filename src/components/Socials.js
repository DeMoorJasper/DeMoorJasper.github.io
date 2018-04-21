import React,  { Component } from 'react';
import styled from 'styled-components';

import Twitter from './Icons/Twitter';
import GitHub from './Icons/GitHub';
import LinkedIn from './Icons/LinkedIn';
import Medium from './Icons/Medium';
import Email from './Icons/Email';

const A = styled.a`
  margin-left: 2rem;
  margin-right: 2rem;
  display: inline-block;
`;

export default class App extends Component {
  render() {
    return <div>
      <A href="https://twitter.com/JasperDeMoor"><Twitter /></A>
      <A href="https://github.com/DeMoorJasper"><GitHub /></A>
      <A href="https://www.linkedin.com/in/jasperdm/"><LinkedIn /></A>
      <A href="https://medium.com/@jasperdm"><Medium /></A>
      <A href="mailto:jasperdemoor@gmail.com"><Email /></A>
    </div>;
  }
}