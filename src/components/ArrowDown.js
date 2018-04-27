import React, { Component } from 'react';
import styled from 'styled-components';

import { H3 } from './styled/Elements';

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVG = styled.svg`
  display: block;
  margin: 0 auto;
  margin-top: 1rem;
`;

export default class ArrowDown extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    evt.preventDefault();
    window.scrollTo(0, window.innerHeight * this.props.multiplier);
  }

  render() {
    return <ArrowContainer onClick={this.onClick}>
      <H3>
        {this.props.altText}
        <SVG width='20' height='20'>
          <polygon points="0,0 20,0 10,20" style={{
            fill: '#000000'
          }} />
        </SVG>
      </H3>
    </ArrowContainer>;
  }
}