import NextApp from "next/app";
import Head from "next/head";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import GlobalStyle from "../components/global-style";

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    const title = "Quotes for Future Me";
    const description = "A personal collection of reminders, reflections, and lines worth returning to.";

    return (
      <>
        <Head>
          <title>{title}</title>
          {[
            {
              name: "description",
              content: description,
            },
            {
              property: "og:title",
              content: title,
            },
            {
              property: "og:description",
              content: description,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "twitter:card",
              content: "summary",
            },
            {
              name: "twitter:title",
              content: title,
            },
            {
              name: "twitter:description",
              content: description,
            },
            {
              name: "keywords",
              content: "quotes, writing, reflections, reminders, personal notes",
            },
            {
              name: "theme-color",
              content: "#000000",
            },
          ].map((props) => (
            <meta key={props.name || props.property} {...props} />
          ))}
        </Head>

        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
}

export default App;
