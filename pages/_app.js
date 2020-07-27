import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import "../styles/index.css"
const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);
 
export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache().restore(initialState || {})
  });
})(App);