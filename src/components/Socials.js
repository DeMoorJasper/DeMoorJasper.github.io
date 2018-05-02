import React,  { Component } from 'react';
import stylish from 'tiny-stylish-components';

import Twitter from './Icons/Twitter';
import GitHub from './Icons/GitHub';
import LinkedIn from './Icons/LinkedIn';
import Medium from './Icons/Medium';
import Email from './Icons/Email';

const A = stylish.a`
  margin-left: 2rem;
  margin-right: 2rem;
  display: inline-block;
`;

export default class Socials extends Component {
  render() {
    return <div>
      <A target="_blank" href="https://twitter.com/JasperDeMoor"><Twitter /></A>
      <A target="_blank" href="https://github.com/DeMoorJasper"><GitHub /></A>
      <A target="_blank" href="https://www.linkedin.com/in/jasperdm/"><LinkedIn /></A>
      <A target="_blank" href="https://medium.com/@jasperdm"><Medium /></A>
      <A target="_blank" href="mailto:jasperdemoor@gmail.com"><Email /></A>
    </div>;
  }
}