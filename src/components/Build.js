import React,  { Component } from 'react';
import stylish from 'tiny-stylish-components';

import { Center90Height, ResponsiveFlex } from './styled/Containers';
import { H1, H2, Line } from './styled/Elements';
import MacbookAnimation from './MacbookAnimation';

const AlignLeft = stylish.div`
  text-align: left;
  margin-left: 5rem;
  margin-top: 5rem;
  @media (max-width: 80rem) {
    margin-left: 0;
    text-align: center;
  }
`;

export default class Build extends Component {
  render() {
    return <Center90Height>
      <ResponsiveFlex>
        <MacbookAnimation content={[
          'ssh root@myserver.local', 
          'root: *********',
          'git clone github.com/DeMoorJasper/awesome.git',
          'cd awesome',
          'yarn start',
          'Starting Application...',
          'Running on localhost:8080',
          'curl http://localhost:8080',
          'Follow me on GitHub to discover some awesome projects!'
        ]} />
        <AlignLeft>
          <H1>I build things 🛠</H1>
          <H2>Checkout my <a target="_blank" href="https://github.com/DeMoorJasper">GitHub</a> to see some projects I work/worked on.</H2>
          <Line />
        </AlignLeft>
      </ResponsiveFlex>
    </Center90Height>;
  }
}