import { Fragment } from "react";
import GlobalStyle from "../src/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
