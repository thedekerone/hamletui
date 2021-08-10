import { Fragment, useEffect, useState } from "react";
import GlobalStyle from "../src/globalStyles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "../src/reducers";
import { defaultState } from "../src/actions";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { allSounds } from "../src/querys/querys";
import { formatSounds } from "../src/util";
import AudioManager from "../src/Audio/components/AudioManager";

const client = new ApolloClient({
  uri: "http://localhost:4000/admin/api",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  let state = defaultState;

  let store = createStore(todoApp, defaultState);
  console.log(state);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AudioManager>
          <GlobalStyle></GlobalStyle>
          <Component {...pageProps} />;
        </AudioManager>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
