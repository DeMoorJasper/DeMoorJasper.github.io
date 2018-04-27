import React, { Component } from 'react';
import styled from 'styled-components';

const MacbookContainer = styled.div`
  margin: 0 auto;
`;

const Screen = styled.div`
  border: 0.25rem solid #000000;
  border-radius: 1rem 1rem 0 0;
  border-bottom: none;
  height: 18rem;
  width: 28rem;
  background: #242424;
  margin-left: 1rem;
  padding: 1rem;
  color: #ffffff;
  font-family: 'Open Sans', Sans-Serif;
`;

const TopBar = styled.div`
  height: 3rem;
  width: 100%;
`;

const ScreenContent = styled.div`
  margin-left: 0.5rem;
`;

const KeyBoard = styled.div`
  border: 0.25rem solid #000000;
  border-radius: 0 0 1rem 1rem;
  height: 1rem;
  width: 32rem;
`;

const Detailing = styled.div`
  border: 0.2rem solid #000000;
  border-radius: 0 0 1rem 1rem;
  border-top: none;
  height: 0.5rem;
  width: 5rem;
  margin-left: 13.5rem;
`;

const Line = styled.p`
  margin-bottom: 0.2rem;
`;

export default class MacbookAnimation extends Component {
  constructor() {
    super();
    this.state = {
      renderContent: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(evt) {
    if (this.props.content) {
      this.setState({ renderContent: true });
    }
  }

  handleMouseLeave(evt) {
    if (this.props.content) {
      this.setState({ renderContent: false });
    }
  }

  render() {
    return <MacbookContainer onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      <Screen>
        <TopBar>
          <svg height="20" width="54">
            <circle cx="10" cy="10" r="5" fill="#fc605c" />
            <circle cx="25" cy="10" r="5" fill="#fdbc40" />
            <circle cx="40" cy="10" r="5" fill="#34c749" />
          </svg>
        </TopBar>
        <ScreenContent>
          {this.state.renderContent && 
          Array.isArray(this.props.content) && 
          this.props.content.map((line, index) => <Line key={index}>{'> '}{line}</Line>)}
        </ScreenContent>
      </Screen>
      <KeyBoard>
        <Detailing />
      </KeyBoard>
    </MacbookContainer>;
  }
}