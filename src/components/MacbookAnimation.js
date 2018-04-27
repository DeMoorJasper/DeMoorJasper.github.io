import React, { Component } from 'react';
import styled from 'styled-components';

const MacbookContainer = styled.div`
  margin: 0 auto;
`;

const Screen = styled.div`
  border: 0rem solid #000000;
  border-radius: 1rem 1rem 0 0;
  border-bottom: none;
  height: 16rem;
  width: 26rem;
  background: #000000;
  margin-left: 1rem;
  padding: 2rem;
  font-family: 'Open Sans', Sans-Serif;
`;

const Desktop = styled.div`
  background: #242424;
  height: 100%;
  color: #ffffff;
`;

const TopBar = styled.div`
  height: 2rem;
  width: 100%;
  background: #e0e0e0;
  border-radius: 0.2rem;
`;

const ScreenContent = styled.div`
  margin-left: 0.5rem;
  padding: 1rem 0.5rem;
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
      renderedContent: ['']
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.typeNext = this.typeNext.bind(this);
  }

  componentWillUnmount() {
    this.clearTypeInterval();
  }

  startTypeInterval() {
    this.typeNext();
    this.typeInterval = setInterval(this.typeNext, 25);
  }

  clearTypeInterval() {
    if (this.typeInterval) {
      clearInterval(this.typeInterval);
      this.typeInterval = null;
    }
  }

  typeNext() {
    let renderedContent = this.state.renderedContent;
    if (this.props.content.length >= renderedContent.length) {
      let i = renderedContent.length - 1;
      if (this.props.content[i].length === renderedContent[i].length) {
        i++;
        if (i === this.props.content.length) {
          return this.clearTypeInterval();
        }
        renderedContent[i] = '';
      }
      renderedContent[i] += this.props.content[i].substring(renderedContent[i].length, renderedContent[i].length + 1);
      this.setState({ renderedContent });
    }
  }

  handleMouseEnter(evt) {
    if (Array.isArray(this.props.content)) {
      this.startTypeInterval();
    }
  }

  handleMouseLeave(evt) {
    // Do nothing
  }

  render() {
    return <MacbookContainer onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      <Screen>
        <Desktop>
          <TopBar>
            <svg height="20" width="54">
              <circle cx="10" cy="10" r="5" fill="#fc605c" />
              <circle cx="25" cy="10" r="5" fill="#fdbc40" />
              <circle cx="40" cy="10" r="5" fill="#34c749" />
            </svg>
          </TopBar>
          <ScreenContent>
            {this.state.renderedContent.map((line, index) => <Line key={index}>{'> '}{line}</Line>)}
          </ScreenContent>
        </Desktop>
      </Screen>
      <KeyBoard>
        <Detailing />
      </KeyBoard>
    </MacbookContainer>;
  }
}