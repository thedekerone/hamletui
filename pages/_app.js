import { Fragment } from "react";
import GlobalStyle from "../src/globalStyles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "../src/reducers";
import { defaultState } from "../src/actions";

let store = createStore(todoApp, defaultState);

function MyApp({ Component, pageProps }) {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
