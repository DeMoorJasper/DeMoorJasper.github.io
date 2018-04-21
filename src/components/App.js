import React,  { Component } from 'react';
import styled from 'styled-components';

import { FullHeight } from './styled/Containers';
import Header from './Header';
import Contact from './Contact';
import ArrowDown from './ArrowDown';

export default class App extends Component {
  render() {
    return <div>
      <FullHeight height={90}>
        <Header />
        <ArrowDown altText="Contact & Social media" multiplier={1} />
      </FullHeight>
      <FullHeight>
        <Contact />
      </FullHeight>
    </div>;
  }
}