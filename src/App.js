import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './navigator/Navigation';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx',
  credentials: 'same-origin',
  headers: {
    Authorization:
      'Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840',
  },
  cache: new InMemoryCache(),
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};
export default App;
