import React,  { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  width: 5rem;
  height: 5rem;
  &:hover {
    fill: #2AA3EF;
  }
`;

module.exports = () => {
  return <SVG viewBox="0 0 250 250">
    <rect x="25.9" y="61.3" width="191.4" height="136.4" />
		<polyline points="217.3,61.3 124.9,125.2 25.9,61.3" style={{
      stroke: '#ffffff',
      strokeWidth: 10,
      strokeMiterlimit: 10
    }} />
  </SVG>
  ;
}