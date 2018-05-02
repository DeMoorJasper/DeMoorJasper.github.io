import stylish, { css } from 'tiny-stylish-components';

const Center = stylish.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

exports.Center = Center;

exports.Center90Height = Center.extend`
  height: 90vh;
`;

exports.FullHeight = stylish.div`
  height: 100vh;
`;

exports.ResponsiveFlex = stylish.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 80rem) {
    flex-direction: column;
  }
`;