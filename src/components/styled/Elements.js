import styled from 'styled-components';

exports.H1 = styled.h1`
  font-family: Tajawal, Sans-Serif;
  font-size: 4rem;
  margin-bottom: 1rem;
`;

exports.H2 = styled.h2`
  font-family: Tajawal, Sans-Serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 60rem) {
    max-width: 40rem;
  }
`;

exports.H3 = styled.h3`
  font-family: Tajawal, Sans-Serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

exports.Line = styled.hr`
  width: 40rem;
  height: 0.2rem;
  background: #000000;
  border: none;
  margin-bottom: 2rem;
  @media (max-width: 40rem) {
    width: 100%;
  }
`;