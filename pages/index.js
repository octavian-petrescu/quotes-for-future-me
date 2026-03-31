import React from "react";
import PropTypes from "prop-types";

import { QuoteProvider } from "../contexts/quote";
import { getRandomQuote } from "../helpers/quotes";
import HomeView from "../components/home-view";

const HomePage = ({ quote, error }) => (
  <QuoteProvider initialQuote={quote} serverError={error}>
    <HomeView />
  </QuoteProvider>
);

export const getStaticProps = async () => {
  return {
    props: {
      quote: getRandomQuote(),
      error: null
    },
    revalidate: 10
  };
};

HomePage.defaultProps = {
  error: null,
  quote: null
};

HomePage.propTypes = {
  error: PropTypes.any,
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

export default HomePage;
