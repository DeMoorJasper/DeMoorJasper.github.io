import stylish from 'tiny-stylish-components';

exports.A = stylish.a`
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: underline;
  }
`;

exports.H1 = stylish.h1`
  font-family: Tajawal, Sans-Serif;
  font-size: 4rem;
  margin-bottom: 1rem;
`;

exports.H2 = stylish.h2`
  font-family: Tajawal, Sans-Serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 60rem) {
    max-width: 40rem;
  }
`;

exports.H3 = stylish.h3`
  font-family: Tajawal, Sans-Serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

exports.Line = stylish.hr`
  width: 40rem;
  height: 0.2rem;
  background: #000000;
  border: none;
  margin-bottom: 2rem;
  @media (max-width: 40rem) {
    width: 100%;
  }
`;