import React from "react";
import styled from "@emotion/styled";

import { quoteContext } from "../contexts/quote";
import ErrorMessage from "./error-message";
import Blockquote from "./blockquote";

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 5vw;
  -webkit-tap-highlight-color: transparent;
`;

const HomeView = () => {
  const { quote, error } = React.useContext(quoteContext);

  return (
    <Container>{!error && quote ? <Blockquote text={quote.text} author={quote.author} /> : <ErrorMessage />}</Container>
  );
};

export default HomeView;
