import * as React from "react";
import styled from "styled-components";

export const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`;

const main = (props) => {
  return <MainWrapper>{props.children}</MainWrapper>;
};

export default main;
