import styled, { css } from 'styled-components';

const Center = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

exports.Center = Center;

exports.Center90Height = Center.extend`
  height: 90vh;
`;

exports.FullHeight = styled.div`
  height: 100vh;
`;

exports.ResponsiveFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 80rem) {
    flex-direction: column;
  }
`;