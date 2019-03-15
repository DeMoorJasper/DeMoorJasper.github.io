import '@babel/polyfill';

import React,  { Component } from 'react';

import { FullHeight } from './styled/Containers';
import Header from './Header';
import Contact from './Contact';
import Resume from './Resume';
import Build from './Build';
import ArrowDown from './ArrowDown';

export default class App extends Component {
  render() {
    return <div>
      <FullHeight height={90}>
        <Header />
        <ArrowDown altText="I build things" multiplier={1} />
      </FullHeight>
      <FullHeight>
        <Build />
        <ArrowDown altText="Resume" multiplier={2} />
      </FullHeight>
      <FullHeight>
        <Resume />
        <ArrowDown altText="Contact & Social media" multiplier={3} />
      </FullHeight>
      <FullHeight>
        <Contact />
      </FullHeight>
    </div>;
  }
}